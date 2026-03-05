// 游戏类型
export type GameType = 'genshin' | 'hsr' | 'zzz' | 'wuthering' | 'pubg';

// 活动类型
export type EventType = 'banner' | 'major_event' | 'minor_event' | 'routine';

// 活动状态
export type EventStatus = 'ongoing' | 'upcoming' | 'ended';

// 游戏配置
export interface GameConfig {
  id: GameType;
  name: string;
  nameEn: string;
  color: string;
  gradient: string;
  bgColor: string;
  accentColor: string;
  icon: string;
}

// 活动数据
export interface GameEvent {
  id: string;
  game: GameType;
  title: string;
  type: EventType;
  startDate: string; // ISO格式
  endDate: string; // ISO格式
  rewardInfo?: string; // 例如: "x960", "x420"
  imageUrl?: string;
  description?: string;
  featured?: boolean; // 是否为重点活动
  url?: string; // 活动详情页链接
}

// 筛选状态
export interface FilterState {
  selectedGame: GameType;
  selectedTypes: EventType[];
  showEnded: boolean;
}

// 活动类型配置
export interface EventTypeConfig {
  id: EventType;
  label: string;
  icon: string;
  color: string;
}
