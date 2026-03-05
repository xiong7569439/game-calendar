import { GameEvent } from '@/types';

// ============================================================
// 活动数据基准时间：2026-03-05
// 原神：v6.3 (2026-02-05 ~ 2026-03-19), v6.4 即将
// HSR：v3.8 (2026-02-26 ~ 2026-04-09)
// ZZZ：v2.5 (2026-03-05 ~ 2026-04-16)
// 鸣潮：v3.1 (2026-02-05 ~ 2026-03-19)
// PUBG：A17 赛季 (2025-12-15 ~ 2026-03-15)
// ============================================================

// ============================================================
// 原神活动数据 (v6.3 进行中 + v6.4 即将)
// ============================================================
export const genshinEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'genshin-6.3-banner-1',
    game: 'genshin',
    title: '「6.3版本上半」限定祈愿',
    type: 'banner',
    startDate: '2026-02-05T06:00:00.000Z',
    endDate: '2026-02-25T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '6.3版本上半限定5星角色祈愿，获取UP角色概率大幅提升。',
    featured: true,
  },
  {
    id: 'genshin-6.3-banner-2',
    game: 'genshin',
    title: '「6.3版本下半」限定祈愿',
    type: 'banner',
    startDate: '2026-02-25T15:00:00.000Z',
    endDate: '2026-03-18T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '6.3版本下半限定5星角色祈愿，获取UP角色概率大幅提升。',
    featured: true,
  },
  {
    id: 'genshin-6.4-banner-1',
    game: 'genshin',
    title: '「6.4版本上半」限定祈愿',
    type: 'banner',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-08T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '6.4版本上半限定5星角色祈愿即将开启，敬请期待。',
    featured: true,
  },
  // ---- 常规重置 ----
  {
    id: 'genshin-6.3-abyss',
    game: 'genshin',
    title: '深境螺旋（6.3下半）刷新',
    type: 'routine',
    startDate: '2026-03-01T04:00:00.000Z',
    endDate: '2026-03-16T03:59:00.000Z',
    rewardInfo: 'x800',
    description: '深境螺旋第36层满星可获得最多800原石奖励，每半月刷新一次。',
    featured: false,
  },
  {
    id: 'genshin-6.3-theater',
    game: 'genshin',
    title: '幻想真境剧诗（6.3下半）刷新',
    type: 'routine',
    startDate: '2026-03-01T04:00:00.000Z',
    endDate: '2026-03-16T03:59:00.000Z',
    rewardInfo: 'x420',
    description: '幻想真境剧诗本期刷新，挑战获取原石及专属奖励。',
    featured: false,
  },
  // ---- 版本大活动 ----
  {
    id: 'genshin-6.3-major',
    game: 'genshin',
    title: '6.3版本主题限时活动',
    type: 'major_event',
    startDate: '2026-02-18T10:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x1120',
    description: '6.3版本核心大活动，完成各阶段任务可累计获得大量原石奖励。',
    featured: true,
  },
  // ---- 小活动 ----
  {
    id: 'genshin-6.3-minor-1',
    game: 'genshin',
    title: '6.3版本小活动·角色试用',
    type: 'minor_event',
    startDate: '2026-02-18T10:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x420',
    description: '试用限定角色参与挑战，可获得420原石及其他奖励。',
    featured: false,
  },
  {
    id: 'genshin-6.3-minor-2',
    game: 'genshin',
    title: '6.3版本小活动·网页活动',
    type: 'minor_event',
    startDate: '2026-03-05T10:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x300',
    description: '参与官方网页活动，完成任务获取原石及道具奖励。',
    featured: false,
  },
  {
    id: 'genshin-monthly-checkin',
    game: 'genshin',
    title: '米游社每月签到福利',
    type: 'routine',
    startDate: '2026-03-01T00:00:00.000Z',
    endDate: '2026-03-31T23:59:00.000Z',
    rewardInfo: 'x60',
    description: '每月登录米游社/HoYoLAB签到可累计获得原石及材料奖励。',
    featured: false,
  },
  // ---- 版本更新 ----
  {
    id: 'genshin-6.4-update',
    game: 'genshin',
    title: '原神 6.4版本更新',
    type: 'major_event',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-29T03:59:00.000Z',
    rewardInfo: 'x1600',
    description: '6.4版本全新内容上线，包含新角色、新地图和全新版本活动，更新补偿原石即将发放。',
    featured: true,
  },
];

// ============================================================
// 崩坏：星穹铁道活动数据 (v3.8)
// ============================================================
export const hsrEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'hsr-3.8-warp-1',
    game: 'hsr',
    title: '「3.8版本上半」限定跃迁',
    type: 'banner',
    startDate: '2026-02-26T06:00:00.000Z',
    endDate: '2026-03-18T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '3.8版本上半限定5星角色跃迁，UP角色获取概率大幅提升。',
    featured: true,
  },
  {
    id: 'hsr-3.8-warp-lc',
    game: 'hsr',
    title: '「3.8版本上半」限定光锥跃迁',
    type: 'banner',
    startDate: '2026-02-26T06:00:00.000Z',
    endDate: '2026-03-18T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '3.8版本上半限定5星光锥跃迁，与角色卡池同期开放。',
    featured: false,
  },
  {
    id: 'hsr-3.8-warp-2',
    game: 'hsr',
    title: '「3.8版本下半」限定跃迁',
    type: 'banner',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-08T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '3.8版本下半限定5星角色跃迁即将开启，敬请期待。',
    featured: true,
  },
  // ---- 常规重置 ----
  {
    id: 'hsr-3.8-forgotten-hall',
    game: 'hsr',
    title: '忘却之庭（3.8期）刷新',
    type: 'routine',
    startDate: '2026-03-01T04:00:00.000Z',
    endDate: '2026-03-14T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '忘却之庭·混沌回忆本期刷新，完成全部关卡可获得最多720星琼。',
    featured: false,
  },
  {
    id: 'hsr-3.8-apocalyptic',
    game: 'hsr',
    title: '末日幻影（3.8期）刷新',
    type: 'routine',
    startDate: '2026-03-01T04:00:00.000Z',
    endDate: '2026-03-14T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '末日幻影本期刷新，挑战强大敌人获取星琼及专属材料。',
    featured: false,
  },
  {
    id: 'hsr-3.8-pure-fiction',
    game: 'hsr',
    title: '虚构叙事（3.8期）刷新',
    type: 'routine',
    startDate: '2026-03-15T04:00:00.000Z',
    endDate: '2026-03-28T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '虚构叙事本期刷新，评分满分可获得最多720星琼。',
    featured: false,
  },
  {
    id: 'hsr-simulated-universe',
    game: 'hsr',
    title: '差分宇宙（长期开放）',
    type: 'routine',
    startDate: '2026-02-26T06:00:00.000Z',
    endDate: '2026-04-08T14:59:00.000Z',
    rewardInfo: 'x800',
    description: '差分宇宙本赛季开放，完成周任务可获得星琼及专属通货奖励。',
    featured: false,
  },
  // ---- 签到/福利 ----
  {
    id: 'hsr-3.8-nameless-honor',
    game: 'hsr',
    title: '无名勋礼（3.8版本）',
    type: 'routine',
    startDate: '2026-02-26T06:00:00.000Z',
    endDate: '2026-04-08T14:59:00.000Z',
    rewardInfo: 'x400',
    description: '每月登录游戏完成无名勋礼任务，累计获得400星琼及其他奖励。',
    featured: false,
  },
  // ---- 版本大活动 ----
  {
    id: 'hsr-3.8-major',
    game: 'hsr',
    title: '3.8版本主题大活动',
    type: 'major_event',
    startDate: '2026-03-10T10:00:00.000Z',
    endDate: '2026-04-07T03:59:00.000Z',
    rewardInfo: 'x1200',
    description: '3.8版本核心大活动开启，完成全部任务可累计获得大量星琼奖励。',
    featured: true,
  },
  // ---- 版本更新 ----
  {
    id: 'hsr-3.9-update',
    game: 'hsr',
    title: '崩坏：星穹铁道 3.9版本更新',
    type: 'major_event',
    startDate: '2026-04-09T06:00:00.000Z',
    endDate: '2026-05-20T03:59:00.000Z',
    rewardInfo: 'x1600',
    description: '3.9版本全新内容即将上线，包含新角色、新剧情，更新补偿星琼即将发放。',
    featured: true,
  },
];

// ============================================================
// 绝区零活动数据 (v2.5)
// ============================================================
export const zzzEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'zzz-2.5-tune-1',
    game: 'zzz',
    title: '「2.5版本上半」独家频道调频',
    type: 'banner',
    startDate: '2026-03-05T06:00:00.000Z',
    endDate: '2026-03-25T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.5版本上半S级代理人独家频道调频，获取UP代理人概率大幅提升。',
    featured: true,
  },
  {
    id: 'zzz-2.5-tune-2',
    game: 'zzz',
    title: '「2.5版本下半」独家频道调频',
    type: 'banner',
    startDate: '2026-03-25T15:00:00.000Z',
    endDate: '2026-04-15T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.5版本下半S级代理人独家频道调频即将开启，敬请期待。',
    featured: true,
  },
  // ---- 常规重置 ----
  {
    id: 'zzz-hollow-zero-weekly',
    game: 'zzz',
    title: '零号空洞（本周）刷新',
    type: 'routine',
    startDate: '2026-03-03T04:00:00.000Z',
    endDate: '2026-03-09T03:59:00.000Z',
    rewardInfo: 'x300',
    description: '零号空洞每周刷新，完成当期主题获取菲林及专属奖励。',
    featured: false,
  },
  {
    id: 'zzz-shiyu-defense',
    game: 'zzz',
    title: '式舆防卫战（2.5上半）刷新',
    type: 'routine',
    startDate: '2026-03-05T04:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x600',
    description: '式舆防卫战本期刷新，满星通关可获得最多600菲林奖励。',
    featured: false,
  },
  {
    id: 'zzz-deadly-assault',
    game: 'zzz',
    title: '危局强袭战（2.5上半）刷新',
    type: 'routine',
    startDate: '2026-03-12T04:00:00.000Z',
    endDate: '2026-03-25T03:59:00.000Z',
    rewardInfo: 'x360',
    description: '危局强袭战本期刷新，挑战强力BOSS获取菲林及进阶材料。',
    featured: false,
  },
  // ---- 版本大活动 ----
  {
    id: 'zzz-2.5-major',
    game: 'zzz',
    title: '2.5版本主题限时活动',
    type: 'major_event',
    startDate: '2026-03-12T10:00:00.000Z',
    endDate: '2026-04-14T03:59:00.000Z',
    rewardInfo: 'x1200',
    description: '2.5版本核心大活动，完成全部任务链可累计获得1200菲林及大量奖励。',
    featured: true,
  },
  // ---- 小活动 ----
  {
    id: 'zzz-2.5-minor-checkin',
    game: 'zzz',
    title: '2.5版本·登录奖励',
    type: 'minor_event',
    startDate: '2026-03-05T06:00:00.000Z',
    endDate: '2026-04-14T03:59:00.000Z',
    rewardInfo: 'x300',
    description: '版本期间每日登录游戏可累计获得菲林及道具奖励。',
    featured: false,
  },
  // ---- 版本更新 ----
  {
    id: 'zzz-2.6-update',
    game: 'zzz',
    title: '绝区零 2.6版本更新',
    type: 'major_event',
    startDate: '2026-04-16T06:00:00.000Z',
    endDate: '2026-05-27T03:59:00.000Z',
    rewardInfo: 'x1600',
    description: '2.6版本全新内容即将上线，包含新S级代理人和全新故事，更新补偿菲林即将发放。',
    featured: true,
  },
];

// ============================================================
// 鸣潮活动数据 (v3.1)
// ============================================================
export const wutheringEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'wuthering-3.1-convene-1',
    game: 'wuthering',
    title: '「3.1版本上半」特定唤取',
    type: 'banner',
    startDate: '2026-02-05T06:00:00.000Z',
    endDate: '2026-02-26T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '3.1版本上半限定5星共鸣者特定唤取，获取UP共鸣者概率大幅提升。',
    featured: true,
  },
  {
    id: 'wuthering-3.1-convene-2',
    game: 'wuthering',
    title: '「3.1版本下半」特定唤取',
    type: 'banner',
    startDate: '2026-02-26T15:00:00.000Z',
    endDate: '2026-03-18T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '3.1版本下半限定5星共鸣者特定唤取，获取UP共鸣者概率大幅提升。',
    featured: true,
  },
  {
    id: 'wuthering-3.2-convene-1',
    game: 'wuthering',
    title: '「3.2版本上半」特定唤取',
    type: 'banner',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-09T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '3.2版本上半限定5星共鸣者特定唤取即将开启，敬请期待。',
    featured: true,
  },
  // ---- 常规重置 ----
  {
    id: 'wuthering-adversity-tower',
    game: 'wuthering',
    title: '逆境深塔（3.1下半）刷新',
    type: 'routine',
    startDate: '2026-03-05T04:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x960',
    description: '逆境深塔本期刷新，通关全部楼层可获得最多960星声奖励。',
    featured: false,
  },
  {
    id: 'wuthering-weekly-gate',
    game: 'wuthering',
    title: '千道门扉（本周）',
    type: 'routine',
    startDate: '2026-03-03T04:00:00.000Z',
    endDate: '2026-03-09T03:59:00.000Z',
    rewardInfo: 'x160',
    description: '千道门扉每周刷新，完成全部挑战可获得160星声奖励。',
    featured: false,
  },
  // ---- 版本大活动 ----
  {
    id: 'wuthering-3.1-major',
    game: 'wuthering',
    title: '3.1版本限时主题活动',
    type: 'major_event',
    startDate: '2026-02-18T10:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x1600',
    description: '3.1版本核心大活动，完成全部任务链可累计获得1600星声及大量道具奖励。',
    featured: true,
  },
  // ---- 小活动 ----
  {
    id: 'wuthering-3.1-material-double',
    game: 'wuthering',
    title: '养成材料双倍掉落',
    type: 'minor_event',
    startDate: '2026-03-01T00:00:00.000Z',
    endDate: '2026-03-07T23:59:00.000Z',
    rewardInfo: '双倍材料',
    description: '活动期间特定副本养成材料掉落量翻倍，高效肝材料的好时机！',
    featured: false,
  },
  {
    id: 'wuthering-3.1-limited-commission',
    game: 'wuthering',
    title: '3.1版本限时委托',
    type: 'minor_event',
    startDate: '2026-02-18T10:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x400',
    description: '完成版本限时委托任务获取星声及专属道具奖励。',
    featured: false,
  },
  // ---- 版本更新 ----
  {
    id: 'wuthering-3.2-update',
    game: 'wuthering',
    title: '鸣潮 V3.2版本更新',
    type: 'major_event',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-29T03:59:00.000Z',
    rewardInfo: 'x1600',
    description: 'V3.2版本全新内容上线，包含新共鸣者、新地图和全新版本活动，更新补偿星声即将发放。',
    featured: true,
  },
];

// ============================================================
// PUBG Mobile 活动数据 (A17赛季)
// ============================================================
export const pubgEvents: GameEvent[] = [
  // ---- Royale Pass ----
  {
    id: 'pubg-a17-rp',
    game: 'pubg',
    title: 'A17 Royale Pass 通行证',
    type: 'banner',
    startDate: '2025-12-15T00:00:00.000Z',
    endDate: '2026-03-14T23:59:00.000Z',
    rewardInfo: '限定皮肤',
    description: 'A17赛季Royale Pass开启，升级解锁全套限定服装、载具皮肤和武器涂装。',
    featured: true,
  },
  // ---- 大型活动 ----
  {
    id: 'pubg-a17-porsche-collab',
    game: 'pubg',
    title: '保时捷车皮联动活动',
    type: 'major_event',
    startDate: '2025-12-05T00:00:00.000Z',
    endDate: '2025-12-19T23:59:00.000Z',
    rewardInfo: '限定载具皮肤',
    description: '与保时捷联名合作，获取限定跑车皮肤及充值返利活动，预估S级，日活跃80W+。',
    featured: true,
  },
  {
    id: 'pubg-a17-pmgc',
    game: 'pubg',
    title: '2025 PMGC 赛事系列活动',
    type: 'major_event',
    startDate: '2025-12-12T00:00:00.000Z',
    endDate: '2025-12-21T23:59:00.000Z',
    rewardInfo: '限定外观',
    description: '2025 PUBG Mobile全球冠军赛系列活动，参与幸运转盘获取赛事主题限定奖励。',
    featured: false,
  },
  // ---- 小活动 ----
  {
    id: 'pubg-a17-penguin-spin',
    game: 'pubg',
    title: '企鹅&宠物轮盘更新',
    type: 'minor_event',
    startDate: '2025-12-19T00:00:00.000Z',
    endDate: '2026-01-05T23:59:00.000Z',
    rewardInfo: '限定宠物/皮肤',
    description: '全新企鹅&宠物主题幸运转盘上线，限时获取稀有外观道具。',
    featured: false,
  },
  {
    id: 'pubg-a17-custom-spin',
    game: 'pubg',
    title: '自选轮盘红装更新',
    type: 'minor_event',
    startDate: '2025-12-24T00:00:00.000Z',
    endDate: '2026-01-10T23:59:00.000Z',
    rewardInfo: '自选红装',
    description: '自选轮盘新增红装（传说级）服装，玩家可自由挑选心仪皮肤。',
    featured: false,
  },
  {
    id: 'pubg-a17-gold-outfit',
    game: 'pubg',
    title: '金装女皮&98K-LV8升级枪',
    type: 'minor_event',
    startDate: '2025-12-26T00:00:00.000Z',
    endDate: '2026-01-15T23:59:00.000Z',
    rewardInfo: '限定金装',
    description: '限时金装女性服装上线，同期开放98K LV8升级枪活动，预估B级活动。',
    featured: false,
  },
  // ---- 赛季相关 ----
  {
    id: 'pubg-a18-preview',
    game: 'pubg',
    title: 'A18 新赛季即将开始',
    type: 'banner',
    startDate: '2026-03-15T00:00:00.000Z',
    endDate: '2026-06-14T23:59:00.000Z',
    rewardInfo: '新赛季奖励',
    description: 'A18赛季即将开启，全新Royale Pass主题登场，解锁更多限定奖励。',
    featured: true,
  },
  {
    id: 'pubg-arctic-warrior',
    game: 'pubg',
    title: '返厂·极寒战神活动',
    type: 'minor_event',
    startDate: '2026-01-01T00:00:00.000Z',
    endDate: '2026-01-31T23:59:00.000Z',
    rewardInfo: '限定皮肤',
    description: '极寒战神限定皮肤返厂活动，限时再次获取经典战地风格套装。',
    featured: false,
  },
];

// ============================================================
// 所有活动汇总
// ============================================================
export const allEvents: GameEvent[] = [
  ...genshinEvents,
  ...hsrEvents,
  ...zzzEvents,
  ...wutheringEvents,
  ...pubgEvents,
];

// 按游戏获取活动
export function getEventsByGame(gameId: string): GameEvent[] {
  return allEvents.filter(e => e.game === gameId);
}
