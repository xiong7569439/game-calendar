import { GameConfig, EventTypeConfig } from '@/types';

// 游戏配置数据
export const gamesConfig: GameConfig[] = [
  {
    id: 'genshin',
    name: '原神',
    nameEn: 'Genshin Impact',
    color: '#4ECDC4',
    gradient: 'from-teal-400 to-cyan-500',
    bgColor: 'bg-teal-500/10',
    accentColor: '#4ECDC4',
    icon: 'genshin',
  },
  {
    id: 'hsr',
    name: '崩坏：星穹铁道',
    nameEn: 'Honkai: Star Rail',
    color: '#9B7ED9',
    gradient: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-500/10',
    accentColor: '#FFD700',
    icon: 'hsr',
  },
  {
    id: 'zzz',
    name: '绝区零',
    nameEn: 'Zenless Zone Zero',
    color: '#39FF14',
    gradient: 'from-lime-400 to-green-500',
    bgColor: 'bg-lime-500/10',
    accentColor: '#39FF14',
    icon: 'zzz',
  },
  {
    id: 'wuthering',
    name: '鸣潮',
    nameEn: 'Wuthering Waves',
    color: '#00D4FF',
    gradient: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    accentColor: '#00D4FF',
    icon: 'wuthering',
  },
  {
    id: 'pubg',
    name: 'PUBG Mobile',
    nameEn: 'PUBG Mobile',
    color: '#FFB800',
    gradient: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    accentColor: '#FFB800',
    icon: 'pubg',
  },
];

// 活动类型配置
export const eventTypesConfig: EventTypeConfig[] = [
  {
    id: 'banner',
    label: '卡池/祈愿',
    icon: 'sparkles',
    color: '#FF6B6B',
  },
  {
    id: 'major_event',
    label: '大活动',
    icon: 'trophy',
    color: '#4ECDC4',
  },
  {
    id: 'minor_event',
    label: '小活动',
    icon: 'gift',
    color: '#95E1D3',
  },
  {
    id: 'routine',
    label: '常规重置',
    icon: 'refresh-cw',
    color: '#A8A8A8',
  },
];

// 获取游戏配置
export function getGameConfig(gameId: string): GameConfig | undefined {
  return gamesConfig.find(g => g.id === gameId);
}

// 获取活动类型配置
export function getEventTypeConfig(typeId: string): EventTypeConfig | undefined {
  return eventTypesConfig.find(t => t.id === typeId);
}
