'use client';

import { motion } from 'framer-motion';
import { GameSwitcher } from '@/components/GameSwitcher';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Timeline } from '@/components/Timeline';
import { EventDetailModal } from '@/components/EventDetailModal';
import { DataSourceToggle } from '@/components/DataSourceToggle';
import { useGameStore } from '@/store/useGameStore';
import { getGameConfig } from '@/data/games';
import { CalendarDays, Sparkles } from 'lucide-react';

export default function Home() {
  const { selectedGame } = useGameStore();
  const gameConfig = getGameConfig(selectedGame);

  return (
    <div className="min-h-screen bg-[#0f0f1a] relative overflow-hidden">
      {/* 背景渐变 */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-in-out pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, ${gameConfig?.color}20, transparent),
            radial-gradient(ellipse 60% 40% at 80% 80%, ${gameConfig?.color}10, transparent)
          `,
        }}
      />

      {/* 网格背景 */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* 主内容 */}
      <div className="relative z-10">
        {/* 顶部导航 */}
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0f0f1a]/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 第一行：Logo + 版本信息 */}
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500"
                  style={{ backgroundColor: `${gameConfig?.color}30` }}
                >
                  <CalendarDays className="w-5 h-5" style={{ color: gameConfig?.color }} />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">游戏活动日历</h1>
                  <p className="text-xs text-white/50">Game Event Calendar</p>
                </div>
              </motion.div>

              {/* 右侧：当前选中游戏简要信息 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center gap-2 text-sm text-white/60"
              >
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  当前：<span className="text-white font-medium ml-1">{gameConfig?.name}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  共 <span className="text-white font-medium">15</span> 款游戏
                </span>
              </motion.div>
            </div>

            {/* 第二行：游戏切换器（独立一行，横向滚动）*/}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="pb-3"
            >
              <GameSwitcher />
            </motion.div>
          </div>
        </header>

        {/* 主要内容区 */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 页面标题和筛选 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {gameConfig?.name}
                  <span className="text-white/40 text-lg font-normal ml-2">
                    {gameConfig?.nameEn}
                  </span>
                </h2>
                <p className="text-white/60 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" style={{ color: gameConfig?.color }} />
                  查看最新活动和即将到来的更新
                </p>
              </div>

              {/* 分类筛选和数据源切换 */}
              <div className="flex flex-col items-end gap-4">
                <CategoryFilter />
                <DataSourceToggle />
              </div>
            </div>
          </motion.div>

          {/* 时间轴 */}
          <Timeline />
        </main>

        {/* 页脚 */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/40 text-sm">
              游戏活动日历 · 数据仅供参考，请以游戏内实际内容为准
            </p>
          </div>
        </footer>
      </div>

      {/* 详情弹窗 */}
      <EventDetailModal />
    </div>
  );
}
