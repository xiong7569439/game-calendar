'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';
import { gamesConfig } from '@/data/games';
import { GameType } from '@/types';
import {
  Sparkles, Train, Zap, Waves, Target, Crosshair, Swords, Shield,
  Flame, Wind, Skull, Snowflake, Bomb, Castle, ChevronLeft, ChevronRight,
} from 'lucide-react';

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

const SCROLL_STEP = 280; // 每次箭头点击滚动距离（约 2-3 个按钮宽度）

export function GameSwitcher() {
  const { selectedGame, setSelectedGame } = useGameStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  // 滚动状态：是否可以向左/右滚动 + 当前滚动进度（0~1）
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 拖拽状态
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false });

  // 更新滚动状态
  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < maxScroll - 4);
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
  }, []);

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

  // 初始化 + 监听 resize
  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateScrollState]);

  // 鼠标滚轮：垂直滚动转横向
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      // 仅当垂直滚动时才转换；水平滚动保持原样
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // 箭头点击滚动
  const scrollByStep = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === 'left' ? -SCROLL_STEP : SCROLL_STEP,
      behavior: 'smooth',
    });
  };

  // 鼠标拖拽事件
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    dragState.current = {
      isDown: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };

  const onMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    dragState.current.isDown = false;
    el.style.cursor = 'grab';
    el.style.removeProperty('user-select');
  };

  const onMouseUp = () => {
    const el = containerRef.current;
    if (!el) return;
    dragState.current.isDown = false;
    el.style.cursor = 'grab';
    el.style.removeProperty('user-select');
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragState.current.isDown) return;
    const el = containerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - dragState.current.startX;
    if (Math.abs(walk) > 5) dragState.current.moved = true;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  };

  return (
    <div className="relative group">
      {/* 左右渐变遮罩 + 箭头按钮 */}
      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            key="left-arrow"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollByStep('left')}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 text-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="向左滚动"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        )}
        {canScrollRight && (
          <motion.button
            key="right-arrow"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollByStep('right')}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 text-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="向右滚动"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 左右渐变遮罩，依据滚动状态显隐 */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0f0f1a] via-[#0f0f1a]/80 to-transparent z-10 rounded-l-2xl transition-opacity duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0f0f1a] via-[#0f0f1a]/80 to-transparent z-10 rounded-r-2xl transition-opacity duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
      />

      <div
        ref={containerRef}
        onScroll={updateScrollState}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-x-auto scrollbar-hide cursor-grab select-none"
      >
        {gamesConfig.map((game) => {
          const isActive = selectedGame === game.id;

          return (
            <motion.button
              key={game.id}
              ref={isActive ? activeBtnRef : null}
              onClick={() => {
                // 防止拖拽误触发 click
                if (dragState.current.moved) {
                  dragState.current.moved = false;
                  return;
                }
                setSelectedGame(game.id);
              }}
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

      {/* 底部滚动进度条 */}
      {(canScrollLeft || canScrollRight) && (() => {
        const el = containerRef.current;
        const widthPercent = el ? Math.max(15, (el.clientWidth / el.scrollWidth) * 100) : 100;
        const leftPercent = scrollProgress * (100 - widthPercent);
        return (
          <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-150"
              style={{ width: `${widthPercent}%`, left: `${leftPercent}%` }}
            />
          </div>
        );
      })()}
    </div>
  );
}
