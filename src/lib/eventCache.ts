import { GameEvent, GameType } from '@/types';
import { ScrapeResult, scrapeAllEvents, scrapeEventsByGame } from './scraper';

// 缓存数据结构
interface EventCache {
  events: GameEvent[];
  lastUpdate: string;
  scrapeResults: Record<GameType, ScrapeResult>;
}

// 内存缓存
let cache: EventCache = {
  events: [],
  lastUpdate: '',
  scrapeResults: {} as Record<GameType, ScrapeResult>,
};

// 缓存有效期（毫秒）- 1小时
const CACHE_TTL = 60 * 60 * 1000;

// 是否正在更新
let isUpdating = false;

// 获取缓存的活动数据（不自动触发全量更新）
export async function getCachedEvents(): Promise<EventCache> {
  return cache;
}

// 强制更新活动数据
export async function updateEvents(): Promise<EventCache> {
  if (isUpdating) {
    // 如果正在更新，等待完成
    while (isUpdating) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return cache;
  }

  isUpdating = true;

  try {
    console.log('[EventCache] Starting event scrape...');
    const startTime = Date.now();

    // 抓取所有游戏活动
    const results = await scrapeAllEvents();

    // 合并所有活动
    const allEvents: GameEvent[] = [];

    (Object.keys(results) as GameType[]).forEach(game => {
      const result = results[game];
      if (result.success && result.events.length > 0) {
        allEvents.push(...result.events);
      }
    });

    // 如果抓取失败或没有数据，保留旧数据
    if (allEvents.length === 0 && cache.events.length > 0) {
      console.log('[EventCache] No new events found, keeping cached data');
    } else {
      // 更新缓存
      cache = {
        events: allEvents.length > 0 ? allEvents : cache.events,
        lastUpdate: new Date().toISOString(),
        scrapeResults: results,
      };
    }

    const duration = Date.now() - startTime;
    console.log(`[EventCache] Update completed in ${duration}ms, total events: ${cache.events.length}`);

    return cache;
  } catch (error) {
    console.error('[EventCache] Update failed:', error);
    return cache;
  } finally {
    isUpdating = false;
  }
}

// 按游戏类型更新活动数据
export async function updateEventsByGame(game: GameType): Promise<EventCache> {
  if (isUpdating) {
    // 如果正在更新，等待完成
    while (isUpdating) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return cache;
  }

  isUpdating = true;

  try {
    console.log(`[EventCache] Starting event scrape for game: ${game}...`);
    const startTime = Date.now();

    // 只抓取指定游戏的活动
    const result = await scrapeEventsByGame(game);

    // 更新该游戏的缓存结果
    cache.scrapeResults[game] = result;

    // 如果抓取成功，更新活动列表
    if (result.success && result.events.length > 0) {
      // 移除该游戏的旧活动数据
      const otherEvents = cache.events.filter(e => e.game !== game);
      // 添加新抓取的活动
      cache = {
        events: [...otherEvents, ...result.events],
        lastUpdate: new Date().toISOString(),
        scrapeResults: { ...cache.scrapeResults },
      };
    }

    const duration = Date.now() - startTime;
    console.log(`[EventCache] Update completed for ${game} in ${duration}ms, events: ${result.events.length}`);

    return cache;
  } catch (error) {
    console.error(`[EventCache] Update failed for ${game}:`, error);
    return cache;
  } finally {
    isUpdating = false;
  }
}

// 按游戏获取活动
export async function getEventsByGame(gameId: GameType): Promise<GameEvent[]> {
  const { events } = await getCachedEvents();
  return events.filter((e: GameEvent) => e.game === gameId);
}

// 获取抓取状态
export async function getScrapeStatus(): Promise<{
  lastUpdate: string;
  totalEvents: number;
  results: Record<GameType, ScrapeResult>;
}> {
  const { lastUpdate, events, scrapeResults } = await getCachedEvents();
  return {
    lastUpdate,
    totalEvents: events.length,
    results: scrapeResults,
  };
}

// 初始化缓存
export async function initCache(): Promise<void> {
  console.log('[EventCache] Initializing...');
  await updateEvents();
}
