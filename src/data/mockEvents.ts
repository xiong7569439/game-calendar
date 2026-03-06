import { GameEvent } from '@/types';

// ============================================================
// 活动数据基准时间：2026-03-10
// 原神：v6.4「捕风的归客」(2026-02-25 ~ 2026-04-08)
//   上半 2026-02-25 ~ 2026-03-18，下半 2026-03-18 ~ 2026-04-08
//   v6.5 约 2026-04-08 起
// HSR：v4.0「满月是神不在的时间」(2026-02-12 ~ 2026-03-26)
//   上半 2026-02-12 ~ 2026-03-05，下半 2026-03-05 ~ 2026-03-26
//   v4.1 约 2026-03-26 起
// ZZZ：v2.6 (2026-02-12 ~ 2026-03-26)
//   上半 2026-02-12 ~ 2026-03-04，下半 2026-03-04 ~ 2026-03-26
//   v2.7 约 2026-03-26 起
// 鸣潮：v3.1 (2026-02-05 ~ 2026-03-19)
// PUBG：A17 赛季 (2025-12-15 ~ 2026-03-15)，A18 约 2026-03-15 起
// ============================================================

// ============================================================
// 原神活动数据 (v6.4「捕风的归客」当前版本)
// 版本周期：2026-02-25(周三) ~ 2026-04-08(周三)，共42天
// 上半：02-25 ~ 03-18；下半：03-18 ~ 04-08
// ============================================================
export const genshinEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'genshin-6.4-banner-1',
    game: 'genshin',
    title: '「6.4·捕风的归客」上半限定祈愿',
    type: 'banner',
    startDate: '2026-02-25T03:00:00.000Z',
    endDate: '2026-03-18T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '6.4版本「捕风的归客」上半限定5星角色祈愿，UP角色获取概率大幅提升。版本主题角色登场。',
    featured: true,
  },
  {
    id: 'genshin-6.4-banner-weapon',
    game: 'genshin',
    title: '「6.4·捕风的归客」上半神铸赋形',
    type: 'banner',
    startDate: '2026-02-25T03:00:00.000Z',
    endDate: '2026-03-18T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '6.4版本上半5星武器祈愿，与角色卡池同期开放。',
    featured: false,
  },
  {
    id: 'genshin-6.4-banner-2',
    game: 'genshin',
    title: '「6.4·捕风的归客」下半限定祈愿',
    type: 'banner',
    startDate: '2026-03-18T03:00:00.000Z',
    endDate: '2026-04-08T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '6.4版本「捕风的归客」下半限定5星角色祈愿，第二位UP角色登场。',
    featured: true,
  },
  // ---- 常规重置 ----
  {
    id: 'genshin-6.4-abyss-1',
    game: 'genshin',
    title: '深境螺旋（6.4上半期）刷新',
    type: 'routine',
    startDate: '2026-03-01T04:00:00.000Z',
    endDate: '2026-03-16T03:59:00.000Z',
    rewardInfo: 'x800',
    description: '深境螺旋本半月刷新，第12层满星三次通关可获得最多800原石奖励。',
    featured: false,
  },
  {
    id: 'genshin-6.4-abyss-2',
    game: 'genshin',
    title: '深境螺旋（6.4下半期）刷新',
    type: 'routine',
    startDate: '2026-03-16T04:00:00.000Z',
    endDate: '2026-04-01T03:59:00.000Z',
    rewardInfo: 'x800',
    description: '深境螺旋下半月刷新，敌人阵容更换，可再次获得800原石满星奖励。',
    featured: false,
  },
  {
    id: 'genshin-6.4-theater',
    game: 'genshin',
    title: '幻想真境剧诗（6.4期）刷新',
    type: 'routine',
    startDate: '2026-03-01T04:00:00.000Z',
    endDate: '2026-04-01T03:59:00.000Z',
    rewardInfo: 'x420',
    description: '幻想真境剧诗6.4期刷新，本期主题元素更换，挑战满星可获得420原石。',
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
    description: '每月在米游社/HoYoLAB签到，累计可获得60原石及材料奖励。',
    featured: false,
  },
  // ---- 版本大活动（旗舰活动）----
  {
    id: 'genshin-6.4-major',
    game: 'genshin',
    title: '「捕风的归客」版本主题大活动',
    type: 'major_event',
    startDate: '2026-03-03T10:00:00.000Z',
    endDate: '2026-04-07T03:59:00.000Z',
    rewardInfo: 'x1120',
    description: '6.4版本「捕风的归客」核心旗舰活动，包含大剧情和多个小游戏，完成全部任务可累计获得1120+原石及满精4星武器/角色奖励。',
    featured: true,
  },
  // ---- 小活动 ----
  {
    id: 'genshin-6.4-minor-1',
    game: 'genshin',
    title: '「捕风的归客」限时探索活动',
    type: 'minor_event',
    startDate: '2026-02-25T10:00:00.000Z',
    endDate: '2026-04-07T03:59:00.000Z',
    rewardInfo: 'x420',
    description: '6.4版本限时探索小游戏，试用限定角色参与挑战，可获得420原石及材料奖励。',
    featured: false,
  },
  {
    id: 'genshin-6.4-minor-2',
    game: 'genshin',
    title: '「捕风的归客」网页签到活动',
    type: 'minor_event',
    startDate: '2026-03-05T10:00:00.000Z',
    endDate: '2026-04-07T03:59:00.000Z',
    rewardInfo: 'x300',
    description: '参与官方网页签到活动，分多日累计领取原石及道具奖励。',
    featured: false,
  },
  // ---- 下一版本预告 ----
  {
    id: 'genshin-6.5-update',
    game: 'genshin',
    title: '原神 6.5版本更新',
    type: 'major_event',
    startDate: '2026-04-08T03:00:00.000Z',
    endDate: '2026-05-20T02:59:00.000Z',
    rewardInfo: 'x1600',
    description: '6.5版本全新内容上线，包含新角色、新剧情和全新版本活动，更新补偿原石即将发放。',
    featured: true,
  },
];

// ============================================================
// 崩坏：星穹铁道活动数据 (v4.0「满月是神不在的时间」当前版本)
// 版本周期：2026-02-12(周四) ~ 2026-03-26(周四)，共42天
// 上半：02-12 ~ 03-05；下半：03-05 ~ 03-26
// 常规重置（双周）：忘却之庭/末日幻影/虚构叙事错开轮换
// ============================================================
export const hsrEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'hsr-4.0-warp-1',
    game: 'hsr',
    title: '「4.0·满月」上半限定角色跃迁',
    type: 'banner',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-05T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '4.0版本「满月是神不在的时间」上半限定5星角色跃迁，UP角色获取概率大幅提升。',
    featured: true,
  },
  {
    id: 'hsr-4.0-warp-lc-1',
    game: 'hsr',
    title: '「4.0·满月」上半限定光锥跃迁',
    type: 'banner',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-05T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '4.0版本上半限定5星光锥跃迁，与角色卡池同期开放。',
    featured: false,
  },
  {
    id: 'hsr-4.0-warp-2',
    game: 'hsr',
    title: '「4.0·满月」下半限定角色跃迁',
    type: 'banner',
    startDate: '2026-03-05T03:00:00.000Z',
    endDate: '2026-03-26T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '4.0版本「满月是神不在的时间」下半限定5星角色跃迁，第二位UP角色登场。',
    featured: true,
  },
  {
    id: 'hsr-4.0-warp-lc-2',
    game: 'hsr',
    title: '「4.0·满月」下半限定光锥跃迁',
    type: 'banner',
    startDate: '2026-03-05T03:00:00.000Z',
    endDate: '2026-03-26T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '4.0版本下半限定5星光锥跃迁，与下半角色卡池同期开放。',
    featured: false,
  },
  // ---- 常规重置（双周轮换）----
  {
    id: 'hsr-4.0-forgotten-hall',
    game: 'hsr',
    title: '忘却之庭·混沌回忆（4.0下半期）刷新',
    type: 'routine',
    startDate: '2026-03-03T04:00:00.000Z',
    endDate: '2026-03-17T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '忘却之庭·混沌回忆本期刷新，12层全满星可获得最多720星琼，双周重置。',
    featured: false,
  },
  {
    id: 'hsr-4.0-apocalyptic',
    game: 'hsr',
    title: '末日幻影（4.0下半期）刷新',
    type: 'routine',
    startDate: '2026-03-03T04:00:00.000Z',
    endDate: '2026-03-17T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '末日幻影本期刷新，挑战强力BOSS组合，满分可获得720星琼，双周重置。',
    featured: false,
  },
  {
    id: 'hsr-4.0-pure-fiction',
    game: 'hsr',
    title: '虚构叙事（4.0下半期）刷新',
    type: 'routine',
    startDate: '2026-03-17T04:00:00.000Z',
    endDate: '2026-03-31T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '虚构叙事本期刷新，评分4万分满分可获得最多720星琼，双周重置。',
    featured: false,
  },
  {
    id: 'hsr-4.0-divergent-universe',
    game: 'hsr',
    title: '差分宇宙（4.0赛季）',
    type: 'routine',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-26T02:59:00.000Z',
    rewardInfo: 'x800',
    description: '差分宇宙4.0赛季开放，每周完成指定积分任务可获得星琼及专属通货，累计奖励丰厚。',
    featured: false,
  },
  // ---- 签到/巡星之礼 ----
  {
    id: 'hsr-4.0-nameless-honor',
    game: 'hsr',
    title: '巡星之礼（4.0版本签到）',
    type: 'minor_event',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-26T02:59:00.000Z',
    rewardInfo: 'x800',
    description: '4.0版本巡星之礼登录签到活动，每个版本必有，每日登录分多次领取，累计可获得800+星琼及材料。',
    featured: true,
  },
  // ---- 版本大活动（旗舰活动）----
  {
    id: 'hsr-4.0-major',
    game: 'hsr',
    title: '「满月是神不在的时间」版本大活动',
    type: 'major_event',
    startDate: '2026-02-24T10:00:00.000Z',
    endDate: '2026-03-24T02:59:00.000Z',
    rewardInfo: 'x1200',
    description: '4.0版本旗舰大活动，故事主线为「满月是神不在的时间」，通常含剧情任务+小游戏，完成全部可累计获得1200+星琼及4星光锥/角色。',
    featured: true,
  },
  // ---- 下一版本预告 ----
  {
    id: 'hsr-4.1-update',
    game: 'hsr',
    title: '崩坏：星穹铁道 4.1版本更新',
    type: 'major_event',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-05-07T02:59:00.000Z',
    rewardInfo: 'x1600',
    description: '4.1版本全新内容即将上线，包含新角色、新剧情，更新补偿星琼即将发放。',
    featured: true,
  },
];

// ============================================================
// 绝区零活动数据 (v2.6 当前版本，下半期已于3月4日开始)
// 版本周期：2026-02-12(周四) ~ 2026-03-26(周四)，共42天
// 上半：02-12 ~ 03-04；下半：03-04 ~ 03-26（当前处于下半期）
// ============================================================
export const zzzEvents: GameEvent[] = [
  // ---- 卡池（调频）----
  {
    id: 'zzz-2.6-tune-1',
    game: 'zzz',
    title: '「2.6版本上半」独家频道调频',
    type: 'banner',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-04T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.6版本上半S级代理人独家频道调频，UP代理人获取概率大幅提升。',
    featured: true,
  },
  {
    id: 'zzz-2.6-tune-2',
    game: 'zzz',
    title: '「2.6版本下半」独家频道调频',
    type: 'banner',
    startDate: '2026-03-04T03:00:00.000Z',
    endDate: '2026-03-26T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.6版本下半S级代理人独家频道调频，3月4日起已进入下半期，新UP代理人登场。',
    featured: true,
  },
  {
    id: 'zzz-2.6-bangboo-tune',
    game: 'zzz',
    title: '「2.6版本」邦布频道调频',
    type: 'banner',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-26T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.6版本S级邦布独家频道调频，全版本开放。',
    featured: false,
  },
  // ---- 常规重置 ----
  {
    id: 'zzz-hollow-zero-weekly',
    game: 'zzz',
    title: '零号空洞（本周）刷新',
    type: 'routine',
    startDate: '2026-03-09T04:00:00.000Z',
    endDate: '2026-03-16T03:59:00.000Z',
    rewardInfo: 'x300',
    description: '零号空洞每周刷新，完成当期主题任务获取菲林及专属奖励。',
    featured: false,
  },
  {
    id: 'zzz-shiyu-defense',
    game: 'zzz',
    title: '式舆防卫战（2.6下半期）刷新',
    type: 'routine',
    startDate: '2026-03-04T04:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: 'x600',
    description: '式舆防卫战本期刷新，双周重置，满星通关可获得最多600菲林奖励。',
    featured: false,
  },
  {
    id: 'zzz-deadly-assault',
    game: 'zzz',
    title: '危局强袭战（2.6下半期）刷新',
    type: 'routine',
    startDate: '2026-03-11T04:00:00.000Z',
    endDate: '2026-03-25T03:59:00.000Z',
    rewardInfo: 'x360',
    description: '危局强袭战本期刷新，双周重置，挑战强力BOSS获取菲林及进阶材料。',
    featured: false,
  },
  // ---- 全新放送（签到送抽）----
  {
    id: 'zzz-2.6-signin',
    game: 'zzz',
    title: '「全新放送」2.6版本签到活动',
    type: 'minor_event',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-26T02:59:00.000Z',
    rewardInfo: 'x800',
    description: '2.6版本「全新放送」签到活动，每个版本必有，分多次签到累计领取800+菲林及道具奖励。',
    featured: true,
  },
  // ---- 版本大活动（旗舰活动）----
  {
    id: 'zzz-2.6-major',
    game: 'zzz',
    title: '2.6版本主题旗舰活动',
    type: 'major_event',
    startDate: '2026-02-19T10:00:00.000Z',
    endDate: '2026-03-25T02:59:00.000Z',
    rewardInfo: 'x1200',
    description: '2.6版本核心旗舰大活动，通常包含大型走格子/战斗打工玩法，送专属音擎，完成全部任务链可累计获得1200+菲林。',
    featured: true,
  },
  // ---- 下一版本预告 ----
  {
    id: 'zzz-2.7-update',
    game: 'zzz',
    title: '绝区零 2.7版本更新',
    type: 'major_event',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-05-07T02:59:00.000Z',
    rewardInfo: 'x1600',
    description: '2.7版本全新内容即将上线，包含新S级代理人和全新故事，更新补偿菲林即将发放。',
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
    type: 'major_event',
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
