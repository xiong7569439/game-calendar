'use client';

import { motion } from 'framer-motion';
import { useGameStore, getEventStatus } from '@/store/useGameStore';
import { EventCard } from './EventCard';
import { GameEvent, EventStatus } from '@/types';
import { getGameConfig } from '@/data/games';
import { Play, Clock, CheckCircle2 } from 'lucide-react';

// 活动类型排序权重（数字越小越靠前）
const TYPE_ORDER: Record<string, number> = {
  banner: 0,
  major_event: 1,
  minor_event: 2,
  routine: 3,
};

// 按状态分组活动
function groupEventsByStatus(events: GameEvent[]): Record<EventStatus, GameEvent[]> {
  const groups: Record<EventStatus, GameEvent[]> = {
    ongoing: [],
    upcoming: [],
    ended: [],
  };

  events.forEach(event => {
    const status = getEventStatus(event);
    groups[status].push(event);
  });

  // 进行中活动：featured 降序 → 类型排序 → 结束时间升序（即将进属排前）
  groups.ongoing.sort((a, b) => {
    if ((b.featured ? 1 : 0) !== (a.featured ? 1 : 0)) {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    const typeA = TYPE_ORDER[a.type] ?? 99;
    const typeB = TYPE_ORDER[b.type] ?? 99;
    if (typeA !== typeB) return typeA - typeB;
    return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
  });

  // 即将开始活动：类型排序 → 开始时间升序
  groups.upcoming.sort((a, b) => {
    const typeA = TYPE_ORDER[a.type] ?? 99;
    const typeB = TYPE_ORDER[b.type] ?? 99;
    if (typeA !== typeB) return typeA - typeB;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  return groups;
}

// 状态区块组件
function StatusSection({ 
  title, 
  icon: Icon, 
  events, 
  color,
  emptyText 
}: { 
  title: string;
  icon: React.ElementType;
  events: GameEvent[];
  color: string;
  emptyText: string;
}) {
  if (events.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* 状态标题 */}
      <div className="flex items-center gap-2 px-2">
        <div 
          className="p-2 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/60">
          {events.length}
        </span>
      </div>

      {/* 活动卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <EventCard 
            key={event.id} 
            event={event} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export function Timeline() {
  const { selectedGame, getFilteredEvents } = useGameStore();
  const events = getFilteredEvents();
  const gameConfig = getGameConfig(selectedGame);
  
  const groupedEvents = groupEventsByStatus(events);

  return (
    <motion.div
      key={selectedGame}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* 进行中活动 */}
      <StatusSection
        title="当前进行中"
        icon={Play}
        events={groupedEvents.ongoing}
        color="#4ADE80"
        emptyText="暂无进行中的活动"
      />

      {/* 即将开始活动 */}
      <StatusSection
        title="即将开始"
        icon={Clock}
        events={groupedEvents.upcoming}
        color="#60A5FA"
        emptyText="暂无即将开始的活动"
      />

      {/* 已结束活动 */}
      <StatusSection
        title="已结束"
        icon={CheckCircle2}
        events={groupedEvents.ended}
        color="#9CA3AF"
        emptyText="暂无已结束的活动"
      />

      {/* 空状态 */}
      {events.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: `${gameConfig?.color}20` }}
          >
            <Clock className="w-10 h-10" style={{ color: gameConfig?.color }} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            暂无活动数据
          </h3>
          <p className="text-white/60 max-w-sm">
            当前筛选条件下没有活动，请尝试调整筛选条件或查看其他游戏
          </p>
        </div>
      )}
    </motion.div>
  );
}
