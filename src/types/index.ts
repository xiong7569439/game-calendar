// 游戏类型
export type GameType =
  | 'genshin'
  | 'hsr'
  | 'zzz'
  | 'wuthering'
  | 'pubg'
  | 'arenaBreakoutMobile'
  | 'arenaBreakoutPC'
  | 'bloodStrike'
  | 'deltaForce'
  | 'marvelRivals'
  | 'whereWindsMeet'
  | 'onceHuman'
  | 'whiteoutSurvival'
  | 'lastWarSurvival'
  | 'kingshot';

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

// 服务器时区类型
export type ServerRegion = 'asia' | 'europe' | 'america';

// 服务器时区配置
export interface ServerRegionConfig {
  id: ServerRegion;
  label: string;
  labelEn: string;
  offsetHours: number; // 相对于亚服的时差（小时）
}

// 多时区时间显示
export interface MultiTimezoneTime {
  asia: string;
  europe: string;
  america: string;
}

// 卡池角色信息
export interface BannerCharacter {
  name: string;
  rarity: 5 | 4; // 5星或4星
  isNew?: boolean; // 是否新角色
}

// 活动数据
export interface GameEvent {
  id: string;
  game: GameType;
  title: string;
  type: EventType;
  startDate: string; // ISO格式（亚服时间）
  endDate: string; // ISO格式（亚服时间）
  rewardInfo?: string; // 例如: "x960", "x420"
  imageUrl?: string;
  description?: string;
  featured?: boolean; // 是否为重点活动
  url?: string; // 活动详情页链接
  characters?: BannerCharacter[]; // 卡池角色信息（仅卡池活动使用）
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
