'use client';

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

  return (
    <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
      {gamesConfig.map((game) => {
        const isActive = selectedGame === game.id;
        
        return (
          <motion.button
            key={game.id}
            onClick={() => setSelectedGame(game.id)}
            className={`
              relative flex items-center gap-2 px-4 py-2.5 rounded-xl
              font-medium text-sm transition-all duration-300
              ${isActive 
                ? 'text-white' 
                : 'text-white/60 hover:text-white/80 hover:bg-white/5'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* 背景动画 */}
            {isActive && (
              <motion.div
                layoutId="activeGameBg"
                className={`absolute inset-0 bg-gradient-to-r ${game.gradient} rounded-xl`}
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 35,
                }}
              />
            )}
            
            {/* 内容 */}
            <span className="relative z-10 flex items-center gap-2">
              <span className={isActive ? 'text-white' : ''}>
                {gameIcons[game.id]}
              </span>
              <span className="hidden sm:inline">{game.name}</span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
