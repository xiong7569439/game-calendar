'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore, getEventStatus, getRemainingDays, getProgressPercent } from '@/store/useGameStore';
import { getGameConfig, getEventTypeConfig } from '@/data/games';
import { getMultiTimezoneDisplay, formatDateFull } from '@/lib/timeUtils';
import { getEventTitleWithVersion, getVersionInfo } from '@/lib/versionUtils';
import { Sparkles, Trophy, Gift, RefreshCw, Clock, Calendar, X, ExternalLink, Globe } from 'lucide-react';

// 活动类型图标映射
const typeIcons = {
  banner: Sparkles,
  major_event: Trophy,
  minor_event: Gift,
  routine: RefreshCw,
};

export function EventDetailModal() {
  const { 
    selectedEvent, 
    isDetailOpen, 
    closeEventDetail,
    selectedGame 
  } = useGameStore();

  if (!selectedEvent) return null;

  const gameConfig = getGameConfig(selectedEvent.game);
  const typeConfig = getEventTypeConfig(selectedEvent.type);
  const status = getEventStatus(selectedEvent);
  const remainingDays = getRemainingDays(selectedEvent.endDate);
  const progressPercent = getProgressPercent(selectedEvent);
  
  const TypeIcon = typeIcons[selectedEvent.type];

  // 获取当前版本信息
  const versionInfo = getVersionInfo(selectedEvent.game);

  // 获取多时区时间显示
  const timeDisplay = getMultiTimezoneDisplay(selectedEvent.startDate, selectedEvent.endDate);
  const timeDisplayFull = {
    asia: {
      start: formatDateFull(selectedEvent.startDate, 'asia'),
      end: formatDateFull(selectedEvent.endDate, 'asia'),
    },
    europe: {
      start: formatDateFull(selectedEvent.startDate, 'europe'),
      end: formatDateFull(selectedEvent.endDate, 'europe'),
    },
    america: {
      start: formatDateFull(selectedEvent.startDate, 'america'),
      end: formatDateFull(selectedEvent.endDate, 'america'),
    },
  };

  // 状态文本
  const getStatusText = () => {
    switch (status) {
      case 'ongoing':
        return `进行中 · 剩余 ${remainingDays} 天`;
      case 'upcoming':
        return `即将开始 · 还有 ${getRemainingDays(selectedEvent.startDate)} 天`;
      case 'ended':
        return '已结束';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence>
      {isDetailOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEventDetail}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* 侧边抽屉 */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-y-auto"
          >
            {/* 关闭按钮 */}
            <button
              onClick={closeEventDetail}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* 头部图片区域 */}
            <div 
              className="relative h-48 flex items-end p-6"
              style={{
                background: `linear-gradient(135deg, ${gameConfig?.color}40 0%, ${gameConfig?.color}20 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              
              <div className="relative z-10">
                <div 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ 
                    backgroundColor: `${typeConfig?.color}30`,
                    color: typeConfig?.color 
                  }}
                >
                  <TypeIcon className="w-3.5 h-3.5" />
                  <span>{typeConfig?.label}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white">
                  {getEventTitleWithVersion(selectedEvent)}
                </h2>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                  <span>当前版本: {versionInfo.version}</span>
                  <span className="text-white/40">|</span>
                  <span>剩余 {versionInfo.daysRemaining} 天</span>
                </div>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="p-6 space-y-6">
              {/* 状态卡片 */}
              <div 
                className="p-4 rounded-xl border"
                style={{ 
                  backgroundColor: `${gameConfig?.color}10`,
                  borderColor: `${gameConfig?.color}30`
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" style={{ color: gameConfig?.color }} />
                  <span className="font-semibold text-white">{getStatusText()}</span>
                </div>
                
                {status === 'ongoing' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-white/60">
                      <span>活动进度</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${progressPercent}%`,
                          backgroundColor: gameConfig?.color 
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 时间信息 - 多时区显示 */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                  活动时间
                </h3>

                {/* 亚服时间 */}
                <div className="p-4 rounded-xl border bg-white/5"
                  style={{ borderColor: `${gameConfig?.color}30` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5" style={{ color: gameConfig?.color }} />
                    <span className="font-semibold text-white">亚服 (Asia)</span>
                  </div>
                  <div className="space-y-2 font-mono text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40 w-12">开始</span>
                      <span>{timeDisplayFull.asia.start}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40 w-12">结束</span>
                      <span>{timeDisplayFull.asia.end}</span>
                    </div>
                  </div>
                </div>

                {/* PUBG Mobile 不显示欧服和美服时间 */}
                {selectedEvent.game !== 'pubg' && (
                  <>
                    {/* 欧服时间 */}
                    <div className="p-4 rounded-xl border bg-white/5"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-white/50" />
                        <span className="font-semibold text-white/80">欧服 (Europe)</span>
                        <span className="text-xs text-white/40">· 比亚服晚7小时</span>
                      </div>
                      <div className="space-y-2 font-mono text-white/70">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/30 w-12">开始</span>
                          <span>{timeDisplayFull.europe.start}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/30 w-12">结束</span>
                          <span>{timeDisplayFull.europe.end}</span>
                        </div>
                      </div>
                    </div>

                    {/* 美服时间 */}
                    <div className="p-4 rounded-xl border bg-white/5"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-white/50" />
                        <span className="font-semibold text-white/80">美服 (America)</span>
                        <span className="text-xs text-white/40">· 比亚服晚13小时</span>
                      </div>
                      <div className="space-y-2 font-mono text-white/70">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/30 w-12">开始</span>
                          <span>{timeDisplayFull.america.start}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/30 w-12">结束</span>
                          <span>{timeDisplayFull.america.end}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* 奖励信息 */}
              {selectedEvent.rewardInfo && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                    活动奖励
                  </h3>
                  <div 
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: `${gameConfig?.color}15` }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: gameConfig?.color }} />
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {selectedEvent.rewardInfo}
                      </div>
                      <div className="text-sm text-white/60">预计可获得</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 活动描述 */}
              {selectedEvent.description && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                    活动详情
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {getEventTitleWithVersion({ title: selectedEvent.description, game: selectedEvent.game })}
                  </p>
                </div>
              )}

              {/* 操作按钮 */}
              {selectedEvent.url && (
                <div className="pt-4">
                  <button
                    onClick={() => window.open(selectedEvent.url, '_blank')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: gameConfig?.color }}
                  >
                    <span>查看活动详情</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
