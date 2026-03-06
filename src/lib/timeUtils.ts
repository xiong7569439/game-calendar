import { ServerRegionConfig, ServerRegion } from '@/types';

// 服务器时区配置
export const serverRegionsConfig: ServerRegionConfig[] = [
  {
    id: 'asia',
    label: '亚服',
    labelEn: 'Asia',
    offsetHours: 0,
  },
  {
    id: 'europe',
    label: '欧服',
    labelEn: 'Europe',
    offsetHours: -7,
  },
  {
    id: 'america',
    label: '美服',
    labelEn: 'America',
    offsetHours: -13,
  },
];

// 获取服务器配置
export function getServerRegionConfig(region: ServerRegion): ServerRegionConfig | undefined {
  return serverRegionsConfig.find(r => r.id === region);
}

// 将亚服时间转换为指定服务器时间
export function convertToServerTime(asiaDateStr: string, region: ServerRegion): Date {
  const asiaDate = new Date(asiaDateStr);
  const config = getServerRegionConfig(region);
  
  if (!config) return asiaDate;
  
  // 根据时差计算目标服务器时间
  const offsetMs = config.offsetHours * 60 * 60 * 1000;
  return new Date(asiaDate.getTime() + offsetMs);
}

// 格式化日期 - 显示月/日，跨年则显示年份
export function formatDate(dateStr: string, region: ServerRegion = 'asia'): string {
  const date = convertToServerTime(dateStr, region);
  const now = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  if (date.getFullYear() !== now.getFullYear()) {
    return `${date.getFullYear()}/${month}/${day} ${hours}:${minutes}`;
  }
  return `${month}/${day} ${hours}:${minutes}`;
}

// 格式化完整日期 - 年月日 时分
export function formatDateFull(dateStr: string, region: ServerRegion = 'asia'): string {
  const date = convertToServerTime(dateStr, region);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${hours}:${minutes}`;
}

// 获取所有服务器时间的格式化结果
export function getAllServerTimes(dateStr: string): {
  asia: string;
  europe: string;
  america: string;
} {
  return {
    asia: formatDate(dateStr, 'asia'),
    europe: formatDate(dateStr, 'europe'),
    america: formatDate(dateStr, 'america'),
  };
}

// 获取所有服务器时间的完整格式化结果
export function getAllServerTimesFull(dateStr: string): {
  asia: string;
  europe: string;
  america: string;
} {
  return {
    asia: formatDateFull(dateStr, 'asia'),
    europe: formatDateFull(dateStr, 'europe'),
    america: formatDateFull(dateStr, 'america'),
  };
}

// 多时区时间显示组件的辅助函数
export function getMultiTimezoneDisplay(startDate: string, endDate: string): {
  asia: { start: string; end: string };
  europe: { start: string; end: string };
  america: { start: string; end: string };
} {
  return {
    asia: {
      start: formatDate(startDate, 'asia'),
      end: formatDate(endDate, 'asia'),
    },
    europe: {
      start: formatDate(startDate, 'europe'),
      end: formatDate(endDate, 'europe'),
    },
    america: {
      start: formatDate(startDate, 'america'),
      end: formatDate(endDate, 'america'),
    },
  };
}

// 获取简化的多时区时间显示（用于卡片）
export function getMultiTimezoneDisplayShort(startDate: string, endDate: string): {
  asia: string;
  europe: string;
  america: string;
} {
  const formatShort = (dateStr: string, region: ServerRegion) => {
    const date = convertToServerTime(dateStr, region);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${month}/${day} ${hours}:${minutes}`;
  };

  return {
    asia: `${formatShort(startDate, 'asia')} - ${formatShort(endDate, 'asia')}`,
    europe: `${formatShort(startDate, 'europe')} - ${formatShort(endDate, 'europe')}`,
    america: `${formatShort(startDate, 'america')} - ${formatShort(endDate, 'america')}`,
  };
}
