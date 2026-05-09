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
  {
    id: 'arenaBreakoutMobile',
    name: '暗区突围（手游）',
    nameEn: 'Arena Breakout Mobile',
    color: '#C89B3C',
    gradient: 'from-amber-500 to-yellow-700',
    bgColor: 'bg-amber-500/10',
    accentColor: '#C89B3C',
    icon: 'arenaBreakoutMobile',
  },
  {
    id: 'arenaBreakoutPC',
    name: '暗区突围：无限（PC）',
    nameEn: 'Arena Breakout: Infinite',
    color: '#8B6914',
    gradient: 'from-yellow-700 to-stone-700',
    bgColor: 'bg-yellow-900/10',
    accentColor: '#8B6914',
    icon: 'arenaBreakoutPC',
  },
  {
    id: 'bloodStrike',
    name: '血战使命',
    nameEn: 'Blood Strike',
    color: '#E63946',
    gradient: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-500/10',
    accentColor: '#E63946',
    icon: 'bloodStrike',
  },
  {
    id: 'deltaForce',
    name: '三角洲行动（全球）',
    nameEn: 'Delta Force',
    color: '#5D9E31',
    gradient: 'from-green-600 to-emerald-700',
    bgColor: 'bg-green-600/10',
    accentColor: '#5D9E31',
    icon: 'deltaForce',
  },
  {
    id: 'marvelRivals',
    name: '漫威争锋',
    nameEn: 'Marvel Rivals',
    color: '#D62828',
    gradient: 'from-red-600 to-orange-600',
    bgColor: 'bg-red-600/10',
    accentColor: '#D62828',
    icon: 'marvelRivals',
  },
  {
    id: 'whereWindsMeet',
    name: '燕云十六声',
    nameEn: 'Where Winds Meet',
    color: '#A67C52',
    gradient: 'from-amber-700 to-stone-600',
    bgColor: 'bg-amber-700/10',
    accentColor: '#A67C52',
    icon: 'whereWindsMeet',
  },
  {
    id: 'onceHuman',
    name: '七日世界',
    nameEn: 'Once Human',
    color: '#7B68EE',
    gradient: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-indigo-500/10',
    accentColor: '#7B68EE',
    icon: 'onceHuman',
  },
  {
    id: 'whiteoutSurvival',
    name: '寒霜启示录',
    nameEn: 'Whiteout Survival',
    color: '#6FC3DF',
    gradient: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-500/10',
    accentColor: '#6FC3DF',
    icon: 'whiteoutSurvival',
  },
  {
    id: 'lastWarSurvival',
    name: '末日：幸存者',
    nameEn: 'Last War: Survival',
    color: '#FF8C42',
    gradient: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    accentColor: '#FF8C42',
    icon: 'lastWarSurvival',
  },
  {
    id: 'kingshot',
    name: 'Kingshot',
    nameEn: 'Kingshot',
    color: '#F5D547',
    gradient: 'from-yellow-300 to-amber-500',
    bgColor: 'bg-yellow-400/10',
    accentColor: '#F5D547',
    icon: 'kingshot',
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
