'use client';

import { motion } from 'framer-motion';
import { GameEvent, EventStatus, BannerCharacter } from '@/types';
import { getGameConfig, getEventTypeConfig } from '@/data/games';
import { 
  getEventStatus, 
  getRemainingDays, 
  getProgressPercent,
  useGameStore 
} from '@/store/useGameStore';
import { getMultiTimezoneDisplayShort } from '@/lib/timeUtils';
import { getEventTitleWithVersion } from '@/lib/versionUtils';
import { Sparkles, Trophy, Gift, RefreshCw, Clock, Calendar, Globe, Star } from 'lucide-react';

// 活动类型图标映射
const typeIcons = {
  banner: Sparkles,
  major_event: Trophy,
  minor_event: Gift,
  routine: RefreshCw,
};

// 状态标签配置
const statusConfig: Record<EventStatus, { label: string; color: string }> = {
  ongoing: { label: '进行中', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  upcoming: { label: '即将开始', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  ended: { label: '已结束', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
};

interface EventCardProps {
  event: GameEvent;
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const { openEventDetail, selectedGame } = useGameStore();
  const gameConfig = getGameConfig(event.game);
  const typeConfig = getEventTypeConfig(event.type);
  const status = getEventStatus(event);
  const remainingDays = getRemainingDays(event.endDate);
  const progressPercent = getProgressPercent(event);
  
  const TypeIcon = typeIcons[event.type];
  const statusInfo = statusConfig[status];

  // 获取多时区时间显示
  const timeDisplay = getMultiTimezoneDisplayShort(event.startDate, event.endDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.02,
        y: -4,
        transition: { duration: 0.2 }
      }}
      onClick={() => openEventDetail(event)}
      className={`
        relative group cursor-pointer
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-md
        border border-white/10
        rounded-2xl
        overflow-hidden
        transition-all duration-300
        hover:border-white/20
        hover:shadow-2xl
        ${status === 'ended' ? 'opacity-60' : ''}
        ${event.featured ? 'ring-2 ring-offset-2 ring-offset-transparent' : ''}
      `}
      style={{
        boxShadow: event.featured ? `0 0 30px ${gameConfig?.color}30` : undefined,
      }}
    >
      {/* 特色活动边框 */}
      {event.featured && (
        <div 
          className="absolute inset-0 rounded-2xl opacity-50"
          style={{
            background: `linear-gradient(135deg, ${gameConfig?.color}40 0%, transparent 50%)`,
          }}
        />
      )}

      <div className="relative p-5">
        {/* 顶部：类型标签和状态 */}
        <div className="flex items-center justify-between mb-3">
          <div 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: `${typeConfig?.color}20`,
              color: typeConfig?.color 
            }}
          >
            <TypeIcon className="w-3.5 h-3.5" />
            <span>{typeConfig?.label}</span>
          </div>
          
          <div className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusInfo.color}`}>
            {statusInfo.label}
          </div>
        </div>

        {/* 标题 */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-white/90 transition-colors">
          {event.type === 'routine' && (
            <span className="inline-block mr-1 text-sm opacity-70">↺</span>
          )}
          {getEventTitleWithVersion(event)}
        </h3>

        {/* 时间信息 - 多时区显示 */}
        <div className="space-y-1.5 mb-3">
          {/* 亚服时间 */}
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs text-white/40 w-10 flex-shrink-0">亚服</span>
            <span className="font-mono">{timeDisplay.asia}</span>
          </div>
          {/* PUBG Mobile 不显示欧服和美服时间 */}
          {event.game !== 'pubg' && (
            <>
              {/* 欧服时间 */}
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs text-white/30 w-10 flex-shrink-0">欧服</span>
                <span className="font-mono">{timeDisplay.europe}</span>
              </div>
              {/* 美服时间 */}
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs text-white/30 w-10 flex-shrink-0">美服</span>
                <span className="font-mono">{timeDisplay.america}</span>
              </div>
            </>
          )}
        </div>

        {/* 卡池角色信息 */}
        {event.type === 'banner' && event.characters && event.characters.length > 0 && (
          <div className="mb-4">
            {/* 5星角色 */}
            {event.characters.filter((c: BannerCharacter) => c.rarity === 5).length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {event.characters
                  .filter((c: BannerCharacter) => c.rarity === 5)
                  .map((char: BannerCharacter, idx: number, arr: BannerCharacter[]) => (
                    <span key={char.name} className="text-sm text-white/90">
                      {char.name}
                      {char.isNew && (
                        <span className="ml-0.5 text-xs text-amber-400">(新)</span>
                      )}
                      {idx < arr.length - 1 && <span className="text-white/40">、</span>}
                    </span>
                  ))}
              </div>
            )}
            {/* 4星角色 */}
            {event.characters.filter((c: BannerCharacter) => c.rarity === 4).length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <Star className="w-3 h-3 text-purple-400 fill-purple-400" />
                {event.characters
                  .filter((c: BannerCharacter) => c.rarity === 4)
                  .map((char: BannerCharacter, idx: number, arr: BannerCharacter[]) => (
                    <span key={char.name} className="text-sm text-white/70">
                      {char.name}
                      {idx < arr.length - 1 && <span className="text-white/30">、</span>}
                    </span>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* 奖励信息（非卡池活动） */}
        {event.rewardInfo && event.type !== 'banner' && (
          <div className="flex items-center gap-2 mb-4">
            <div 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold"
              style={{ 
                backgroundColor: `${gameConfig?.color}20`,
                color: gameConfig?.color 
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>{event.rewardInfo}</span>
            </div>
          </div>
        )}

        {/* 进度条（仅进行中活动） */}
        {status === 'ongoing' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-white/50">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                剩余 {remainingDays} 天
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="h-full rounded-full"
                style={{ backgroundColor: gameConfig?.color }}
              />
            </div>
          </div>
        )}

        {/* 即将开始倒计时 */}
        {status === 'upcoming' && (
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Clock className="w-4 h-4" />
            <span>还有 {getRemainingDays(event.startDate)} 天开始</span>
          </div>
        )}
      </div>

      {/* 悬停光效 */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gameConfig?.color}10, transparent 40%)`,
        }}
      />
    </motion.div>
  );
}
