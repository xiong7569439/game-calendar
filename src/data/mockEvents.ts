import { GameEvent } from '@/types';

// ============================================================
// 活动数据基准时间：2026-03-10
// 原神：v6.4「捕风的归客」(2026-02-25 ~ 2026-04-08)
//   上半 2026-02-25 ~ 2026-03-18，下半 2026-03-18 ~ 2026-04-08
//   v6.5 约 2026-04-08 起
// HSR：v4.0「满月是神不在的时间」(2026-02-12 ~ 2026-03-26)
//   上半 2026-02-12 ~ 2026-03-05，下半 2026-03-05 ~ 2026-03-26
//   v4.1 约 2026-03-26 起
// ZZZ：v2.6「旧梦的安可曲」(2026-02-06 ~ 2026-03-20)
//   上半 2026-02-06 ~ 2026-03-04，下半 2026-03-04 ~ 2026-03-20
//   v2.7 约 2026-03-20 起
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
  // ---- 版本大活动（旗舰活动）----
  {
    id: 'hsr-4.0-major-dice',
    game: 'hsr',
    title: '「上骰了！战力党！」版本大活动',
    type: 'major_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-03-23T03:59:00.000Z',
    rewardInfo: '星琼、自选四星角色、头像',
    description: '以「银河战力党」卡牌对战为核心，使用角色卡牌与骰子进行攻防，回合推进会出现影响双方的「天气」。击败对手提升「资历等级」，随剧情推进解锁「自由联机」。限时活动结束后将收录至「常时传略」。主要奖励：自选四星角色、头像「啊！青春！」、星琼及材料。',
    featured: true,
  },
  // ---- 探索活动 ----
  {
    id: 'hsr-4.0-paradise-checkin',
    game: 'hsr',
    title: '「滴！乐园打卡必玩榜」探索活动',
    type: 'minor_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-03-23T03:59:00.000Z',
    rewardInfo: '星琼×500、信用点、漫游指南',
    description: '在活动页查看「二相乐园必玩榜」，完成指定条目（尘灵收集、抓狸猫、游玩广场小游戏、完成浮脂记事、收集卡牌等）后领取奖励。奖励包含：星琼约500、信用点、漫游指南、《绒绒号》连载纪念刊、遗失晶块等。',
    featured: true,
  },
  // ---- 签到/巡星之礼 ----
  {
    id: 'hsr-4.0-nameless-honor',
    game: 'hsr',
    title: '「巡星之礼」第二十二期（7日签到）',
    type: 'minor_event',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-03-24T03:59:00.000Z',
    rewardInfo: '星轨专票×10',
    description: '4.0版本「巡星之礼」第二十二期登录签到活动，每日登录在「旅情事记」领取当日奖励。完成7日签到累计可领星轨专票×10（分布为：1、1、2、1、1、1、3）。',
    featured: true,
  },
  // ---- 登录福利 ----
  {
    id: 'hsr-4.0-paradise-gift',
    game: 'hsr',
    title: '「乐园之礼」登录即领',
    type: 'minor_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-03-25T06:00:00.000Z',
    rewardInfo: '星轨专票×10、孤星明尘×600、自塑尘脂×3',
    description: '登录后在「旅情事记」-「乐园之礼」领取：星轨专票×10、孤星明尘×600、自塑尘脂×3。',
    featured: true,
  },
  {
    id: 'hsr-4.0-fashion-guide',
    game: 'hsr',
    title: '「银河潮流指南•冬韵特辑」登录领时装',
    type: 'minor_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-03-25T06:00:00.000Z',
    rewardInfo: '阮•梅时装「雪绽梅笺」、头像',
    description: '登录领取阮•梅时装「雪绽梅笺」，同步获得对应头像「阮•梅•赏心」。活动结束后，时装将上架「时装橱窗」，售价古老梦华×1680。',
    featured: true,
  },
  {
    id: 'hsr-4.0-welcome-gift',
    game: 'hsr',
    title: '「入园礼遇」登录领限定5星角色7选1',
    type: 'major_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-05-07T06:00:00.000Z',
    rewardInfo: '限定5星角色×1、养成材料',
    description: '登录即可领取特定5星角色×1（7选1：景元、卡芙卡、丹恒•饮月、镜流、花火、黄泉、砂金），并赠送其直升60级所需的养成材料。',
    featured: true,
  },
  {
    id: 'hsr-4.0-lucky-draw',
    game: 'hsr',
    title: '「翻翻好符运」每日翻签领奖',
    type: 'minor_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-03-25T06:00:00.000Z',
    rewardInfo: '星琼×1600、星轨专票×100（概率）、头像',
    description: '每日04:00解锁1张「符签」，共5张。每张符签翻开后可得星琼×320，并有0.01%概率额外获得星轨专票×100（活动期内最多1次）。保底星琼×1600，另含头像奖励「旺上加旺」。',
    featured: true,
  },
  // ---- 长期/常驻活动 ----
  {
    id: 'hsr-4.0-raccoon-comms',
    game: 'hsr',
    title: '「狸狸通信」永久活动',
    type: 'minor_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-12-31T23:59:00.000Z',
    rewardInfo: '4星光锥、装饰、星琼',
    description: '永久活动，主要奖励：4星光锥「菇菇嘎嘎历险记」、装饰「浣熊的谒者面具」「回报的重量」、多档奖励含星琼、材料、信用点等。',
    featured: false,
  },
  {
    id: 'hsr-4.0-return-journey',
    game: 'hsr',
    title: '「循星归程」第五期（回归活动）',
    type: 'minor_event',
    startDate: '2026-02-12T03:00:00.000Z',
    endDate: '2026-12-31T23:59:00.000Z',
    rewardInfo: '金装自选、星琼加倍、双倍奖励',
    description: '回归活动，条件：开拓等级≥10、连续未登录≥14天、距离上一次激活≥40天。4.0更新新增「金装自选」（连续未登录≥90天可领取5星满级遗器一套）、「星琼加倍」（最多额外1600星琼）、「归程权益」（双倍奖励次数）。',
    featured: false,
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
// 绝区零活动数据 (v2.6「旧梦的安可曲」当前版本)
// 版本周期：2026-02-06(周五) ~ 2026-03-20(周五)，共42天
// 上半：02-06 ~ 03-04；下半：03-04 ~ 03-20
// ============================================================
export const zzzEvents: GameEvent[] = [
  // ============================================================
  // 卡池（调频）
  // ============================================================
  {
    id: 'zzz-2.6-tune-1',
    game: 'zzz',
    title: '「2.6·旧梦的安可曲」上半独家频道',
    type: 'banner',
    startDate: '2026-02-06T03:00:00.000Z',
    endDate: '2026-03-04T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.6版本「旧梦的安可曲」上半S级代理人独家频道调频，UP代理人获取概率大幅提升。',
    featured: true,
  },
  {
    id: 'zzz-2.6-tune-2',
    game: 'zzz',
    title: '「2.6·旧梦的安可曲」下半独家频道',
    type: 'banner',
    startDate: '2026-03-04T03:00:00.000Z',
    endDate: '2026-03-20T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.6版本「旧梦的安可曲」下半S级代理人独家频道调频，3月4日起已进入下半期，新UP代理人登场。',
    featured: true,
  },
  {
    id: 'zzz-2.6-bangboo-tune',
    game: 'zzz',
    title: '「2.6版本」邦布频道调频',
    type: 'banner',
    startDate: '2026-02-06T03:00:00.000Z',
    endDate: '2026-03-20T02:59:00.000Z',
    rewardInfo: 'x160',
    description: '2.6版本S级邦布独家频道调频，全版本开放。',
    featured: false,
  },

  // ============================================================
  // 常规周期活动 (Regular/Recurring Activities)
  // ============================================================
  // ---- 新城观览礼（累计登录签到）----
  {
    id: 'zzz-2.6-city-tour-gift',
    game: 'zzz',
    title: '新城观览礼（累计登录签到）',
    type: 'minor_event',
    startDate: '2026-02-06T04:00:00.000Z',
    endDate: '2026-03-20T03:59:00.000Z',
    rewardInfo: '加密母带×10',
    description: '累计登录签到活动，持续至版本结束（42天）。玩家每日登录游戏即可领取奖励，累计登录天数越多，奖励越丰厚。累计可获得10抽（加密母带）。',
    featured: true,
  },
  // ---- 日常活跃任务 ----
  {
    id: 'zzz-daily-quests',
    game: 'zzz',
    title: '日常活跃任务（每日重置）',
    type: 'routine',
    startDate: '2026-02-06T04:00:00.000Z',
    endDate: '2026-03-20T03:59:00.000Z',
    rewardInfo: '60菲林/日',
    description: '每日凌晨4:00 (UTC+8) 重置。玩家需完成每日指定的小任务，例如登录游戏、在咖啡馆喝咖啡、经营录像店等。每日菲林和经验的重要来源。奖励：60菲林、代理人经验、丁尼。',
    featured: false,
  },
  // ---- 周常挑战 (Notorious Hunt) ----
  {
    id: 'zzz-weekly-hunt',
    game: 'zzz',
    title: '周常挑战 - 恶名狩猎（每周一重置）',
    type: 'routine',
    startDate: '2026-02-09T04:00:00.000Z',
    endDate: '2026-03-17T03:59:00.000Z',
    rewardInfo: '高级养成材料',
    description: '每周一凌晨4:00 (UTC+8) 重置。挑战强大的周本Boss，每周可领取3次奖励。获取高级养成材料的关键途径。奖励：高级养成材料、调律素材、丁尼。',
    featured: false,
  },
  // ---- 先遣赏金 (Double Drops) ----
  {
    id: 'zzz-2.6-double-drops',
    game: 'zzz',
    title: '先遣赏金 - 实战双倍掉落',
    type: 'minor_event',
    startDate: '2026-03-06T04:00:00.000Z',
    endDate: '2026-03-13T03:59:00.000Z',
    rewardInfo: '双倍养成材料',
    description: '版本后期开启，持续约7天。在指定副本（如实战训练、专业挑战）中，道具掉落数量翻倍。集中刷取养成材料、提升代理人实力的绝佳时机。奖励：双倍养成材料、丁尼。',
    featured: true,
  },
  // ---- 绳网会员补给 ----
  {
    id: 'zzz-2.6-rope-club-supply',
    game: 'zzz',
    title: '绳网会员补给',
    type: 'minor_event',
    startDate: '2026-02-06T04:00:00.000Z',
    endDate: '2026-03-20T03:59:00.000Z',
    rewardInfo: '菲林、养成材料包、背景音乐',
    description: '与版本更新同步开启，持续整个版本。玩家通过完成每日/每周活跃任务累积积分，达到一定积分后即可领取相应的补给奖励。奖励：菲林、养成材料包、背景音乐。',
    featured: false,
  },

  // ============================================================
  // 常规重置（战斗挑战）
  // ============================================================
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

  // ============================================================
  // 特殊版本活动 (Special Version Events)
  // ============================================================
  // ---- 2.6版本旗舰活动 ----
  {
    id: 'zzz-2.6-major',
    game: 'zzz',
    title: '「旧梦的安可曲」2.6版本主题旗舰活动',
    type: 'major_event',
    startDate: '2026-02-06T10:00:00.000Z',
    endDate: '2026-03-19T03:59:00.000Z',
    rewardInfo: '1200-1500菲林、限定道具',
    description: '2.6版本「旧梦的安可曲」核心旗舰活动，围绕新区域探索以及新代理人"千夏"和"艾莉亚"的登场展开。活动内容包括大型主题关卡、富有挑战性的剧情任务、以及独特的解谜玩法。奖励：菲林1200-1500、活动纪念名片、主题家具、大量代理人养成资源。',
    featured: true,
  },
  // ---- 2.5版本回顾（已结束）----
  {
    id: 'zzz-2.5-glimmer-lamp',
    game: 'zzz',
    title: '「微光引灯时」2.5版本回顾',
    type: 'major_event',
    startDate: '2026-01-02T03:00:00.000Z',
    endDate: '2026-02-05T03:59:00.000Z',
    rewardInfo: 'S级代理人"照"、简·杜限定皮肤',
    description: '2.5版本已结束。版本带来了免费赠送S级代理人"照"，以及为简·杜推出的限定时装。版本活动"空明寻剑录"提供了独特的探索玩法。核心奖励：S级代理人"照"、简·杜限定皮肤、版本限定音擎。',
    featured: false,
  },

  // ============================================================
  // 临时/限时活动 (Limited-Time Events)
  // ============================================================
  // ---- 拓金有喜好事成邦（新春活动）----
  {
    id: 'zzz-2.6-spring-gold',
    game: 'zzz',
    title: '拓金有喜好事成邦（新春特别活动）',
    type: 'minor_event',
    startDate: '2026-02-06T04:00:00.000Z',
    endDate: '2026-02-15T03:59:00.000Z',
    rewardInfo: '随机菲林、邦布徽章、节日限定头像',
    description: '新春特别活动，玩家每日登录游戏即可参与抽奖，有机会瓜分总计40亿菲林的巨额奖池。奖励：随机菲林、邦布徽章、节日限定头像。',
    featured: true,
  },
  // ---- 福至沓来 ----
  {
    id: 'zzz-2.6-fortune-arrives',
    game: 'zzz',
    title: '福至沓来（新春限时挑战）',
    type: 'minor_event',
    startDate: '2026-02-16T04:00:00.000Z',
    endDate: '2026-02-24T03:59:00.000Z',
    rewardInfo: '菲林、节日限定家具、调律素材',
    description: '围绕新春主题设计的限时挑战活动，包含一系列节日特色解谜和战斗关卡，旨在营造浓厚的节日氛围。奖励：菲林、节日限定家具、调律素材。',
    featured: true,
  },
  // ---- 引力映叙时光 ----
  {
    id: 'zzz-2.6-gravity-chronicle',
    game: 'zzz',
    title: '引力映叙时光（2.6下半场活动）',
    type: 'minor_event',
    startDate: '2026-03-04T04:00:00.000Z',
    endDate: '2026-03-23T03:59:00.000Z',
    rewardInfo: '380菲林、纪念名片、养成材料',
    description: '2.6版本下半场的活动内容，玩家需要完成特定的剧情委托，并参与拍照或探索任务。奖励：380菲林、活动纪念名片、养成材料。',
    featured: true,
  },

  // ============================================================
  // 下一版本预告
  // ============================================================
  {
    id: 'zzz-2.7-update',
    game: 'zzz',
    title: '绝区零 2.7版本更新',
    type: 'major_event',
    startDate: '2026-03-20T03:00:00.000Z',
    endDate: '2026-05-01T02:59:00.000Z',
    rewardInfo: 'x1600',
    description: '2.7版本全新内容即将上线，包含新S级代理人和全新故事，更新补偿菲林即将发放。',
    featured: true,
  },
];

// ============================================================
// 鸣潮活动数据 (v3.1)
// 版本周期：2026-02-05 ~ 2026-03-19
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
    title: '「逾此长冬」角色活动唤取 - 陆·赫斯UP',
    type: 'banner',
    startDate: '2026-02-26T10:00:00.000Z',
    endDate: '2026-03-18T11:59:00.000Z',
    rewardInfo: 'x160',
    description: '5星角色「陆·赫斯 (Luuk Herssen)」限时UP。同期4星角色：散华、灯灯、渊武。通过「初露峥嵘」试用活动可获得星声*20及养成材料。',
    featured: true,
  },
  {
    id: 'wuthering-3.2-convene-1',
    game: 'wuthering',
    title: '「3.2版本上半」特定唤取 - 西格莉卡UP',
    type: 'banner',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-09T14:59:00.000Z',
    rewardInfo: 'x160',
    description: '3.2版本上半限定5星共鸣者「西格莉卡 (Sigrika)」特定唤取即将开启，敬请期待。',
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
    id: 'wuthering-3.1-checkin',
    game: 'wuthering',
    title: '7日签到活动：乘风而行',
    type: 'minor_event',
    startDate: '2026-02-26T10:00:00.000Z',
    endDate: '2026-03-18T03:59:00.000Z',
    rewardInfo: '浮金波纹*5、唤声涡纹*5',
    description: '每日登录游戏即可领取，累计获得浮金波纹*5、唤声涡纹*5。',
    featured: true,
  },
  {
    id: 'wuthering-3.1-mail-reward',
    game: 'wuthering',
    title: '限时邮件福利：未署名的祝福',
    type: 'minor_event',
    startDate: '2026-02-17T06:00:00.000Z',
    endDate: '2026-03-19T03:59:00.000Z',
    rewardInfo: '星声*1600、限定头像、纪念道具',
    description: '版本期间通过游戏内邮件分批发放，累计可领星声*1600、专属头像「来，笑一个吧」、限定纪念道具（特制的嘻嘻果冻、陈旧的唱片）。',
    featured: true,
  },
  {
    id: 'wuthering-3.1-rogue',
    game: 'wuthering',
    title: '周期挑战：千门幻梦·暗之新生',
    type: 'minor_event',
    startDate: '2026-02-05T06:00:00.000Z',
    endDate: '2026-03-19T03:59:00.000Z',
    rewardInfo: '星声、养成资源',
    description: '肉鸽（Roguelike）玩法更新，包含全新的梦境节点。奖励：星声、特级共鸣促剂、贝币，以及可在梦境商店兑换的各类养成资源。',
    featured: false,
  },
  {
    id: 'wuthering-3.1-exploration',
    game: 'wuthering',
    title: '探索活动：雪径循迹 (Unfrozen Traces)',
    type: 'minor_event',
    startDate: '2026-02-26T10:00:00.000Z',
    endDate: '2026-03-19T03:59:00.000Z',
    rewardInfo: '星声、角色经验材料、贝币',
    description: '前往新地图「罗雅冻原」进行特定目标的探索和战斗。奖励：大量星声、角色经验材料、贝币。',
    featured: true,
  },
  // ---- 跨界联动 ----
  {
    id: 'wuthering-city-no1-collab',
    game: 'wuthering',
    title: '《鸣潮》x 城市一族 (City No.1) 联动',
    type: 'minor_event',
    startDate: '2026-03-11T06:00:00.000Z',
    endDate: '2026-05-31T23:59:00.000Z',
    rewardInfo: '虚宝序号、实体周边',
    description: '购买带有《鸣潮》图案的联动包装商品（如巧克力棒），可获得虚宝序号（包含星声及限定消耗品）及抽奖机会（有机会获得角色立牌、抱枕等实体周边）。',
    featured: true,
  },
  // ---- 版本更新 ----
  {
    id: 'wuthering-3.2-update',
    game: 'wuthering',
    title: '鸣潮 V3.2版本更新 - 西格莉卡登场',
    type: 'major_event',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-29T03:59:00.000Z',
    rewardInfo: 'x1600',
    description: 'V3.2版本全新内容上线，新角色「西格莉卡 (Sigrika)」登场，包含新剧情和全新版本活动，更新补偿星声即将发放。',
    featured: true,
  },
];

// ============================================================
// PUBG Mobile 活动数据
// 赛季更新规律：
//   - 赛季重置时刻：通常在北京时间 10:00 (UTC+8)，即 UTC 02:00
//   - 全球统一重置，全服玩家同时看到段位掉落并开启新赛季
// 大版本更新规律：
//   - 分批推送：通常从北京时间 11:00 左右开始全球分批滚动推送
//   - 亚服/东南亚：最早收到推送（活跃度最高）
//   - 欧服/美服：可能比起始时间晚 2-6 小时
// ============================================================
export const pubgEvents: GameEvent[] = [
  // ---- Royale Pass / 赛季通行证 ----
  {
    id: 'pubg-a18-rp',
    game: 'pubg',
    title: 'A18 Royale Pass 通行证',
    type: 'major_event',
    startDate: '2026-03-15T02:00:00.000Z',
    endDate: '2026-06-14T01:59:00.000Z',
    rewardInfo: '限定皮肤、载具涂装',
    description: 'A18赛季Royale Pass开启，北京时间3月15日10:00全球统一重置。升级解锁全套限定服装、载具皮肤和武器涂装。',
    featured: true,
  },
  {
    id: 'pubg-a19-preview',
    game: 'pubg',
    title: 'A19 新赛季即将开启',
    type: 'major_event',
    startDate: '2026-06-15T02:00:00.000Z',
    endDate: '2026-09-14T01:59:00.000Z',
    rewardInfo: '新赛季奖励',
    description: 'A19赛季即将开启，预计北京时间6月15日10:00全球统一重置，全新Royale Pass主题登场。',
    featured: true,
  },
  // ---- 大版本更新 ----
  {
    id: 'pubg-3.7-update',
    game: 'pubg',
    title: '3.7版本大更新 - 全新主题玩法',
    type: 'major_event',
    startDate: '2026-03-15T03:00:00.000Z',
    endDate: '2026-05-14T23:59:00.000Z',
    rewardInfo: '版本更新奖励',
    description: '3.7大版本更新，预计北京时间3月15日11:00起分批推送。亚服/东南亚最早收到更新，欧服/美服可能晚2-6小时。包含全新主题玩法、地图更新和系统优化。',
    featured: true,
  },
  // ---- 大型活动 ----
  {
    id: 'pubg-a18-launch-event',
    game: 'pubg',
    title: 'A18赛季开启庆典活动',
    type: 'major_event',
    startDate: '2026-03-15T02:00:00.000Z',
    endDate: '2026-03-22T23:59:00.000Z',
    rewardInfo: '限定外观、UC返利',
    description: '庆祝A18赛季开启，参与限时活动获取限定外观道具和UC返利奖励。',
    featured: true,
  },
  {
    id: 'pubg-3.7-collab',
    game: 'pubg',
    title: '3.7版本联动活动',
    type: 'major_event',
    startDate: '2026-03-20T00:00:00.000Z',
    endDate: '2026-04-10T23:59:00.000Z',
    rewardInfo: '联动限定皮肤',
    description: '3.7版本期间特别联动活动，限时获取联动主题限定服装和道具。',
    featured: true,
  },
  // ---- 小活动 ----
  {
    id: 'pubg-a18-weekly-spin',
    game: 'pubg',
    title: 'A18赛季轮盘更新',
    type: 'minor_event',
    startDate: '2026-03-15T02:00:00.000Z',
    endDate: '2026-03-29T23:59:00.000Z',
    rewardInfo: '限定皮肤',
    description: 'A18赛季专属轮盘上线，限时获取赛季主题稀有外观道具。',
    featured: false,
  },
  {
    id: 'pubg-weekend-rush',
    game: 'pubg',
    title: '周末冲分挑战',
    type: 'minor_event',
    startDate: '2026-03-21T00:00:00.000Z',
    endDate: '2026-03-23T23:59:00.000Z',
    rewardInfo: '双倍经验卡、BP',
    description: '周末限时冲分活动，完成任务获取双倍经验卡和BP奖励。',
    featured: false,
  },
  {
    id: 'pubg-login-bonus',
    game: 'pubg',
    title: '每日登录福利',
    type: 'minor_event',
    startDate: '2026-03-15T02:00:00.000Z',
    endDate: '2026-04-15T23:59:00.000Z',
    rewardInfo: '补给箱、银币',
    description: 'A18赛季期间每日登录领取补给箱和银币奖励，连续登录有额外惊喜。',
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
