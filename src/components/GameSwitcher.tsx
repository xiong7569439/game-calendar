'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';
import { gamesConfig } from '@/data/games';
import { GameType } from '@/types';
import { Sparkles, Train, Zap, Waves, Target, Crosshair, Swords, Shield, Flame, Wind, Skull, Snowflake, Bomb, Castle } from 'lucide-react';

// 游戏图标映射
const gameIcons: Record<GameType, React.ReactNode> = {
  genshin: <Sparkles className="w-5 h-5" />,
  hsr: <Train className="w-5 h-5" />,
  zzz: <Zap className="w-5 h-5" />,
  wuthering: <Waves className="w-5 h-5" />,
  pubg: <Target className="w-5 h-5" />,
  arenaBreakoutMobile: <Crosshair className="w-5 h-5" />,
  arenaBreakoutPC: <Target className="w-5 h-5" />,
  bloodStrike: <Swords className="w-5 h-5" />,
  deltaForce: <Shield className="w-5 h-5" />,
  marvelRivals: <Flame className="w-5 h-5" />,
  whereWindsMeet: <Wind className="w-5 h-5" />,
  onceHuman: <Skull className="w-5 h-5" />,
  whiteoutSurvival: <Snowflake className="w-5 h-5" />,
  lastWarSurvival: <Bomb className="w-5 h-5" />,
  kingshot: <Castle className="w-5 h-5" />,
};

export function GameSwitcher() {
  const { selectedGame, setSelectedGame } = useGameStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  // 切换选中游戏时自动将按钮滚入可视区域
  useEffect(() => {
    if (activeBtnRef.current && containerRef.current) {
      const btn = activeBtnRef.current;
      const container = containerRef.current;
      const btnLeft = btn.offsetLeft;
      const btnRight = btnLeft + btn.offsetWidth;
      const viewLeft = container.scrollLeft;
      const viewRight = viewLeft + container.clientWidth;
      if (btnLeft < viewLeft || btnRight > viewRight) {
        container.scrollTo({
          left: btnLeft - container.clientWidth / 2 + btn.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedGame]);

  return (
    <div className="relative">
      {/* 左右渐变遮罩，提示可滚动 */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0f0f1a] to-transparent z-10 rounded-l-2xl" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0f0f1a] to-transparent z-10 rounded-r-2xl" />

      <div
        ref={containerRef}
        className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-x-auto scrollbar-hide"
      >
        {gamesConfig.map((game) => {
          const isActive = selectedGame === game.id;

          return (
            <motion.button
              key={game.id}
              ref={isActive ? activeBtnRef : null}
              onClick={() => setSelectedGame(game.id)}
              className={`
                relative flex items-center gap-2 px-3.5 py-2 rounded-xl flex-shrink-0
                font-medium text-sm transition-all duration-300 whitespace-nowrap
                ${isActive
                  ? 'text-white'
                  : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }
              `}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {/* 背景动画 */}
              {isActive && (
                <motion.div
                  layoutId="activeGameBg"
                  className={`absolute inset-0 bg-gradient-to-r ${game.gradient} rounded-xl shadow-lg`}
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}

              {/* 内容 */}
              <span className="relative z-10 flex items-center gap-1.5">
                <span className={isActive ? 'text-white' : ''}>
                  {gameIcons[game.id]}
                </span>
                <span className="hidden md:inline">{game.name}</span>
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
