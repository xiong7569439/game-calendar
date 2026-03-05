import axios, { AxiosRequestConfig } from 'axios';
import * as cheerio from 'cheerio';
import { GameEvent, GameType, EventType } from '@/types';

// 抓取结果
export interface ScrapeResult {
  success: boolean;
  events: GameEvent[];
  error?: string;
  timestamp: string;
  source?: string;
}

// 从环境变量读取代理配置
const PROXY_URL = process.env.HTTP_PROXY || process.env.http_proxy || '';

// 默认请求头 - 模拟真实浏览器
const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'Upgrade-Insecure-Requests': '1',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1',
  'Cache-Control': 'max-age=0',
  'DNT': '1',
};

// 请求配置
const DEFAULT_TIMEOUT = 15000;
const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY = 2000;

// 延时函数
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 带重试的请求函数
interface FetchOptions {
  headers?: Record<string, string>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

async function fetchWithRetry(
  url: string, 
  options: FetchOptions = {}
): Promise<{ data: string; status: number }> {
  const headers = options.headers || DEFAULT_HEADERS;
  const timeout = options.timeout || DEFAULT_TIMEOUT;
  const retries = options.retries || DEFAULT_RETRIES;
  const retryDelay = options.retryDelay || DEFAULT_RETRY_DELAY;
  
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`[Scraper] Attempt ${attempt}/${retries} for ${url}`);
      
      const axiosConfig: AxiosRequestConfig = {
        headers,
        timeout,
        responseType: 'text',
      };
      
      // 如果配置了代理
      if (PROXY_URL) {
        try {
          const proxyUrl = new URL(PROXY_URL);
          axiosConfig.proxy = {
            host: proxyUrl.hostname,
            port: parseInt(proxyUrl.port) || 8080,
            protocol: proxyUrl.protocol.replace(':', '') as 'http' | 'https',
          };
          console.log(`[Scraper] Using proxy: ${proxyUrl.hostname}:${proxyUrl.port}`);
        } catch {
          const parts = PROXY_URL.split(':');
          if (parts.length >= 2) {
            axiosConfig.proxy = {
              host: parts[0],
              port: parseInt(parts[1]) || 8080,
            };
            console.log(`[Scraper] Using proxy: ${parts[0]}:${parts[1]}`);
          }
        }
      }
      
      const response = await axios.get(url, axiosConfig);
      
      console.log(`[Scraper] Success: ${url} (status: ${response.status})`);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`[Scraper] Attempt ${attempt} failed for ${url}:`, lastError.message);
      
      if (attempt < retries) {
        const waitTime = retryDelay * attempt;
        console.log(`[Scraper] Waiting ${waitTime}ms before retry...`);
        await delay(waitTime);
      }
    }
  }
  
  throw lastError || new Error(`Failed to fetch ${url} after ${retries} attempts`);
}

// 检查 robots.txt
async function checkRobotsTxt(url: string): Promise<boolean> {
  try {
    const urlObj = new URL(url);
    const robotsUrl = `${urlObj.protocol}//${urlObj.host}/robots.txt`;
    
    const response = await axios.get(robotsUrl, {
      timeout: 5000,
      headers: { 'User-Agent': DEFAULT_HEADERS['User-Agent'] },
    });
    
    const robotsContent = response.data as string;
    const userAgentMatch = robotsContent.match(/User-agent:\s*\*/i);
    
    if (userAgentMatch) {
      const section = robotsContent.slice(userAgentMatch.index);
      const disallowMatch = section.match(/Disallow:\s*(.+)/i);
      
      if (disallowMatch) {
        const disallowedPath = disallowMatch[1].trim();
        if (urlObj.pathname.startsWith(disallowedPath)) {
          console.warn(`[Scraper] URL ${url} is disallowed by robots.txt`);
          return false;
        }
      }
    }
    
    return true;
  } catch {
    return true;
  }
}

// 原神 - 从多个数据源抓取
export async function scrapeGenshinEvents(): Promise<ScrapeResult> {
  // 优先使用 Fandom Event/History 页面
  try {
    console.log('[Scraper] Trying Genshin Fandom Event/History');
    const events = await scrapeFandomEventHistory('genshin');
    if (events.length > 0) {
      return {
        success: true,
        events,
        timestamp: new Date().toISOString(),
        source: 'Fandom Event/History',
      };
    }
  } catch (error) {
    console.warn('[Scraper] Fandom Event/History failed:', error instanceof Error ? error.message : error);
  }

  // 备用：米游社
  try {
    console.log('[Scraper] Trying Genshin Miyoushe');
    const events = await scrapeMiyoushe('https://www.miyoushe.com/ys/home/28?type=1', 'genshin');
    if (events.length > 0) {
      return {
        success: true,
        events,
        timestamp: new Date().toISOString(),
        source: '米游社',
      };
    }
  } catch (error) {
    console.warn('[Scraper] Miyoushe failed:', error instanceof Error ? error.message : error);
  }

  // 所有数据源都失败，返回备用数据
  console.warn('[Scraper] All Genshin sources failed, using fallback data');
  const fallbackEvents = generateFallbackEvents('genshin');
  return {
    success: true,
    events: fallbackEvents,
    timestamp: new Date().toISOString(),
    source: 'fallback',
  };
}

// 星穹铁道 - 从多个数据源抓取
export async function scrapeHSREvents(): Promise<ScrapeResult> {
  // 优先使用 Fandom Event/History 页面
  try {
    console.log('[Scraper] Trying HSR Fandom Event/History');
    const events = await scrapeFandomEventHistory('hsr');
    if (events.length > 0) {
      return {
        success: true,
        events,
        timestamp: new Date().toISOString(),
        source: 'Fandom Event/History',
      };
    }
  } catch (error) {
    console.warn('[Scraper] Fandom Event/History failed:', error instanceof Error ? error.message : error);
  }

  // 备用：米游社
  try {
    console.log('[Scraper] Trying HSR Miyoushe');
    const events = await scrapeMiyoushe('https://www.miyoushe.com/sr/home/53?type=1', 'hsr');
    if (events.length > 0) {
      return {
        success: true,
        events,
        timestamp: new Date().toISOString(),
        source: '米游社',
      };
    }
  } catch (error) {
    console.warn('[Scraper] Miyoushe failed:', error instanceof Error ? error.message : error);
  }

  // 所有数据源都失败，返回备用数据
  console.warn('[Scraper] All HSR sources failed, using fallback data');
  const fallbackEvents = generateFallbackEvents('hsr');
  return {
    success: true,
    events: fallbackEvents,
    timestamp: new Date().toISOString(),
    source: 'fallback',
  };
}

// 绝区零 - 从多个数据源抓取
export async function scrapeZZZEvents(): Promise<ScrapeResult> {
  // 优先使用 Fandom Event/History 页面
  try {
    console.log('[Scraper] Trying ZZZ Fandom Event/History');
    const events = await scrapeFandomEventHistory('zzz');
    if (events.length > 0) {
      return {
        success: true,
        events,
        timestamp: new Date().toISOString(),
        source: 'Fandom Event/History',
      };
    }
  } catch (error) {
    console.warn('[Scraper] Fandom Event/History failed:', error instanceof Error ? error.message : error);
  }

  // 备用：米游社
  try {
    console.log('[Scraper] Trying ZZZ Miyoushe');
    const events = await scrapeMiyoushe('https://www.miyoushe.com/zzz/home/58?type=1', 'zzz');
    if (events.length > 0) {
      return {
        success: true,
        events,
        timestamp: new Date().toISOString(),
        source: '米游社',
      };
    }
  } catch (error) {
    console.warn('[Scraper] Miyoushe failed:', error instanceof Error ? error.message : error);
  }

  // 所有数据源都失败，返回备用数据
  console.warn('[Scraper] All ZZZ sources failed, using fallback data');
  const fallbackEvents = generateFallbackEvents('zzz');
  return {
    success: true,
    events: fallbackEvents,
    timestamp: new Date().toISOString(),
    source: 'fallback',
  };
}

// 鸣潮 - 从多个数据源抓取
export async function scrapeWutheringEvents(): Promise<ScrapeResult> {
  // 优先使用 Fandom Event/History 页面
  try {
    console.log('[Scraper] Trying Wuthering Fandom Event/History');
    const events = await scrapeFandomEventHistory('wuthering');
    if (events.length > 0) {
      return {
        success: true,
        events,
        timestamp: new Date().toISOString(),
        source: 'Fandom Event/History',
      };
    }
  } catch (error) {
    console.warn('[Scraper] Fandom Event/History failed:', error instanceof Error ? error.message : error);
  }

  // 备用：库洛官网
  try {
    console.log('[Scraper] Trying Wuthering Kuro Games');
    const url = 'https://mc.kurogames.com/main/news';
    const allowed = await checkRobotsTxt(url);
    if (allowed) {
      const response = await fetchWithRetry(url, {
        headers: {
          ...DEFAULT_HEADERS,
          'Referer': 'https://www.google.com/',
        },
      });
      
      const $ = cheerio.load(response.data);
      const events: GameEvent[] = [];

      $('.news-item, .article-item, [class*="news"]').each((i, elem) => {
        if (i >= 15) return false;
        
        const title = $(elem).find('h3, .title, [class*="title"], h2').text().trim();
        const content = $(elem).find('.content, .desc, [class*="content"], .summary').text().trim();
        
        if (title && isEventRelated(title)) {
          const eventInfo = parseEventFromText(title, content, 'wuthering');
          if (eventInfo) {
            events.push({
              ...eventInfo,
              description: content || eventInfo.description,
            });
          }
        }
      });

      if (events.length > 0) {
        return {
          success: true,
          events,
          timestamp: new Date().toISOString(),
          source: '库洛官网',
        };
      }
    }
  } catch (error) {
    console.warn('[Scraper] Kuro Games failed:', error instanceof Error ? error.message : error);
  }
  
  console.warn('[Scraper] All Wuthering sources failed, using fallback data');
  return {
    success: true,
    events: generateFallbackEvents('wuthering'),
    timestamp: new Date().toISOString(),
    source: 'fallback',
  };
}

// PUBG 活动名称翻译映射
const pubgEventTranslations: Record<string, string> = {
  // Royale Pass 赛季
  'ROYALE PASS': ' Royale Pass',
  'Royale Pass': ' Royale Pass',
  'RP': ' Royale Pass',
  'SEASON': '赛季',
  'Season': '赛季',
  // 活动类型
  'SET': '套装',
  'Set': '套装',
  'SKIN': '皮肤',
  'Skin': '皮肤',
  'OUTFIT': '服装',
  'Outfit': '服装',
  'COSTUME': '服装',
  'Costume': '服装',
  'UNIFORM': '制服',
  'Uniform': '制服',
  // 武器相关
  'WEAPON': '武器',
  'Weapon': '武器',
  'GUN': '枪械',
  'Gun': '枪械',
  'FIREARM': '枪械',
  'Firearm': '枪械',
  // 载具相关
  'VEHICLE': '载具',
  'Vehicle': '载具',
  'CAR': '汽车',
  'Car': '汽车',
  'MOTORCYCLE': '摩托车',
  'Motorcycle': '摩托车',
  // 宝箱/抽奖
  'CRATE': '宝箱',
  'Crate': '宝箱',
  'CHEST': '宝箱',
  'Chest': '宝箱',
  'LUCKY SPIN': '幸运转盘',
  'Lucky Spin': '幸运转盘',
  'LUCKY DRAW': '幸运抽奖',
  'Lucky Draw': '幸运抽奖',
  'SUPPLY': '补给',
  'Supply': '补给',
  // 活动相关
  'EVENT': '活动',
  'Event': '活动',
  'CHALLENGE': '挑战',
  'Challenge': '挑战',
  'MISSION': '任务',
  'Mission': '任务',
  'QUEST': '任务',
  'Quest': '任务',
  'TOURNAMENT': '锦标赛',
  'Tournament': '锦标赛',
  'COMPETITION': '竞赛',
  'Competition': '竞赛',
  // 版本/更新
  'VERSION': '版本',
  'Version': '版本',
  'UPDATE': '更新',
  'Update': '更新',
  'PATCH': '补丁',
  'Patch': '补丁',
  // 特殊活动
  'ANNIVERSARY': '周年庆',
  'Anniversary': '周年庆',
  'CELEBRATION': '庆典',
  'Celebration': '庆典',
  'FESTIVAL': '节日',
  'Festival': '节日',
  'CARNIVAL': '狂欢',
  'Carnival': '狂欢',
  'PARTY': '派对',
  'Party': '派对',
  // 品质/等级
  'MYTHIC': '神话',
  'Mythic': '神话',
  'LEGENDARY': '传说',
  'Legendary': '传说',
  'EPIC': '史诗',
  'Epic': '史诗',
  'RARE': '稀有',
  'Rare': '稀有',
  'CLASSIC': '经典',
  'Classic': '经典',
  // 主题词
  'WINTER': '冬季',
  'Winter': '冬季',
  'SUMMER': '夏季',
  'Summer': '夏季',
  'SPRING': '春季',
  'Spring': '春季',
  'AUTUMN': '秋季',
  'Autumn': '秋季',
  'FALL': '秋季',
  'Fall': '秋季',
  'CHRISTMAS': '圣诞',
  'Christmas': '圣诞',
  'HALLOWEEN': '万圣节',
  'Halloween': '万圣节',
  'NEW YEAR': '新年',
  'New Year': '新年',
  'LUNAR': '农历',
  'Lunar': '农历',
  'DRAGON': '龙',
  'Dragon': '龙',
  'PHOENIX': '凤凰',
  'Phoenix': '凤凰',
  'TIGER': '虎',
  'Tiger': '虎',
  // 其他常见词
  'BUNDLE': '捆绑包',
  'Bundle': '捆绑包',
  'PACK': '礼包',
  'Pack': '礼包',
  'PACKAGE': '礼包',
  'Package': '礼包',
  'COLLECTION': '收藏',
  'Collection': '收藏',
  'SERIES': '系列',
  'Series': '系列',
  'EDITION': '版',
  'Edition': '版',
  'DELUXE': '豪华',
  'Deluxe': '豪华',
  'PREMIUM': '高级',
  'Premium': '高级',
  'EXCLUSIVE': '专属',
  'Exclusive': '专属',
  'LIMITED': '限定',
  'Limited': '限定',
  'SPECIAL': '特别',
  'Special': '特别',
  'ULTIMATE': '终极',
  'Ultimate': '终极',
  'PRODIGY': '天才',
  'Prodigy': '天才',
  'WITHERBLOOM': '凋零花',
  'Witherbloom': '凋零花',
  'AVALANCHE': '雪崩',
  'Avalanche': '雪崩',
  'INFERNO': '地狱火',
  'Inferno': '地狱火',
  'FROST': '霜冻',
  'Frost': '霜冻',
  'SHADOW': '暗影',
  'Shadow': '暗影',
  'LIGHT': '光明',
  'Light': '光明',
  'DARK': '黑暗',
  'Dark': '黑暗',
  'GOLDEN': '金色',
  'Golden': '金色',
  'SILVER': '银色',
  'Silver': '银色',
  'CRYSTAL': '水晶',
  'Crystal': '水晶',
  'DIAMOND': '钻石',
  'Diamond': '钻石',
  'RUBY': '红宝石',
  'Ruby': '红宝石',
  'EMERALD': '绿宝石',
  'Emerald': '绿宝石',
  'SAPPHIRE': '蓝宝石',
  'Sapphire': '蓝宝石',
};

// 翻译 PUBG 活动名称
function translatePUBGEventName(name: string): string {
  let translated = name;
  
  // 按长度降序排序，优先替换较长的词组
  const sortedKeys = Object.keys(pubgEventTranslations).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    translated = translated.replace(regex, pubgEventTranslations[key]);
  }
  
  return translated;
}

// PUBG Mobile - 从多个数据源抓取
export async function scrapePUBGEvents(): Promise<ScrapeResult> {
  const sources = [
    { name: 'PUBG官网活动页', url: 'https://www.pubgmobile.com/en-US/events.shtml', type: 'web' as const },
  ];

  for (const source of sources) {
    try {
      console.log(`[Scraper] Trying PUBG source: ${source.name}`);

      // 检查 robots.txt
      const allowed = await checkRobotsTxt(source.url);
      if (!allowed) {
        console.warn(`[Scraper] ${source.name} disallowed by robots.txt`);
        continue;
      }

      if (source.type === 'web') {
        const response = await fetchWithRetry(source.url, {
          headers: {
            ...DEFAULT_HEADERS,
            'Referer': 'https://www.google.com/',
          },
        });

        const events: GameEvent[] = [];
        const historyListMatch = response.data.match(/historyList:\s*(\[[\s\S]*?\])(?:,\s*\n|\n\s*\})/);

        if (historyListMatch) {
          console.log('[Scraper] Found historyList data in page');

          // 提取 JSON 数据
          let jsonStr = historyListMatch[1];

          // 移除注释行
          jsonStr = jsonStr.replace(/\/\/.*$/gm, '');
          // 处理 JavaScript 对象格式（单引号、无引号 key 等）
          jsonStr = jsonStr.replace(/'/g, '"');
          // 给无引号的 key 添加引号
          jsonStr = jsonStr.replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '$1"$2":');
          // 处理模板字符串
          jsonStr = jsonStr.replace(/`([^`]*)`/g, '"$1"');
          // 移除尾随逗号
          jsonStr = jsonStr.replace(/,\s*([}\]])/g, '$1');

          try {
            const historyList = JSON.parse(jsonStr);
            console.log(`[Scraper] Parsed ${historyList.length} events from historyList`);

            for (const item of historyList.slice(0, 15)) {
              if (item.name && item.time) {
                const eventInfo = parsePUBGEventFromHistoryItem(item);
                if (eventInfo) {
                  events.push(eventInfo);
                }
              }
            }
          } catch (parseError) {
            console.warn('[Scraper] Failed to parse historyList:', parseError);
            // 尝试使用更宽松的解析方式 - 直接从整个页面提取所有活动项
            try {
              console.log('[Scraper] Using direct regex extraction for PUBG events');

              // 直接从整个页面提取 name 和 time 字段
              // PUBG 页面中 time 在 name 之前，格式如:
              // time: "2026.01",
              // name: "WITHERBLOOM PRODIGY SET",
              const eventPattern = /time\s*:\s*"([^"]+)"\s*,\s*\n\s*name\s*:\s*["`]([^"`]+)["`]/g;

              let match;
              let count = 0;
              while ((match = eventPattern.exec(response.data)) !== null && count < 20) {
                const time = match[1];
                const name = match[2];

                if (name && time) {
                  console.log(`[Scraper] Found event: ${name} (${time})`);
                  const eventInfo = parsePUBGEventFromHistoryItem({
                    name: name,
                    time: time,
                  });
                  if (eventInfo) {
                    events.push(eventInfo);
                    count++;
                  }
                }
              }

              console.log(`[Scraper] Extracted ${events.length} events from page`);
            } catch (looseError) {
              console.warn('[Scraper] Direct extraction failed:', looseError);
            }
          }
        }

        // 如果 JavaScript 解析失败，尝试 HTML 解析
        if (events.length === 0) {
          const $ = cheerio.load(response.data);

          // 尝试多种选择器
          const selectors = [
            '.swiper-slide',
            '[class*="event"]',
            '.news-item',
            '.activity-item',
          ];

          for (const selector of selectors) {
            $(selector).each((i, elem) => {
              if (i >= 15 || events.length >= 15) return false;

              const $elem = $(elem);
              const title = $elem.find('h3, .title, h2, [class*="title"], .text').text().trim();
              const content = $elem.find('p, .desc, .content, [class*="text"]').text().trim();

              if (title && isEventRelated(title)) {
                const eventInfo = parseEventFromText(title, content, 'pubg');
                if (eventInfo) {
                  events.push(eventInfo);
                }
              }
            });

            if (events.length > 0) break;
          }
        }

        if (events.length > 0) {
          return {
            success: true,
            events,
            timestamp: new Date().toISOString(),
            source: source.name,
          };
        }
      }

      await delay(1500);
    } catch (error) {
      console.warn(`[Scraper] Source ${source.name} failed:`, error instanceof Error ? error.message : error);
    }
  }

  // 所有数据源都失败，返回备用数据
  console.warn('[Scraper] All PUBG sources failed, using fallback data');
  const fallbackEvents = generateFallbackEvents('pubg');
  return {
    success: true,
    events: fallbackEvents,
    timestamp: new Date().toISOString(),
    source: 'fallback',
  };
}

// 从 PUBG historyList 项解析活动信息
function parsePUBGEventFromHistoryItem(item: {
  name: string;
  time: string;
  link?: string;
  src?: string;
  year?: string;
}): GameEvent | null {
  try {
    // 解析时间 (格式: "2026.01" 或 "2025.12")
    const timeMatch = item.time.match(/(\d{4})\.(\d{1,2})/);
    let startDate = new Date();
    let endDate = new Date();

    if (timeMatch) {
      const year = parseInt(timeMatch[1]);
      const month = parseInt(timeMatch[2]) - 1;
      // 设置为该月的第一天
      startDate = new Date(year, month, 1);
      // 活动持续一个月
      endDate = new Date(year, month + 1, 0);
    } else {
      // 默认持续30天
      endDate.setDate(endDate.getDate() + 30);
    }

    // 生成唯一ID
    const id = `pubg-${item.name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}`;

    // 判断活动类型
    let type: EventType = 'minor_event';
    const nameLower = item.name.toLowerCase();
    if (/royale pass|rp|season/i.test(nameLower)) {
      type = 'banner';
    } else if (/version|update/i.test(nameLower)) {
      type = 'major_event';
    } else if (/set|skin|outfit/i.test(nameLower)) {
      type = 'minor_event';
    }

    // 翻译活动名称为中文
    const translatedName = translatePUBGEventName(item.name);
    
    return {
      id,
      game: 'pubg',
      title: translatedName.slice(0, 100),
      type,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      description: `PUBG Mobile 活动: ${translatedName}`,
      featured: type === 'banner' || type === 'major_event',
    };
  } catch (error) {
    console.warn('[Scraper] Failed to parse PUBG event:', error);
    return null;
  }
}

// 判断标题是否与活动相关
function isEventRelated(title: string): boolean {
  const eventKeywords = [
    '活动', '祈愿', '卡池', 'up', 'banner', 'event',
    '深渊', '螺旋', '忘却', '防卫战', '深塔',
    '版本', '更新', '维护', '补偿',
    '签到', '登录', '奖励', '福利',
    '限时', '双倍', '折扣', '促销',
  ];
  
  const title_lower = title.toLowerCase();
  return eventKeywords.some(keyword => title_lower.includes(keyword.toLowerCase()));
}

// 从文本中解析活动信息
function parseEventFromText(
  title: string, 
  content: string, 
  game: GameType
): GameEvent | null {
  // 清理文本
  const cleanTitle = title.trim().replace(/\s+/g, ' ');
  const cleanContent = content.trim().replace(/\s+/g, ' ');
  const fullText = `${cleanTitle} ${cleanContent}`;
  
  // 识别活动类型
  let type: EventType = 'minor_event';
  const text_lower = fullText.toLowerCase();
  
  // 卡池/祈愿 (最高优先级)
  if (/祈愿|卡池|跃迁|调频|唤取|角色活动|武器活动|角色up|up池|限定角色|限定武器|banner|wish/i.test(cleanTitle)) {
    type = 'banner';
  }
  // 大活动
  else if (/版本活动|大活动|主题活动|限时活动|大型活动|主要活动|main event|major/i.test(cleanTitle)) {
    type = 'major_event';
  }
  // 常规重置
  else if (/深渊|螺旋|忘却之庭|式舆防卫战|逆境深塔|深境螺旋|刷新|reset|abyss/i.test(cleanTitle)) {
    type = 'routine';
  }
  // 小活动
  else if (/签到|登录|每日|福利|小活动|mini|daily/i.test(cleanTitle)) {
    type = 'minor_event';
  }
  
  // 提取日期 - 支持多种格式
  const dates: Date[] = [];
  const currentYear = new Date().getFullYear();
  
  // 格式1: MM/DD 或 MM-DD
  const datePattern1 = /(\d{1,2})[\/\-\.](\d{1,2})/g;
  let match;
  while ((match = datePattern1.exec(fullText)) !== null) {
    const month = parseInt(match[1]) - 1;
    const day = parseInt(match[2]);
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      dates.push(new Date(currentYear, month, day));
    }
  }
  
  // 格式2: YYYY年MM月DD日 或 YYYY/MM/DD
  const datePattern2 = /(\d{4})[年\/](\d{1,2})[月\/](\d{1,2})/g;
  while ((match = datePattern2.exec(fullText)) !== null) {
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const day = parseInt(match[3]);
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      dates.push(new Date(year, month, day));
    }
  }
  
  // 格式3: MM月DD日
  const datePattern3 = /(\d{1,2})月(\d{1,2})日/g;
  while ((match = datePattern3.exec(fullText)) !== null) {
    const month = parseInt(match[1]) - 1;
    const day = parseInt(match[2]);
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      dates.push(new Date(currentYear, month, day));
    }
  }
  
  // 按时间排序
  dates.sort((a, b) => a.getTime() - b.getTime());
  
  // 设置默认日期
  let startDate = new Date();
  let endDate = new Date();
  
  // 根据活动类型设置默认持续时间
  if (type === 'banner') {
    endDate.setDate(endDate.getDate() + 21); // 卡池通常21天
  } else if (type === 'major_event') {
    endDate.setDate(endDate.getDate() + 14); // 大活动通常14天
  } else if (type === 'routine') {
    endDate.setDate(endDate.getDate() + 30); // 深渊等通常30天
  } else {
    endDate.setDate(endDate.getDate() + 7); // 小活动通常7天
  }
  
  // 使用提取到的日期
  if (dates.length >= 2) {
    startDate = dates[0];
    endDate = dates[dates.length - 1];
  } else if (dates.length === 1) {
    // 如果只有一个日期，判断是开始还是结束
    const now = new Date();
    if (dates[0] > now) {
      endDate = dates[0];
    } else {
      startDate = dates[0];
    }
  }
  
  // 提取奖励信息 - 根据游戏类型
  let rewardInfo: string | undefined;
  const rewardPatterns: Record<GameType, RegExp[]> = {
    genshin: [
      /(\d+)\s*原石/i,
      /(\d+)\s*纠缠/i,
      /(\d+)\s*相遇/i,
    ],
    hsr: [
      /(\d+)\s*星琼/i,
      /(\d+)\s*星轨通票/i,
      /(\d+)\s*星轨专票/i,
    ],
    zzz: [
      /(\d+)\s*菲林/i,
      /(\d+)\s*加密母带/i,
      /(\d+)\s*原装母带/i,
    ],
    wuthering: [
      /(\d+)\s*星声/i,
      /(\d+)\s*唤声涡纹/i,
      /(\d+)\s*浮金波纹/i,
    ],
    pubg: [
      /(\d+)\s*UC/i,
      /(\d+)\s*BP/i,
      /(\d+)\s*RP/i,
    ],
  };
  
  for (const pattern of rewardPatterns[game]) {
    const rewardMatch = fullText.match(pattern);
    if (rewardMatch) {
      rewardInfo = `x${rewardMatch[1]}`;
      break;
    }
  }
  
  // 如果没有找到具体奖励，尝试通用数字匹配
  if (!rewardInfo) {
    const genericMatch = fullText.match(/奖励[:：]\s*(\d+)/i) || 
                         fullText.match(/(可获得|获取|领取)[^\d]*(\d+)[^\d]*(原石|星琼|菲林|星声|UC)/i);
    if (genericMatch) {
      rewardInfo = `x${genericMatch[1] || genericMatch[2]}`;
    }
  }
  
  // 生成唯一ID
  const id = `${game}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // 清理描述
  let description = cleanContent || cleanTitle;
  if (description.length > 300) {
    description = description.slice(0, 300) + '...';
  }
  
  return {
    id,
    game,
    title: cleanTitle.slice(0, 100),
    type,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    rewardInfo,
    description,
    featured: type === 'banner' || type === 'major_event',
  };
}

// 生成备用活动数据（当所有数据源都失败时使用）
function generateFallbackEvents(game: GameType): GameEvent[] {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthMid = new Date(now.getFullYear(), now.getMonth(), 15);
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const nextMonthEnd = new Date(now.getFullYear(), now.getMonth() + 2, 0);
  // 版本周期约42天
  const versionEnd = new Date(now.getTime() + 28 * 24 * 60 * 60 * 1000);
  // 双周重置
  const biweeklyEnd = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

  const fallbackMap: Record<GameType, GameEvent[]> = {
    genshin: [
      {
        id: 'genshin-fallback-banner',
        game: 'genshin',
        title: '当前版本限定祈愿',
        type: 'banner',
        startDate: monthStart.toISOString(),
        endDate: versionEnd.toISOString(),
        rewardInfo: 'x160',
        description: '当前原神版本限定5星角色祈愿（备用数据，请切换到真实数据模式获取准确信息）',
        featured: true,
      },
      {
        id: 'genshin-fallback-abyss',
        game: 'genshin',
        title: '深境螺旋刷新',
        type: 'routine',
        startDate: monthStart.toISOString(),
        endDate: monthMid.toISOString(),
        rewardInfo: 'x800',
        description: '深境螺旋每半月刷新一次（备用数据）',
        featured: false,
      },
      {
        id: 'genshin-fallback-major',
        game: 'genshin',
        title: '当前版本大活动',
        type: 'major_event',
        startDate: monthStart.toISOString(),
        endDate: versionEnd.toISOString(),
        rewardInfo: 'x1000',
        description: '当前原神版本主要活动（备用数据）',
        featured: true,
      },
    ],
    hsr: [
      {
        id: 'hsr-fallback-warp',
        game: 'hsr',
        title: '当前版本限定跃迁',
        type: 'banner',
        startDate: monthStart.toISOString(),
        endDate: versionEnd.toISOString(),
        rewardInfo: 'x160',
        description: '当前HSR版本限定5星角色跃迁（备用数据）',
        featured: true,
      },
      {
        id: 'hsr-fallback-forgotten',
        game: 'hsr',
        title: '忘却之庭刷新',
        type: 'routine',
        startDate: monthStart.toISOString(),
        endDate: biweeklyEnd.toISOString(),
        rewardInfo: 'x720',
        description: '忘却之庭每双周刷新（备用数据）',
        featured: false,
      },
      {
        id: 'hsr-fallback-major',
        game: 'hsr',
        title: '当前版本大活动',
        type: 'major_event',
        startDate: monthStart.toISOString(),
        endDate: versionEnd.toISOString(),
        rewardInfo: 'x1200',
        description: '当前HSR版本主要活动（备用数据）',
        featured: true,
      },
    ],
    zzz: [
      {
        id: 'zzz-fallback-tune',
        game: 'zzz',
        title: '当前版本独家频道调频',
        type: 'banner',
        startDate: monthStart.toISOString(),
        endDate: versionEnd.toISOString(),
        rewardInfo: 'x160',
        description: '当前ZZZ版本S级代理人调频（备用数据）',
        featured: true,
      },
      {
        id: 'zzz-fallback-shiyu',
        game: 'zzz',
        title: '式舆防卫战刷新',
        type: 'routine',
        startDate: monthStart.toISOString(),
        endDate: biweeklyEnd.toISOString(),
        rewardInfo: 'x600',
        description: '式舆防卫战每双周刷新（备用数据）',
        featured: false,
      },
      {
        id: 'zzz-fallback-hollow',
        game: 'zzz',
        title: '零号空洞刷新',
        type: 'routine',
        startDate: now.toISOString(),
        endDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        rewardInfo: 'x300',
        description: '零号空洞每周刷新（备用数据）',
        featured: false,
      },
    ],
    wuthering: [
      {
        id: 'wuthering-fallback-convene',
        game: 'wuthering',
        title: '当前版本特定唤取',
        type: 'banner',
        startDate: monthStart.toISOString(),
        endDate: versionEnd.toISOString(),
        rewardInfo: 'x160',
        description: '当前鸣潮版本限定5星共鸣者唤取（备用数据）',
        featured: true,
      },
      {
        id: 'wuthering-fallback-tower',
        game: 'wuthering',
        title: '逆境深塔刷新',
        type: 'routine',
        startDate: monthStart.toISOString(),
        endDate: biweeklyEnd.toISOString(),
        rewardInfo: 'x960',
        description: '逆境深塔每双周刷新（备用数据）',
        featured: false,
      },
      {
        id: 'wuthering-fallback-gate',
        game: 'wuthering',
        title: '千道门扉（本周）',
        type: 'routine',
        startDate: now.toISOString(),
        endDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        rewardInfo: 'x160',
        description: '千道门扉每周重置（备用数据）',
        featured: false,
      },
    ],
    pubg: [
      {
        id: 'pubg-fallback-rp',
        game: 'pubg',
        title: '当前赛季 Royale Pass',
        type: 'banner',
        startDate: monthStart.toISOString(),
        endDate: nextMonthEnd.toISOString(),
        rewardInfo: '限定皮肤',
        description: '当前PUBG Mobile赛季Royale Pass（备用数据）',
        featured: true,
      },
      {
        id: 'pubg-fallback-event',
        game: 'pubg',
        title: '当前赛季限时活动',
        type: 'major_event',
        startDate: monthStart.toISOString(),
        endDate: monthEnd.toISOString(),
        rewardInfo: '限定奖励',
        description: '当前PUBG Mobile赛季主要活动（备用数据）',
        featured: false,
      },
    ],
  };

  return fallbackMap[game] || [];
}

// 米游社页面抓取函数
async function scrapeMiyoushe(url: string, game: GameType): Promise<GameEvent[]> {
  try {
    console.log(`[Scraper] Fetching Miyoushe: ${url}`);

    const response = await fetchWithRetry(url, {
      headers: {
        ...DEFAULT_HEADERS,
        'Referer': 'https://www.miyoushe.com/',
      },
    });

    const $ = cheerio.load(response.data);
    const events: GameEvent[] = [];

    const selectors = ['.article-item', '.news-item', '[class*="article"]', '[class*="news"]', '.post-item'];

    for (const selector of selectors) {
      $(selector).each((i, elem) => {
        if (i >= 20 || events.length >= 15) return false;

        const $elem = $(elem);
        const title = $elem.find('.title, h3, h2, .article-title').first().text().trim() ||
                     $elem.find('a').first().text().trim();
        const content = $elem.find('.summary, .desc, .content').first().text().trim() || $elem.text().trim();

        if (title && title.length > 3 && title.length < 100 && isEventRelated(title)) {
          if (!events.some(e => e.title === title)) {
            const eventInfo = parseEventFromText(title, content, game);
            if (eventInfo) events.push(eventInfo);
          }
        }
      });

      if (events.length >= 10) break;
    }

    console.log(`[Scraper] Miyoushe scraped ${events.length} events for ${game}`);
    return events;
  } catch (error) {
    console.error(`[Scraper] Miyoushe failed for ${game}:`, error instanceof Error ? error.message : error);
    return [];
  }
}

// 从Fandom Wiki Event/History页面抓取活动列表
async function scrapeFandomEventHistory(game: GameType): Promise<GameEvent[]> {
  const historyUrls: Record<GameType, string | null> = {
    genshin: 'https://genshin-impact.fandom.com/wiki/Event/History',
    hsr: 'https://honkai-star-rail.fandom.com/wiki/Events/History',
    zzz: 'https://zenless-zone-zero.fandom.com/wiki/Event/History',
    wuthering: 'https://wutheringwaves.fandom.com/wiki/Event/History',
    pubg: null, // PUBG使用不同的数据源
  };

  const url = historyUrls[game];
  if (!url) {
    console.log(`[Scraper] No Fandom Event/History URL for ${game}`);
    return [];
  }

  try {
    console.log(`[Scraper] Fetching Fandom Event History: ${url}`);

    const response = await fetchWithRetry(url, {
      headers: {
        ...DEFAULT_HEADERS,
        'Referer': 'https://www.google.com/',
      },
    });

    const $ = cheerio.load(response.data);
    const events: GameEvent[] = [];

    // 方法1: 从表格中提取活动（HSR、ZZZ等使用表格）
    $('table').each((tableIndex, table) => {
      $(table).find('tr').each((rowIndex, row) => {
        if (rowIndex === 0) return; // 跳过表头

        const cells = $(row).find('td');
        if (cells.length >= 2) {
          // 第一列通常是活动名称和链接
          const linkElem = $(cells[0]).find('a').first();
          const title = linkElem.text().trim();
          const href = linkElem.attr('href') || '';

          // 过滤无效链接
          if (!title || 
              !href || 
              href.includes('File:') || 
              href.includes('Special:') ||
              title.length < 3 ||
              title.length > 100) {
            return;
          }

          // 提取日期（通常在第二列或第三列）
          let dateText = '';
          for (let i = 1; i < Math.min(cells.length, 4); i++) {
            const text = $(cells[i]).text().trim();
            if (/\d{4}[-/]\d{1,2}[-/]\d{1,2}|\d{1,2}[-/]\d{1,2}[-/]\d{4}/.test(text)) {
              dateText = text;
              break;
            }
          }

          // 解析日期
          const dates = parseDatesFromText(dateText);
          
          // 判断活动类型
          const type = classifyEventType(title, game);
          
          // 翻译标题
          const translatedTitle = translateFandomEventTitle(title, game);
          
          // 构建完整URL
          const fullUrl = href.startsWith('http') 
            ? href 
            : `https://${new URL(url).hostname}${href}`;

          // 生成活动数据
          const event: GameEvent = {
            id: `${game}-fandom-${title.replace(/\s+/g, '-').toLowerCase().slice(0, 30)}-${Date.now()}`,
            game,
            title: translatedTitle.slice(0, 100),
            type,
            startDate: dates.startDate,
            endDate: dates.endDate,
            description: `${game}活动: ${translatedTitle}`,
            featured: type === 'banner' || type === 'major_event',
            url: fullUrl,
          };

          if (!events.some(e => e.title === translatedTitle)) {
            events.push(event);
          }
        }
      });
    });

    // 方法2: 从特定章节后的列表提取（原神、鸣潮等使用列表）
    if (events.length < 5) {
      $('h2, h3').each((i, header) => {
        const headerText = $(header).text().toLowerCase();
        // 查找包含版本号或活动列表的章节
        if (/version|current|ongoing|upcoming|event.*list|^\d+\.\d+/.test(headerText)) {
          let sibling = $(header).next();
          let count = 0;
          
          while (sibling.length && count < 30 && events.length < 15) {
            if (sibling.is('ul, ol')) {
              sibling.find('li').each((j, li) => {
                const link = $(li).find('a').first();
                const title = link.text().trim();
                const href = link.attr('href') || '';

                if (title && 
                    href && 
                    !href.includes('File:') && 
                    !href.includes('Special:') &&
                    !href.startsWith('#') &&
                    title.length > 3 &&
                    title.length < 100 &&
                    !isNonEventPage(title)) {

                  const liText = $(li).text().trim();
                  const dates = parseDatesFromText(liText);
                  const type = classifyEventType(title, game);
                  const translatedTitle = translateFandomEventTitle(title, game);
                  const fullUrl = href.startsWith('http')
                    ? href
                    : `https://${new URL(url).hostname}${href}`;

                  const event: GameEvent = {
                    id: `${game}-fandom-${title.replace(/\s+/g, '-').toLowerCase().slice(0, 30)}-${Date.now()}`,
                    game,
                    title: translatedTitle.slice(0, 100),
                    type,
                    startDate: dates.startDate,
                    endDate: dates.endDate,
                    description: `${game}活动: ${translatedTitle}`,
                    featured: type === 'banner' || type === 'major_event',
                    url: fullUrl,
                  };

                  if (!events.some(e => e.title === translatedTitle)) {
                    events.push(event);
                  }
                }
              });
            }
            sibling = sibling.next();
            count++;
          }
        }
      });
    }

    console.log(`[Scraper] Fandom Event History scraped ${events.length} events for ${game}`);
    return events.slice(0, 15); // 限制返回数量
  } catch (error) {
    console.error(`[Scraper] Fandom Event History failed for ${game}:`, error instanceof Error ? error.message : error);
    return [];
  }
}

// Fandom 游戏活动标题翻译映射
const fandomEventTranslations: Record<string, Record<string, string>> = {
  // 通用活动词汇
  common: {
    'Event': '活动',
    'Events': '活动',
    'Login': '登录',
    'Daily': '每日',
    'Check-in': '签到',
    'Mission': '任务',
    'Quest': '任务',
    'Challenge': '挑战',
    'Reward': '奖励',
    'Rewards': '奖励',
    'Bonus': '奖励',
    'Gift': '礼物',
    'Pack': '礼包',
    'Bundle': '捆绑包',
    'Supply': '补给',
    'Supply Pass': '补给通行证',
    'Battle Pass': '通行证',
    'Nameless Honor': '无名勋礼',
    'Gift of Odyssey': '巡星之礼',
    'Trailblazing Will': '开拓意志',
    'Aptitude Showcase': '角色试用',
    'Character Trial': '角色试用',
    'Warp': '跃迁',
    'Convene': '唤取',
    'Wish': '祈愿',
    'Banner': '卡池',
    'Rate Up': 'UP',
    'Version': '版本',
    'Update': '更新',
    'Maintenance': '维护',
    'Compensation': '补偿',
    'Redemption': '兑换',
    'Code': '兑换码',
    'Livestream': '直播',
    'Preview': '前瞻',
    'Special': '特别',
    'Limited': '限时',
    'Permanent': '常驻',
    'Recurrence': '周期',
    'Rerun': '复刻',
    'Return': '回归',
    'Anniversary': '周年庆',
    'Celebration': '庆典',
    'Festival': '节日',
    'Carnival': '狂欢',
    'Carnival!': '狂欢！',
    'Carnival!!': '狂欢！！',
    'Party': '派对',
    'Collab': '联动',
    'Collaboration': '联动',
    'Crossover': '联动',
    'Web': '网页',
    'Web Event': '网页活动',
    'In-Game': '游戏内',
    'In Game': '游戏内',
    'Community': '社区',
    'Fan Art': '同人创作',
    'Creation': '创作',
    'Fan Creation': '同人创作',
    'Screenshot': '截图',
    'Photo': '拍照',
    'Share': '分享',
    'Invite': '邀请',
    'Recruit': '招募',
    'Referral': '邀请',
    'Bounty': '悬赏',
    'Commission': '委托',
    'Arcade': '街机',
    'Tournament': '锦标赛',
    'Competition': '竞赛',
    'Contest': '比赛',
    'Sweepstakes': '抽奖',
    'Lottery': '抽奖',
    'Draw': '抽奖',
    'Raffle': '抽奖',
    'Giveaway': '赠送',
    'Free': '免费',
    'Double': '双倍',
    'Triple': '三倍',
    'Discount': '折扣',
    'Sale': '促销',
    'Rebate': '返利',
    'Cashback': '返利',
    'Top-up': '充值',
    'Top Up': '充值',
    'Purchase': '购买',
    'Shop': '商店',
    'Store': '商店',
    'Stellar': '星',
    'Jade': '琼',
    'Astrite': '星声',
    'Primogem': '原石',
    'Intertwined Fate': '纠缠之缘',
    'Acquaint Fate': '相遇之缘',
    'Masterless Stardust': '无主的星尘',
    'Masterless Starglitter': '无主的星辉',
    'Stellar Jade': '星琼',
    'Star Rail Pass': '星轨通票',
    'Star Rail Special Pass': '星轨专票',
    'Undying Starlight': '未熄的星芒',
    'Undying Embers': '未熄的余烬',
    'Polychrome': '菲林',
    'Encrypted Master Tape': '加密母带',
    'Original Master Tape': '原装母带',
    'Booster Sample': '增压样本',
    'Bangboo': '邦布',
    'Poly': '菲林',
    'Dennies': '丁尼',
    'Credit': '信用点',
    'Shell Credit': '贝币',
    'Mira': '米拉',
    'Echo': '声骸',
    'Weapon': '武器',
    'Rectifier': '音感仪',
    'Broadblade': '长刃',
    'Sword': '迅刀',
    'Gauntlets': '拳套',
    'Pistols': '佩枪',
    'Character': '角色',
    'Agent': '代理人',
    'Trailblazer': '开拓者',
    'Conductor': '漂泊者',
    'Rover': '漂泊者',
    'Rover (': '漂泊者(',
    'Astral Express': '星穹列车',
    'Herta Space Station': '黑塔空间站',
    'Jarilo-VI': '雅利洛-VI',
    'The Xianzhou Luofu': '仙舟「罗浮」',
    'Penacony': '匹诺康尼',
    'Amphoreus': '翁法罗斯',
    'New Eridu': '新艾利都',
    'Rinascita': '黎那汐塔',
    'Ragunna': '拉古那',
    'Thaw of Eons': '岁主',
    'Rover\'s': '漂泊者的',
    'Rover\'s Journey': '漂泊者的旅程',
    'Rover\'s Path': '漂泊者的道路',
    'Rover\'s Trail': '漂泊者的足迹',
    'Rover\'s Odyssey': '漂泊者的奥德赛',
    'Rover\'s Voyage': '漂泊者的航行',
    'Rover\'s Quest': '漂泊者的任务',
    'Rover\'s Mission': '漂泊者的使命',
    'Rover\'s Challenge': '漂泊者的挑战',
    'Rover\'s Adventure': '漂泊者的冒险',
    'Rover\'s Exploration': '漂泊者的探索',
    'Rover\'s Discovery': '漂泊者的发现',
  },
  // 原神特定
  genshin: {
    'Spiral Abyss': '深境螺旋',
    'Imaginarium Theater': '幻想真境剧诗',
    'Genius Invokation TCG': '七圣召唤',
    'Serenitea Pot': '尘歌壶',
    'Realm of Tranquil Eternity': '清籁岛',
    'Inazuma': '稻妻',
    'Liyue': '璃月',
    'Mondstadt': '蒙德',
    'Sumeru': '须弥',
    'Fontaine': '枫丹',
    'Natlan': '纳塔',
    'Snezhnaya': '至冬',
    'Khaenri\'ah': '坎瑞亚',
    'Celestia': '天空岛',
    'Enkanomiya': '渊下宫',
    'Chasm': '层岩巨渊',
    'Dragonspine': '龙脊雪山',
    'Golden Apple Archipelago': '金苹果群岛',
    'Veluriyam Mirage': '琉形蜃境',
    'Simulanka': '希穆兰卡',
  },
  // 星穹铁道特定
  hsr: {
    'Simulated Universe': '模拟宇宙',
    'Divergent Universe': '差分宇宙',
    'Pure Fiction': '虚构叙事',
    'Apocalyptic Shadow': '末日幻影',
    'Forgotten Hall': '忘却之庭',
    'Memory of Chaos': '混沌回忆',
    'Memory Chaos': '混沌回忆',
    'Stellar Flare': '星芒战幕',
    'Planar Infinity': '无尽位面',
    'Cyclical Extrapolation': '周期演算',
    'Synchronicity': '同谐',
    'Destruction': '毁灭',
    'Preservation': '存护',
    'Harmony': '同谐',
    'Nihility': '虚无',
    'Abundance': '丰饶',
    'The Hunt': '巡猎',
    'Erudition': '智识',
  },
  // 绝区零特定
  zzz: {
    'Hollow Zero': '零号空洞',
    'Shiyu Defense': '式舆防卫战',
    'Deadly Assault': '危局强袭战',
    'Hollow': '空洞',
    'Bangboo': '邦布',
    'Proxy': '绳匠',
    'Cunning Hares': '狡兔屋',
    'Victoria Housekeeping': '维多利亚家政',
    'Belobog Heavy Industries': '白祇重工',
    'Section 6': '对空六课',
    'Sons of Calydon': '卡吕冬之子',
    'Obols': '奥波勒斯小队',
    'Stars of Lyra': '天琴座',
    'Mockingbird': 'Mockingbird',
    'H.A.N.D.': 'HAND',
    'PubSec': '治安局',
    'Criminal Investigation': '刑侦特勤组',
    'New Eridu Defense Force': '新艾利都防卫军',
    'Defense Force': '防卫军',
    'N.E.D.F.': 'N.E.D.F.',
    'NEDF': 'NEDF',
    'Silver Squad': '银心卫队',
    'Oni': '鬼族',
  },
  // 鸣潮特定
  wuthering: {
    'Tower of Adversity': '逆境深塔',
    'Whimpering Wastes': '呜呜仓储',
    'Illusive Realm': '深坠异想奇境',
    'Somnoire': '异梦聚合',
    'Depths of Illusive Realm': '深坠异想奇境',
    'Tactical Hologram': '全息战略',
    'All Out! Towards the Peaks of Prestige': '全力出撃！栄光の頂へ',
    'All Out': '全力出撃',
    'Towards the Peaks of Prestige': '栄光の頂へ',
    'Peaks of Prestige': '栄光の頂',
    'Echo Hunters': '声骸猎人',
    'Echo Hunting': '声骸狩猎',
    'Echo': '声骸',
    'Sonata': '合鸣',
    'Sonata Effect': '合鸣效果',
    'Resonance': '共鸣',
    'Resonator': '共鸣者',
    'Forte': '技能',
    'Intro': '变奏',
    'Outro': '延奏',
    'Resonance Liberation': '共鸣解放',
    'Resonance Skill': '共鸣技能',
    'Forte Circuit': '共鸣回路',
    'Inherent Skill': '固有技能',
    'Inherent': '固有',
    'Concerto': '协奏',
    'Concerto Energy': '协奏能量',
    'Tacet Field': '无音区',
    'Tacet': '无音',
    'TD': '无音区',
    'Overclock': '超频',
    'Calcified': '钙化',
    'Calcification': '钙化',
    'Spectro': '衍射',
    'Fusion': '热熔',
    'Glacio': '冷凝',
    'Electro': '导电',
    'Aero': '气动',
    'Havoc': '湮灭',
    'Spectro Frazzle': '衍射',
    'Fusion Frazzle': '热熔',
    'Glacio Frazzle': '冷凝',
    'Electro Frazzle': '导电',
    'Aero Frazzle': '气动',
    'Havoc Frazzle': '湮灭',
    'Huanglong': '煌珑',
    'Black Shores': '黑海岸',
    'Rinascita': '黎那汐塔',
    'Ragunna': '拉古那',
    'Septimont': '七丘',
    'Thaw of Eons': '岁主',
    'Thaw': '解冻',
    'Eons': '岁月',
    'Jinzhou': '今州',
    'Jinzhou\'s': '今州的',
    'Mt. Firmament': '乘霄山',
    'Firmament': '天穹',
    'Gorges of Spirits': '灵虚山',
    'Whining Aix\'s Mire': '哀声鸷',
    'Dim Forest': '无光之森',
    'Port City of Guixu': '归墟港市',
    'Tiger\'s Maw': '虎口山脉',
    'Norfall Barrens': '北落野',
    'Wuming Bay': '无明湾',
    'Mt. Skyhold': '天衡山',
    'Skyhold': '天衡',
    'Gorges': '峡谷',
    'Spirits': '灵',
    'Whining': '哀声',
    'Aix': '鸷',
    'Mire': '沼泽',
    'Dim': '暗淡',
    'Forest': '森林',
    'Port City': '港市',
    'Guixu': '归墟',
    'Maw': '口',
    'Norfall': '北落',
    'Barrens': '野',
    'Wuming': '无明',
    'Bay': '湾',
  },
};

// 翻译 Fandom 活动标题
function translateFandomEventTitle(title: string, game: GameType): string {
  let translated = title;
  
  // 1. 先应用通用翻译
  const commonTranslations = fandomEventTranslations.common;
  const sortedCommonKeys = Object.keys(commonTranslations).sort((a, b) => b.length - a.length);
  for (const key of sortedCommonKeys) {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    translated = translated.replace(regex, commonTranslations[key]);
  }
  
  // 2. 应用游戏特定翻译
  const gameTranslations = fandomEventTranslations[game];
  if (gameTranslations) {
    const sortedGameKeys = Object.keys(gameTranslations).sort((a, b) => b.length - a.length);
    for (const key of sortedGameKeys) {
      const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      translated = translated.replace(regex, gameTranslations[key]);
    }
  }
  
  return translated;
}

// 判断是否为非活动页面（角色、武器、卡池等）
function isNonEventPage(title: string): boolean {
  const nonEventPatterns = [
    // 角色相关
    /character|角色|人物/i,
    // 武器相关  
    /weapon|武器|light cone|光锥/i,
    // 卡池相关
    /convene|warp|wish|跃迁|唤取|调频|banner/i,
    // 材料相关
    /material|材料|ascension|突破/i,
    // 敌人相关
    /enemy|敌人|boss|首领/i,
    // 地点相关
    /location|地点|区域|domain/i,
    // 系统相关
    /system|系统|mechanic|机制/i,
    // 任务相关（非活动任务）
    /archon quest|main quest|story quest|传说任务/i,
    // 其他通用词
    /guide|攻略|tutorial|教程/i,
  ];
  
  return nonEventPatterns.some(pattern => pattern.test(title));
}

// 从文本解析日期
function parseDatesFromText(text: string): { startDate: string; endDate: string } {
  const currentYear = new Date().getFullYear();
  const dates: Date[] = [];
  
  // 格式1: YYYY-MM-DD 或 YYYY/MM/DD
  const pattern1 = /(\d{4})[-/](\d{1,2})[-/](\d{1,2})/g;
  let match;
  while ((match = pattern1.exec(text)) !== null) {
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const day = parseInt(match[3]);
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      dates.push(new Date(year, month, day));
    }
  }
  
  // 格式2: MM-DD-YYYY
  const pattern2 = /(\d{1,2})[-/](\d{1,2})[-/](\d{4})/g;
  while ((match = pattern2.exec(text)) !== null) {
    const month = parseInt(match[1]) - 1;
    const day = parseInt(match[2]);
    const year = parseInt(match[3]);
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      dates.push(new Date(year, month, day));
    }
  }
  
  // 排序日期
  dates.sort((a, b) => a.getTime() - b.getTime());
  
  // 设置默认日期
  let startDate = new Date();
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 14); // 默认14天
  
  if (dates.length >= 2) {
    startDate = dates[0];
    endDate = dates[dates.length - 1];
  } else if (dates.length === 1) {
    startDate = dates[0];
    endDate = new Date(dates[0]);
    endDate.setDate(endDate.getDate() + 14);
  }
  
  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
}

// 分类活动类型
function classifyEventType(title: string, game: GameType): EventType {
  const titleLower = title.toLowerCase();
  
  // ---- 卡池/祈愿/调频/跃迁/唤取（最高优先级） ----
  if (/banner|wish|祈愿|跃迁|convene|调频|唤取|warp|aptitude showcase|独家频道|限定卡池|up池/i.test(titleLower)) {
    return 'banner';
  }
  // PUBG Royale Pass 视为 banner
  if (/royale pass|rp通行证|r\.p\.通行证/i.test(titleLower)) {
    return 'banner';
  }
  
  // ---- 常规周期重置（优先于大活动判断） ----
  // 原神
  if (/深境螺旋|幻想真境剧诗|spiral abyss|imaginarium theater/i.test(titleLower)) {
    return 'routine';
  }
  // HSR
  if (/忘却之庭|末日幻影|虚构叙事|混沌回忆|差分宇宙|无名勋礼|forgotten hall|memory of chaos|pure fiction|apocalyptic shadow|divergent universe|nameless honor/i.test(titleLower)) {
    return 'routine';
  }
  // ZZZ
  if (/零号空洞|式舆防卫战|危局强袭|hollow zero|shiyu defense|deadly assault/i.test(titleLower)) {
    return 'routine';
  }
  // 鸣潮
  if (/逆境深塔|千道门扉|tower of adversity|tacet field/i.test(titleLower)) {
    return 'routine';
  }
  // 通用签到/登录
  if (/login|签到|check.in|daily check|gift of odyssey|nameless honor|月卡|每日签到/i.test(titleLower)) {
    return 'routine';
  }
  
  // ---- 大活动 ----
  if (/flagship|main event|版本更新|version update|chapter|大活动|主题活动|限时活动|major event|new version/i.test(titleLower)) {
    return 'major_event';
  }
  // PUBG 联动活动视为大活动
  if (/collab|联动|crossover|赛事|tournament|championship/i.test(titleLower)) {
    return 'major_event';
  }
  
  // ---- 默认小活动 ----
  return 'minor_event';
}

// Fandom Wiki 抓取函数（保留兼容）
async function scrapeFandomWiki(url: string, game: GameType): Promise<GameEvent[]> {
  // 优先使用 Event/History 页面
  const historyEvents = await scrapeFandomEventHistory(game);
  if (historyEvents.length > 0) {
    return historyEvents;
  }
  
  // 回退到通用抓取
  console.log(`[Scraper] Falling back to generic Fandom Wiki scraping for ${game}`);
  return [];
}

// 抓取所有游戏活动
export async function scrapeAllEvents(): Promise<Record<GameType, ScrapeResult>> {
  const results = await Promise.allSettled([
    scrapeGenshinEvents(),
    scrapeHSREvents(),
    scrapeZZZEvents(),
    scrapeWutheringEvents(),
    scrapePUBGEvents(),
  ]);

  return {
    genshin: results[0].status === 'fulfilled' ? results[0].value : { success: false, events: [], error: 'Failed', timestamp: new Date().toISOString() },
    hsr: results[1].status === 'fulfilled' ? results[1].value : { success: false, events: [], error: 'Failed', timestamp: new Date().toISOString() },
    zzz: results[2].status === 'fulfilled' ? results[2].value : { success: false, events: [], error: 'Failed', timestamp: new Date().toISOString() },
    wuthering: results[3].status === 'fulfilled' ? results[3].value : { success: false, events: [], error: 'Failed', timestamp: new Date().toISOString() },
    pubg: results[4].status === 'fulfilled' ? results[4].value : { success: false, events: [], error: 'Failed', timestamp: new Date().toISOString() },
  };
}

// 按游戏类型抓取活动
export async function scrapeEventsByGame(game: GameType): Promise<ScrapeResult> {
  console.log(`[Scraper] Scraping events for game: ${game}`);

  switch (game) {
    case 'genshin':
      return scrapeGenshinEvents();
    case 'hsr':
      return scrapeHSREvents();
    case 'zzz':
      return scrapeZZZEvents();
    case 'wuthering':
      return scrapeWutheringEvents();
    case 'pubg':
      return scrapePUBGEvents();
    default:
      return {
        success: false,
        events: [],
        error: `Unknown game type: ${game}`,
        timestamp: new Date().toISOString(),
      };
  }
}
