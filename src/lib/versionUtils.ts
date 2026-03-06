import { GameType } from '@/types';

// 版本基准配置（用于计算当前版本）
export interface VersionBaseConfig {
  baseVersion: string;      // 基准版本号，如 "6.4"
  baseDate: string;         // 基准版本开始日期 ISO格式
  versionDays: number;      // 每个版本持续天数
  versionPrefix?: string;   // 版本前缀，如 "v"
}

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
    baseDate: '2025-12-15T00:00:00.000Z',  // A17 开始时间
    versionDays: 90,  // 约3个月一个赛季
    versionPrefix: '',
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

// 替换文本中的版本号
export function replaceVersionInText(text: string, game: GameType): string {
  const version = getCurrentVersion(game);
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
export function getEventTitleWithVersion(event: { title: string; game: GameType }): string {
  return replaceVersionInText(event.title, event.game);
}
