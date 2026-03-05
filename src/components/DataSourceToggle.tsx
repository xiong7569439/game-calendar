'use client';

import { motion } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';
import { Database, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DataSourceToggle() {
  const {
    useRealData,
    toggleDataSource,
    fetchEvents,
    isLoading,
    lastUpdate,
    selectedGame
  } = useGameStore();
  
  const [scrapeStatus, setScrapeStatus] = useState<{
    genshin: boolean;
    hsr: boolean;
    zzz: boolean;
    wuthering: boolean;
    pubg: boolean;
  } | null>(null);

  // 获取抓取状态
  useEffect(() => {
    if (useRealData) {
      fetchScrapeStatus();
    }
  }, [useRealData, lastUpdate]);

  const fetchScrapeStatus = async () => {
    try {
      const response = await fetch('/api/events?status=true');
      const result = await response.json();
      
      if (result.success && result.data.results) {
        const results = result.data.results;
        setScrapeStatus({
          genshin: results.genshin?.success && results.genshin?.events?.length > 0,
          hsr: results.hsr?.success && results.hsr?.events?.length > 0,
          zzz: results.zzz?.success && results.zzz?.events?.length > 0,
          wuthering: results.wuthering?.success && results.wuthering?.events?.length > 0,
          pubg: results.pubg?.success && results.pubg?.events?.length > 0,
        });
      }
    } catch (error) {
      console.error('Failed to fetch status:', error);
    }
  };

  const handleRefresh = async () => {
    await fetchEvents(true, selectedGame);
    await fetchScrapeStatus();
  };

  // 格式化最后更新时间
  const formatLastUpdate = () => {
    if (!lastUpdate) return '从未更新';
    const date = new Date(lastUpdate);
    return date.toLocaleString('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* 数据源切换 */}
      <div className="flex items-center gap-3">
        <motion.button
          onClick={toggleDataSource}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl
            font-medium text-sm transition-all duration-200
            border
            ${useRealData 
              ? 'bg-green-500/20 border-green-500/50 text-green-400' 
              : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
            }
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Database className="w-4 h-4" />
          <span>{useRealData ? '真实数据' : '模拟数据'}</span>
        </motion.button>

        {useRealData && (
          <motion.button
            onClick={handleRefresh}
            disabled={isLoading}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-xl
              font-medium text-sm transition-all duration-200
              border border-white/10 text-white/60 hover:text-white
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>刷新</span>
          </motion.button>
        )}
      </div>

      {/* 数据源状态详情 */}
      {useRealData && scrapeStatus && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-wrap items-center gap-2 text-xs"
        >
          <span className="text-white/40">数据源状态:</span>
          {Object.entries(scrapeStatus).map(([game, success]) => (
            <div 
              key={game}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/5"
            >
              {success ? (
                <CheckCircle2 className="w-3 h-3 text-green-400" />
              ) : (
                <XCircle className="w-3 h-3 text-red-400" />
              )}
              <span className={success ? 'text-green-400' : 'text-red-400'}>
                {game === 'genshin' && '原神'}
                {game === 'hsr' && '星铁'}
                {game === 'zzz' && '绝区零'}
                {game === 'wuthering' && '鸣潮'}
                {game === 'pubg' && 'PUBG'}
              </span>
            </div>
          ))}
          <span className="text-white/30 ml-2">
            更新于 {formatLastUpdate()}
          </span>
        </motion.div>
      )}

      {!useRealData && (
        <p className="text-xs text-white/40">
          当前显示模拟数据，点击切换可尝试获取真实活动数据
        </p>
      )}
    </div>
  );
}
