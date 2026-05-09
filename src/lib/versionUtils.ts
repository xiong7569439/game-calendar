import { GameType } from '@/types';

// 版本基准配置（用于计算当前版本）
export interface VersionBaseConfig {
  baseVersion: string;      // 基准版本号，如 "6.4"
  baseDate: string;         // 基准版本开始日期 ISO格式
  versionDays: number;      // 每个版本持续天数
  versionPrefix?: string;   // 版本前缀，如 "v"
}

// PUBG Mobile RP 赛季精确时间表（2026年）
// 每个赛季结束时间 = 下个赛季开始时间
export const pubgRpSchedule: { version: string; startDate: string; endDate: string }[] = [
  { version: 'A17', startDate: '2026-01-11T02:00:00.000Z', endDate: '2026-03-15T01:59:00.000Z' },
  { version: 'A18', startDate: '2026-03-15T02:00:00.000Z', endDate: '2026-05-17T01:59:00.000Z' },
  { version: 'A19', startDate: '2026-05-17T02:00:00.000Z', endDate: '2026-07-14T01:59:00.000Z' },
  { version: 'A20', startDate: '2026-07-14T02:00:00.000Z', endDate: '2026-09-15T01:59:00.000Z' },
  { version: 'A21', startDate: '2026-09-15T02:00:00.000Z', endDate: '2026-11-16T01:59:00.000Z' },
  { version: 'A22', startDate: '2026-11-16T02:00:00.000Z', endDate: '2027-01-11T01:59:00.000Z' },
];

// 各游戏版本基准配置
export const versionBaseConfigs: Record<GameType, VersionBaseConfig> = {
  genshin: {
    baseVersion: '6.4',
    baseDate: '2026-02-25T03:00:00.000Z',  // v6.4 开始时间（周三）
    versionDays: 42,
    versionPrefix: '',
  },
  hsr: {
    baseVersion: '4.0',
    baseDate: '2026-02-12T03:00:00.000Z',  // v4.0 开始时间（周四）
    versionDays: 42,
    versionPrefix: '',
  },
  zzz: {
    baseVersion: '2.6',
    baseDate: '2026-02-12T03:00:00.000Z',  // v2.6 开始时间（周四）
    versionDays: 42,
    versionPrefix: '',
  },
  wuthering: {
    baseVersion: '3.1',
    baseDate: '2026-02-05T06:00:00.000Z',  // v3.1 开始时间
    versionDays: 42,
    versionPrefix: 'V',
  },
  pubg: {
    baseVersion: 'A17',
    baseDate: '2026-01-11T02:00:00.000Z',  // A17 RP 开始时间（北京时间10:00 = UTC 02:00）
    versionDays: 64,  // 默认使用A17的天数作为基准
    versionPrefix: '',
  },
  // 暗区突围（手游）：赛季节律约 60 天
  arenaBreakoutMobile: {
    baseVersion: 'S9',
    baseDate: '2026-03-01T02:00:00.000Z',
    versionDays: 60,
    versionPrefix: 'S',
  },
  // 暗区突围：无限（PC）：赛季节律约 70 天
  arenaBreakoutPC: {
    baseVersion: 'S5',
    baseDate: '2026-03-05T02:00:00.000Z',
    versionDays: 70,
    versionPrefix: 'S',
  },
  // Blood Strike：赛季约 56 天
  bloodStrike: {
    baseVersion: 'S8',
    baseDate: '2026-03-10T02:00:00.000Z',
    versionDays: 56,
    versionPrefix: 'S',
  },
  // Delta Force Global：赛季约 60 天
  deltaForce: {
    baseVersion: 'S3',
    baseDate: '2026-02-20T02:00:00.000Z',
    versionDays: 60,
    versionPrefix: 'S',
  },
  // Marvel Rivals：赛季约 56 天
  marvelRivals: {
    baseVersion: 'S4',
    baseDate: '2026-03-14T02:00:00.000Z',
    versionDays: 56,
    versionPrefix: 'S',
  },
  // 燕云十六声：大版本约 42 天
  whereWindsMeet: {
    baseVersion: 'V1.5',
    baseDate: '2026-02-26T03:00:00.000Z',
    versionDays: 42,
    versionPrefix: 'V',
  },
  // Once Human：赛季约 42 天
  onceHuman: {
    baseVersion: 'S6',
    baseDate: '2026-03-12T02:00:00.000Z',
    versionDays: 42,
    versionPrefix: 'S',
  },
  // Whiteout Survival：月度版本周期
  whiteoutSurvival: {
    baseVersion: 'Y2Q2',
    baseDate: '2026-04-01T00:00:00.000Z',
    versionDays: 30,
    versionPrefix: '',
  },
  // Last War Survival：月度版本周期
  lastWarSurvival: {
    baseVersion: 'Y2M4',
    baseDate: '2026-04-01T00:00:00.000Z',
    versionDays: 30,
    versionPrefix: '',
  },
  // Kingshot：赛季约 45 天
  kingshot: {
    baseVersion: 'S3',
    baseDate: '2026-03-15T00:00:00.000Z',
    versionDays: 45,
    versionPrefix: 'S',
  },
};

// 解析版本号
function parseVersion(version: string): { major: number; minor: number; prefix: string } {
  const match = version.match(/^([A-Za-z]*)(\d+)\.(\d+)$/);
  if (match) {
    return {
      prefix: match[1],
      major: parseInt(match[2], 10),
      minor: parseInt(match[3], 10),
    };
  }
  // 处理类似 A17 的格式
  const seasonMatch = version.match(/^([A-Za-z]+)(\d+)$/);
  if (seasonMatch) {
    return {
      prefix: seasonMatch[1],
      major: parseInt(seasonMatch[2], 10),
      minor: 0,
    };
  }
  return { major: 0, minor: 0, prefix: '' };
}

// 格式化版本号
function formatVersion(major: number, minor: number, prefix: string = ''): string {
  if (minor === 0 && prefix) {
    return `${prefix}${major}`;
  }
  return `${prefix}${major}.${minor}`;
}

// 计算当前版本
export function getCurrentVersion(game: GameType): string {
  // PUBG 使用精确的 RP 赛季时间表
  if (game === 'pubg') {
    const now = new Date();
    for (const season of pubgRpSchedule) {
      const startDate = new Date(season.startDate);
      const endDate = new Date(season.endDate);
      if (now >= startDate && now < endDate) {
        return season.version;
      }
    }
    // 如果当前时间不在任何赛季内，返回最后一个赛季
    return pubgRpSchedule[pubgRpSchedule.length - 1]?.version || 'A17';
  }

  const config = versionBaseConfigs[game];
  if (!config) return '';

  const now = new Date();
  const baseDate = new Date(config.baseDate);
  const baseParsed = parseVersion(config.baseVersion);

  // 计算从基准版本到现在经过了多少天
  const diffTime = now.getTime() - baseDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // 计算经过了多少个版本周期
  const versionOffset = Math.floor(diffDays / config.versionDays);

  // 计算当前版本号
  let currentMajor = baseParsed.major;
  let currentMinor = baseParsed.minor;

  for (let i = 0; i < versionOffset; i++) {
    currentMinor++;
    // 假设每年一个大版本（原神/崩铁/绝区零约每年一个大版本）
    // 这里简化处理，假设小版本号到9后进位
    if (currentMinor > 9) {
      currentMajor++;
      currentMinor = 0;
    }
  }

  return formatVersion(currentMajor, currentMinor, baseParsed.prefix || config.versionPrefix);
}

// 获取版本开始日期
export function getVersionStartDate(game: GameType, version?: string): Date {
  // PUBG 使用精确的 RP 赛季时间表
  if (game === 'pubg') {
    const targetVersion = version || getCurrentVersion(game);
    const season = pubgRpSchedule.find(s => s.version === targetVersion);
    if (season) {
      return new Date(season.startDate);
    }
    return new Date();
  }

  const config = versionBaseConfigs[game];
  if (!config) return new Date();

  const targetVersion = version || getCurrentVersion(game);
  const currentVersion = getCurrentVersion(game);

  const baseDate = new Date(config.baseDate);

  if (targetVersion === currentVersion) {
    // 计算当前版本的开始日期
    const now = new Date();
    const diffTime = now.getTime() - baseDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const versionOffset = Math.floor(diffDays / config.versionDays);
    const currentVersionStart = new Date(baseDate.getTime() + versionOffset * config.versionDays * 24 * 60 * 60 * 1000);
    return currentVersionStart;
  }

  // 如果是指定版本，计算偏移
  const targetParsed = parseVersion(targetVersion);
  const baseParsed = parseVersion(config.baseVersion);

  const majorDiff = targetParsed.major - baseParsed.major;
  const minorDiff = targetParsed.minor - baseParsed.minor;
  const totalVersionDiff = majorDiff * 10 + minorDiff; // 简化计算

  const targetStart = new Date(baseDate.getTime() + totalVersionDiff * config.versionDays * 24 * 60 * 60 * 1000);
  return targetStart;
}

// 获取版本结束日期
export function getVersionEndDate(game: GameType, version?: string): Date {
  // PUBG 使用精确的 RP 赛季时间表
  if (game === 'pubg') {
    const targetVersion = version || getCurrentVersion(game);
    const season = pubgRpSchedule.find(s => s.version === targetVersion);
    if (season) {
      return new Date(season.endDate);
    }
    return new Date();
  }

  const startDate = getVersionStartDate(game, version);
  const config = versionBaseConfigs[game];
  if (!config) return startDate;

  return new Date(startDate.getTime() + config.versionDays * 24 * 60 * 60 * 1000);
}

// 获取版本信息对象
export interface VersionInfo {
  version: string;
  startDate: Date;
  endDate: Date;
  daysRemaining: number;
  progressPercent: number;
}

export function getVersionInfo(game: GameType): VersionInfo {
  const version = getCurrentVersion(game);
  const startDate = getVersionStartDate(game, version);
  const endDate = getVersionEndDate(game, version);

  const now = new Date();
  const totalDuration = endDate.getTime() - startDate.getTime();
  const elapsed = now.getTime() - startDate.getTime();
  const remaining = endDate.getTime() - now.getTime();

  const daysRemaining = Math.max(0, Math.ceil(remaining / (1000 * 60 * 60 * 24)));
  const progressPercent = Math.min(100, Math.max(0, Math.round((elapsed / totalDuration) * 100)));

  return {
    version,
    startDate,
    endDate,
    daysRemaining,
    progressPercent,
  };
}

// 根据日期获取 PUBG RP 版本
function getPubgRpVersionByDate(date: Date): string {
  for (const season of pubgRpSchedule) {
    const startDate = new Date(season.startDate);
    const endDate = new Date(season.endDate);
    // 如果日期在赛季内或赛季开始前后几天内，返回该赛季版本
    if (date >= startDate && date < endDate) {
      return season.version;
    }
  }
  // 如果不在任何赛季内，找到最接近的赛季
  for (let i = 0; i < pubgRpSchedule.length - 1; i++) {
    const currentSeason = pubgRpSchedule[i];
    const nextSeason = pubgRpSchedule[i + 1];
    const seasonEnd = new Date(currentSeason.endDate);
    const nextStart = new Date(nextSeason.startDate);
    if (date >= seasonEnd && date < nextStart) {
      // 在赛季间隙，返回下一个赛季
      return nextSeason.version;
    }
  }
  // 默认返回最后一个赛季
  return pubgRpSchedule[pubgRpSchedule.length - 1]?.version || 'A17';
}

// PUBG 大版本更新时间表（2026年）
// 用于将大版本号（如4.2）映射到对应的时间段
const pubgMajorVersionSchedule: { version: string; startDate: string; rpVersion: string }[] = [
  { version: '4.2', startDate: '2026-01-08T03:00:00.000Z', rpVersion: 'A17' },
  { version: '4.3', startDate: '2026-03-12T03:00:00.000Z', rpVersion: 'A18' },
  { version: '4.4', startDate: '2026-05-13T03:00:00.000Z', rpVersion: 'A19' },
  { version: '4.5', startDate: '2026-07-10T03:00:00.000Z', rpVersion: 'A20' },
  { version: '4.6', startDate: '2026-09-10T03:00:00.000Z', rpVersion: 'A21' },
  { version: '4.7', startDate: '2026-11-11T03:00:00.000Z', rpVersion: 'A22' },
];

// 根据日期获取 PUBG 大版本号
function getPubgMajorVersionByDate(date: Date): string {
  for (let i = 0; i < pubgMajorVersionSchedule.length; i++) {
    const current = pubgMajorVersionSchedule[i];
    const next = pubgMajorVersionSchedule[i + 1];
    const currentStart = new Date(current.startDate);
    const nextStart = next ? new Date(next.startDate) : new Date('2027-12-31');
    
    if (date >= currentStart && date < nextStart) {
      return current.version;
    }
  }
  // 默认返回第一个
  return pubgMajorVersionSchedule[0]?.version || '4.2';
}

// 替换文本中的版本号
export function replaceVersionInText(text: string, game: GameType, eventStartDate?: string): string {
  let version = getCurrentVersion(game);
  
  // 对于 PUBG，如果有活动开始日期，根据日期确定版本
  if (game === 'pubg' && eventStartDate) {
    const startDate = new Date(eventStartDate);
    const rpVersion = getPubgRpVersionByDate(startDate);
    const majorVersion = getPubgMajorVersionByDate(startDate);
    
    // 分别替换 RP 版本号（A17）和大版本号（4.2）
    let result = text;
    result = result.replace(/\bA\d+\b/g, rpVersion);  // 替换 A17 格式
    result = result.replace(/\b\d+\.\d+\b/g, majorVersion);  // 替换 4.2 格式（大版本号）
    return result;
  }
  
  if (!version) return text;

  // 替换各种版本号格式
  // 例如：6.4, v6.4, V6.4, A17 等
  const versionPatterns = [
    /\bv?\d+\.\d+\b/g,  // 匹配 6.4, v6.4
    /\bA\d+\b/g,        // 匹配 A17
    /\bV\d+\.\d+\b/g,   // 匹配 V3.1
  ];

  let result = text;
  versionPatterns.forEach(pattern => {
    result = result.replace(pattern, version);
  });

  return result;
}

// 获取带版本号的活动标题
export function getEventTitleWithVersion(event: { title: string; game: GameType; startDate?: string }): string {
  return replaceVersionInText(event.title, event.game, event.startDate);
}
