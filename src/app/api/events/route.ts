import { NextRequest, NextResponse } from 'next/server';
import { getCachedEvents, getEventsByGame, updateEvents, updateEventsByGame, getScrapeStatus } from '@/lib/eventCache';
import { GameType } from '@/types';

// 添加 CORS 头
function addCorsHeaders(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

// OPTIONS 处理
export async function OPTIONS() {
  return addCorsHeaders(new NextResponse(null, { status: 200 }));
}

// GET /api/events - 获取活动列表
export async function GET(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const { searchParams } = new URL(request.url);
    const game = searchParams.get('game') as GameType | null;
    const refresh = searchParams.get('refresh') === 'true';
    const status = searchParams.get('status');
    
    console.log(`[API] GET /api/events - game: ${game}, refresh: ${refresh}, status: ${status}`);
    
    // 如果需要刷新数据
    if (refresh) {
      console.log('[API] Force refreshing events...');
      // 如果指定了游戏，只刷新该游戏的数据
      if (game) {
        console.log(`[API] Refreshing events for game: ${game}`);
        await updateEventsByGame(game);
      } else {
        await updateEvents();
      }
    }
    
    // 获取状态信息
    if (status === 'true') {
      const scrapeStatus = await getScrapeStatus();
      const duration = Date.now() - startTime;
      console.log(`[API] Status request completed in ${duration}ms`);
      
      return addCorsHeaders(NextResponse.json({
        success: true,
        data: scrapeStatus,
        meta: { duration },
      }));
    }
    
    // 获取活动数据
    let events;
    if (game) {
      events = await getEventsByGame(game);
    } else {
      const cache = await getCachedEvents();
      events = cache.events;
    }
    
    const duration = Date.now() - startTime;
    console.log(`[API] Returning ${events.length} events in ${duration}ms`);
    
    return addCorsHeaders(NextResponse.json({
      success: true,
      data: {
        events,
        count: events.length,
      },
      meta: {
        duration,
        timestamp: new Date().toISOString(),
      },
    }));
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[API] Error after ${duration}ms:`, error);
    
    return addCorsHeaders(NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
        meta: { duration },
      },
      { status: 500 }
    ));
  }
}

// POST /api/events - 强制刷新数据
export async function POST() {
  const startTime = Date.now();
  
  try {
    console.log('[API] POST /api/events - Force refresh triggered');
    const cache = await updateEvents();
    
    const duration = Date.now() - startTime;
    console.log(`[API] Refresh completed in ${duration}ms, ${cache.events.length} events`);
    
    return addCorsHeaders(NextResponse.json({
      success: true,
      data: {
        events: cache.events,
        count: cache.events.length,
        lastUpdate: cache.lastUpdate,
      },
      meta: {
        duration,
        timestamp: new Date().toISOString(),
      },
    }));
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[API] Refresh failed after ${duration}ms:`, error);
    
    return addCorsHeaders(NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
        meta: { duration },
      },
      { status: 500 }
    ));
  }
}
