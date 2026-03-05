import { create } from 'zustand';
import { GameType, EventType, GameEvent, EventStatus } from '@/types';
import { allEvents as mockEvents } from '@/data/mockEvents';

// 状态接口
interface GameStoreState {
  // 当前选中的游戏
  selectedGame: GameType;
  // 选中的活动类型筛选
  selectedTypes: EventType[];
  // 是否显示已结束的活动
  showEnded: boolean;
  // 当前选中的活动（用于详情弹窗）
  selectedEvent: GameEvent | null;
  // 详情弹窗是否打开
  isDetailOpen: boolean;
  // 活动数据
  events: GameEvent[];
  // 是否正在加载
  isLoading: boolean;
  // 是否使用真实数据
  useRealData: boolean;
  // 最后更新时间
  lastUpdate: string;
}

// 操作方法接口
interface GameStoreActions {
  // 设置选中的游戏
  setSelectedGame: (game: GameType) => void;
  // 切换活动类型筛选
  toggleEventType: (type: EventType) => void;
  // 设置是否显示已结束活动
  setShowEnded: (show: boolean) => void;
  // 打开活动详情
  openEventDetail: (event: GameEvent) => void;
  // 关闭活动详情
  closeEventDetail: () => void;
  // 获取筛选后的活动列表
  getFilteredEvents: () => GameEvent[];
  // 获取活动数据
  fetchEvents: (refresh?: boolean, specificGame?: GameType) => Promise<void>;
  // 切换数据源
  toggleDataSource: () => void;
}

// 计算活动状态
export function getEventStatus(event: GameEvent): EventStatus {
  const now = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);

  if (now < start) return 'upcoming';
  if (now > end) return 'ended';
  return 'ongoing';
}

// 计算剩余天数
export function getRemainingDays(endDate: string): number {
  const now = new Date();
  const end = new Date(endDate);
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

// 计算总天数
export function getTotalDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end.getTime() - start.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// 计算进度百分比
export function getProgressPercent(event: GameEvent): number {
  const now = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  
  if (now < start) return 0;
  if (now > end) return 100;
  
  const total = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();
  return Math.round((elapsed / total) * 100);
}

// 创建 store
export const useGameStore = create<GameStoreState & GameStoreActions>((set, get) => ({
  // 初始状态
  selectedGame: 'genshin',
  selectedTypes: ['banner', 'major_event', 'minor_event', 'routine'],
  showEnded: false,
  selectedEvent: null,
  isDetailOpen: false,
  events: mockEvents,
  isLoading: false,
  useRealData: false,
  lastUpdate: '',

  // 设置选中的游戏
  setSelectedGame: (game) => set({ selectedGame: game }),

  // 切换活动类型筛选
  toggleEventType: (type) => {
    const { selectedTypes } = get();
    if (selectedTypes.includes(type)) {
      set({ selectedTypes: selectedTypes.filter(t => t !== type) });
    } else {
      set({ selectedTypes: [...selectedTypes, type] });
    }
  },

  // 设置是否显示已结束活动
  setShowEnded: (show) => set({ showEnded: show }),

  // 打开活动详情
  openEventDetail: (event) => set({ selectedEvent: event, isDetailOpen: true }),

  // 关闭活动详情
  closeEventDetail: () => set({ selectedEvent: null, isDetailOpen: false }),

  // 获取筛选后的活动列表
  getFilteredEvents: () => {
    const { selectedGame, selectedTypes, showEnded, events, useRealData } = get();
    const dataSource = useRealData ? events : mockEvents;
    
    return dataSource.filter((event: GameEvent) => {
      // 游戏筛选
      if (event.game !== selectedGame) return false;
      
      // 活动类型筛选
      if (!selectedTypes.includes(event.type)) return false;
      
      // 状态筛选
      const status = getEventStatus(event);
      if (status === 'ended' && !showEnded) return false;
      
      return true;
    });
  },

  // 获取活动数据
  fetchEvents: async (refresh = false, specificGame?: GameType) => {
    const { useRealData, selectedGame } = get();
    if (!useRealData) return;

    set({ isLoading: true });

    try {
      // 使用指定的游戏或当前选中的游戏
      const game = specificGame || selectedGame;
      const response = await fetch(`/api/events?game=${game}&refresh=${refresh}`);
      const result = await response.json();

      if (result.success) {
        // 合并新数据与现有数据（保留其他游戏的数据）
        const currentEvents = get().events;
        const newEvents = result.data.events as GameEvent[];

        // 过滤掉当前游戏的旧数据，添加新数据
        const otherGameEvents = currentEvents.filter(e => e.game !== game);
        const mergedEvents = [...otherGameEvents, ...newEvents];

        set({
          events: mergedEvents,
          lastUpdate: new Date().toISOString(),
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
      set({ isLoading: false });
    }
  },

  // 切换数据源
  toggleDataSource: () => {
    const { useRealData, selectedGame } = get();
    const newUseRealData = !useRealData;
    set({ useRealData: newUseRealData });

    if (newUseRealData) {
      // 只抓取当前选中游戏的数据
      get().fetchEvents(true, selectedGame);
    }
  },
}));
