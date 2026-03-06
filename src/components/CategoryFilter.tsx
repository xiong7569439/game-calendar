'use client';

import { motion } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';
import { eventTypesConfig } from '@/data/games';
import { Sparkles, Trophy, Gift, RefreshCw, Eye, EyeOff } from 'lucide-react';

// 图标映射
const typeIcons = {
  banner: Sparkles,
  major_event: Trophy,
  minor_event: Gift,
  routine: RefreshCw,
};

export function CategoryFilter() {
  const { selectedTypes, toggleEventType, showEnded, setShowEnded, selectedGame } = useGameStore();

  // PUBG Mobile 不显示"卡池/祈愿"标签
  const filteredEventTypes = eventTypesConfig.filter(type => {
    if (selectedGame === 'pubg' && type.id === 'banner') return false;
    return true;
  });

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* 活动类型筛选 */}
      <div className="flex items-center gap-2">
        {filteredEventTypes.map((type) => {
          const isSelected = selectedTypes.includes(type.id);
          const Icon = typeIcons[type.id as keyof typeof typeIcons];

          return (
            <motion.button
              key={type.id}
              onClick={() => toggleEventType(type.id)}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                text-sm font-medium transition-all duration-200
                border
                ${isSelected 
                  ? 'border-white/30 text-white' 
                  : 'border-white/10 text-white/50 hover:text-white/70'
                }
              `}
              style={{
                backgroundColor: isSelected ? `${type.color}30` : 'rgba(255,255,255,0.05)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon 
                className="w-4 h-4" 
                style={{ color: isSelected ? type.color : undefined }}
              />
              <span className="hidden sm:inline">{type.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* 分隔线 */}
      <div className="w-px h-6 bg-white/10 hidden sm:block" />

      {/* 显示已结束活动开关 */}
      <motion.button
        onClick={() => setShowEnded(!showEnded)}
        className={`
          flex items-center gap-1.5 px-3 py-1.5 rounded-lg
          text-sm font-medium transition-all duration-200
          border
          ${showEnded 
            ? 'border-white/30 text-white bg-white/10' 
            : 'border-white/10 text-white/50 hover:text-white/70'
          }
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showEnded ? (
          <>
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">显示已结束</span>
          </>
        ) : (
          <>
            <EyeOff className="w-4 h-4" />
            <span className="hidden sm:inline">隐藏已结束</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
