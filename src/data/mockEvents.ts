import { GameEvent } from '@/types';

// ============================================================
// 活动数据基准时间：2026-04-27
// 原神：v6.5「寻芳の旅人」(2026-04-08 ~ 2026-05-20)
//   上半 2026-04-08 ~ 2026-04-29，下半 2026-04-29 ~ 2026-05-20
// HSR：v4.1「无何有之乡」(2026-03-26 ~ 2026-05-07)
//   上半 2026-03-26 ~ 2026-04-16，下半 2026-04-16 ~ 2026-05-07
// ZZZ：v2.7「砥砺与回响」(2026-03-20 ~ 2026-05-01)
//   上半 2026-03-20 ~ 2026-04-03，下半 2026-04-03 ~ 2026-05-01
// 鸣潮：v3.2 (2026-03-19 ~ 2026-04-29)，v3.3 约 2026-04-29 起
// PUBG：A18 RP (2026-03-15 ~ 2026-05-17)，4.3版本进行中
//   大版本更新：2026-01-08, 2026-03-12, 2026-05-13, 2026-07-10, 2026-09-10, 2026-11-11
// ============================================================

// ============================================================
// 原神活动数据 (v6.5「寻芳の旅人」当前版本)
// 版本周期：2026-04-08(周三) ~ 2026-05-20(周三)，共42天
// 上半：04-08 ~ 04-29；下半：04-29 ~ 05-20
// ============================================================
export const genshinEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'genshin-6.5-banner-1',
    game: 'genshin',
    title: '「6.5·寻芳の旅人」上半限定祈愿',
    type: 'banner',
    startDate: '2026-04-08T03:00:00.000Z',
    endDate: '2026-04-29T02:59:00.000Z',
    description: '6.5版本「寻芳の旅人」上半限定角色祈愿，全新角色登场',
    featured: true,
    characters: [
      { name: '卡齐娜', rarity: 5, isNew: true },
      { name: '艾梅利埃', rarity: 5 },
      { name: '班尼特', rarity: 4 },
      { name: '菲谢尔', rarity: 4 },
      { name: '凝光', rarity: 4 },
    ],
  },
  {
    id: 'genshin-6.5-banner-weapon',
    game: 'genshin',
    title: '「6.5·寻芳の旅人」上半神铸赋形',
    type: 'banner',
    startDate: '2026-04-08T03:00:00.000Z',
    endDate: '2026-04-29T02:59:00.000Z',
    description: '6.5版本上半5星武器祈愿，与角色卡池同期开放',
    featured: false,
  },
  {
    id: 'genshin-6.5-banner-2',
    game: 'genshin',
    title: '「6.5·寻芳の旅人」下半限定祈愿',
    type: 'banner',
    startDate: '2026-04-29T03:00:00.000Z',
    endDate: '2026-05-20T02:59:00.000Z',
    description: '6.5版本「寻芳の旅人」下半限定角色祈愿',
    featured: true,
    characters: [
      { name: '那维莱特', rarity: 5 },
      { name: '芙宁娜', rarity: 5 },
    ],
  },
  // ---- 常规重置 ----
  {
    id: 'genshin-6.5-abyss-1',
    game: 'genshin',
    title: '深境螺旋（6.5上半期）刷新',
    type: 'routine',
    startDate: '2026-04-16T04:00:00.000Z',
    endDate: '2026-05-01T03:59:00.000Z',
    rewardInfo: 'x800',
    description: '深境螺旋本半月刷新，第12层满星三次通关可获得最多800原石奖励。',
    featured: false,
  },
  {
    id: 'genshin-6.5-abyss-2',
    game: 'genshin',
    title: '深境螺旋（6.5下半期）刷新',
    type: 'routine',
    startDate: '2026-05-01T04:00:00.000Z',
    endDate: '2026-05-16T03:59:00.000Z',
    rewardInfo: 'x800',
    description: '深境螺旋下半月刷新，敌人阵容更换，可再次获得800原石满星奖励。',
    featured: false,
  },
  {
    id: 'genshin-6.5-theater',
    game: 'genshin',
    title: '幻想真境剧诗（6.5期）刷新',
    type: 'routine',
    startDate: '2026-04-16T04:00:00.000Z',
    endDate: '2026-05-16T03:59:00.000Z',
    rewardInfo: 'x420',
    description: '幻想真境剧诗6.5期刷新，本期主题元素更换，挑战满星可获得420原石。',
    featured: false,
  },
  {
    id: 'genshin-monthly-checkin-04',
    game: 'genshin',
    title: '米游社4月签到福利',
    type: 'routine',
    startDate: '2026-04-01T00:00:00.000Z',
    endDate: '2026-04-30T23:59:00.000Z',
    rewardInfo: 'x60',
    description: '4月在米游社/HoYoLAB签到，累计可获得60原石及材料奖励。',
    featured: false,
  },
  // ---- 版本大活动（旗舰活动）----
  {
    id: 'genshin-6.5-major',
    game: 'genshin',
    title: '「寻芳の旅人」版本主题大活动',
    type: 'major_event',
    startDate: '2026-04-10T10:00:00.000Z',
    endDate: '2026-05-19T03:59:00.000Z',
    rewardInfo: 'x1120',
    description: '6.5版本「寻芳の旅人」核心旗舰活动，包含大剧情和多个小游戏，完成全部任务可累计获得1120+原石及满精4星武器/角色奖励。',
    featured: true,
  },
  // ---- 小活动 ----
  {
    id: 'genshin-6.5-minor-1',
    game: 'genshin',
    title: '「寻芳の旅人」限时探索活动',
    type: 'minor_event',
    startDate: '2026-04-08T10:00:00.000Z',
    endDate: '2026-05-19T03:59:00.000Z',
    rewardInfo: 'x420',
    description: '6.5版本限时探索小游戏，试用限定角色参与挑战，可获得420原石及材料奖励。',
    featured: false,
  },
  {
    id: 'genshin-6.5-checkin',
    game: 'genshin',
    title: '「寻芳の旅人」版本登录签到活动',
    type: 'minor_event',
    startDate: '2026-04-08T10:00:00.000Z',
    endDate: '2026-05-19T03:59:00.000Z',
    rewardInfo: 'x300',
    description: '参与官方网页签到活动，分多日累计领取原石及道具奖励，版本期间持续开放。',
    featured: false,
  },
  // ---- 下一版本预告 ----
  {
    id: 'genshin-6.6-update',
    game: 'genshin',
    title: '原神 6.6版本更新',
    type: 'major_event',
    startDate: '2026-05-20T03:00:00.000Z',
    endDate: '2026-07-01T02:59:00.000Z',
    rewardInfo: 'x1600',
    description: '6.6版本全新内容上线，包含新角色、新剧情和全新版本活动，更新补偿原石即将发放。',
    featured: true,
  },
];

// ============================================================
// 崩坏：星穹铁道活动数据 (v4.1「无何有之乡」当前版本)
// 版本周期：2026-03-26(周四) ~ 2026-05-07(周四)，共42天
// 上半：03-26 ~ 04-16；下半：04-16 ~ 05-07
// 常规重置（双周）：忘却之庭/末日幻影/虚构叙事错开轮换
// ============================================================
export const hsrEvents: GameEvent[] = [
  // ---- 卡池 ----
  {
    id: 'hsr-4.1-warp-1',
    game: 'hsr',
    title: '「4.1·无何有之乡」上半限定角色跃迁',
    type: 'banner',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-04-16T02:59:00.000Z',
    description: '4.1版本「无何有之乡」上半限定角色跃迁',
    featured: true,
    characters: [
      { name: '柯剑', rarity: 5, isNew: true },
      { name: '银狼', rarity: 5 },
      { name: '托帕&账账', rarity: 5 },
    ],
  },
  {
    id: 'hsr-4.1-warp-lc-1',
    game: 'hsr',
    title: '「4.1·无何有之乡」上半限定光锥跃迁',
    type: 'banner',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-04-16T02:59:00.000Z',
    description: '4.1版本上半限定5星光锥跃迁，与角色卡池同期开放',
    featured: false,
  },
  {
    id: 'hsr-4.1-warp-2',
    game: 'hsr',
    title: '「4.1·无何有之乡」下半限定角色跃迁',
    type: 'banner',
    startDate: '2026-04-16T03:00:00.000Z',
    endDate: '2026-05-07T02:59:00.000Z',
    description: '4.1版本「无何有之乡」下半限定角色跃迁',
    featured: true,
    characters: [
      { name: '莱娜', rarity: 5, isNew: true },
      { name: '黄泉', rarity: 5 },
      { name: '克拉拉', rarity: 5 },
      { name: '佩拉', rarity: 4 },
      { name: '娜塔莎', rarity: 4 },
      { name: '希儿', rarity: 4 },
    ],
  },
  {
    id: 'hsr-4.1-warp-lc-2',
    game: 'hsr',
    title: '「4.1·无何有之乡」下半限定光锥跃迁',
    type: 'banner',
    startDate: '2026-04-16T03:00:00.000Z',
    endDate: '2026-05-07T02:59:00.000Z',
    description: '4.1版本下半限定5星光锥跃迁，与下半角色卡池同期开放',
    featured: false,
  },
  // ---- 常规重置（双周轮换）----
  {
    id: 'hsr-4.1-forgotten-hall',
    game: 'hsr',
    title: '忘却之庭·混沌回忆（4.1下半期）刷新',
    type: 'routine',
    startDate: '2026-04-21T04:00:00.000Z',
    endDate: '2026-05-05T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '忘却之庭·混沌回忆本期刷新，12层全满星可获得最多720星琼，双周重置。',
    featured: false,
  },
  {
    id: 'hsr-4.1-apocalyptic',
    game: 'hsr',
    title: '末日幻影（4.1下半期）刷新',
    type: 'routine',
    startDate: '2026-04-07T04:00:00.000Z',
    endDate: '2026-04-21T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '末日幻影本期刷新，挑战强力BOSS组合，满分可获得720星琼，双周重置。',
    featured: false,
  },
  {
    id: 'hsr-4.1-pure-fiction',
    game: 'hsr',
    title: '虚构叙事（4.1下半期）刷新',
    type: 'routine',
    startDate: '2026-04-21T04:00:00.000Z',
    endDate: '2026-05-05T03:59:00.000Z',
    rewardInfo: 'x720',
    description: '虚构叙事本期刷新，评分4万分满分可获得最多720星琼，双周重置。',
    featured: false,
  },
  {
    id: 'hsr-4.1-divergent-universe',
    game: 'hsr',
    title: '差分宇宙（4.1赛季）',
    type: 'routine',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-05-07T02:59:00.000Z',
    rewardInfo: 'x800',
    description: '差分宇宙4.1赛季开放，每周完成指定积分任务可获得星琼及专属通货，累计奖励丰厚。',
    featured: false,
  },
  // ---- 版本大活动（旗舰活动）----
  {
    id: 'hsr-4.1-major',
    game: 'hsr',
    title: '「无何有之乡」版本大活动',
    type: 'major_event',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-05-05T03:59:00.000Z',
    rewardInfo: '星琼×1200、自选四星角色、头像',
    description: '4.1版本「无何有之乡」旗舰限时活动，围绕新区域探索展开。完成主要任务链可获得星琼×1200、自选四星角色、专属头像及大量材料。',
    featured: true,
  },
  // ---- 签到/巡星之礼 ----
  {
    id: 'hsr-4.1-nameless-honor',
    game: 'hsr',
    title: '「巡星之礼」第二十三期（7日签到）',
    type: 'minor_event',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-05-05T03:59:00.000Z',
    rewardInfo: '星轨专票×10',
    description: '4.1版本「巡星之礼」第二十三期登录签到活动，每日登录在「旅情事记」领取当日奖励。完成7日签到累计可领星轨专票×10。',
    featured: true,
  },
  // ---- 登录福利 ----
  {
    id: 'hsr-4.1-login-gift',
    game: 'hsr',
    title: '「无何有之礼」登录即领',
    type: 'minor_event',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-05-07T06:00:00.000Z',
    rewardInfo: '星轨专票×10、孤星明尘×600',
    description: '登录后在「旅情事记」领取：星轨专票×10、孤星明尘×600等丰厚奖励。',
    featured: true,
  },
  {
    id: 'hsr-4.0-welcome-gift',
    game: 'hsr',
    title: '「入园礼遇」登录领限定5星角色7选1（持续中）',
    type: 'major_event',
    startDate: '2026-02-13T03:00:00.000Z',
    endDate: '2026-05-07T06:00:00.000Z',
    rewardInfo: '限定5星角色×1、养成材料',
    description: '登录即可领取特定5星角色×1（7选1：景元、卡芙卡、丹恒•饮月、镜流、花火、黄泉、砂金），并赠送其直升60级所需的养成材料。活动即将结束，请尽快领取。',
    featured: true,
  },
  // ---- 长期/常驻活动 ----
  {
    id: 'hsr-4.1-return-journey',
    game: 'hsr',
    title: '「循星归程」第六期（回归活动）',
    type: 'minor_event',
    startDate: '2026-03-26T03:00:00.000Z',
    endDate: '2026-12-31T23:59:00.000Z',
    rewardInfo: '金装自选、星琼加倍、双倍奖励',
    description: '回归活动，条件：开拓等级≥10、连续未登录≥14天、距离上一次激活≥40天。含「金装自选」（连续未登录≥90天可领取5星满级遗器一套）、「星琼加倍」（最多额外1600星琼）、「归程权益」（双倍奖励次数）。',
    featured: false,
  },
  // ---- 下一版本预告 ----
  {
    id: 'hsr-4.2-update',
    game: 'hsr',
    title: '崩坏：星穹铁道 4.2版本更新',
    type: 'major_event',
    startDate: '2026-05-07T03:00:00.000Z',
    endDate: '2026-06-18T02:59:00.000Z',
    rewardInfo: 'x1600',
    description: '4.2版本全新内容即将上线，包含新角色、新剧情，更新补偿星琼即将发放。',
    featured: true,
  },
];

// ============================================================
// 绝区零活动数据 (v2.7「砥砺与回响」当前版本)
// 版本周期：2026-03-20(周五) ~ 2026-05-01(周五)，共42天
// 上半：03-20 ~ 04-03；下半：04-03 ~ 05-01
// ============================================================
export const zzzEvents: GameEvent[] = [
  // ============================================================
  // 卡池（调频）
  // ============================================================
  {
    id: 'zzz-2.7-tune-1',
    game: 'zzz',
    title: '「2.7·砥砺与回响」上半独家频道',
    type: 'banner',
    startDate: '2026-03-20T03:00:00.000Z',
    endDate: '2026-04-03T02:59:00.000Z',
    description: '2.7版本「砥砺与回响」上半S级代理人独家频道调频',
    featured: true,
    characters: [
      { name: '玲珑', rarity: 5, isNew: true },
      { name: '朱鸢', rarity: 5 },
      { name: '扎木', rarity: 4 },
      { name: '本', rarity: 4 },
    ],
  },
  {
    id: 'zzz-2.7-tune-2',
    game: 'zzz',
    title: '「2.7·砥砺与回响」下半独家频道',
    type: 'banner',
    startDate: '2026-04-03T03:00:00.000Z',
    endDate: '2026-05-01T02:59:00.000Z',
    description: '2.7版本「砥砺与回响」下半S级代理人独家频道调频',
    featured: true,
    characters: [
      { name: '艾莲乔', rarity: 5 },
      { name: '莱特', rarity: 5, isNew: true },
      { name: '格莉丝', rarity: 4 },
      { name: '妮可', rarity: 4 },
    ],
  },
  {
    id: 'zzz-2.7-bangboo-tune',
    game: 'zzz',
    title: '「2.7版本」邦布频道调频',
    type: 'banner',
    startDate: '2026-03-20T03:00:00.000Z',
    endDate: '2026-05-01T02:59:00.000Z',
    description: '2.7版本S级邦布独家频道调频，全版本开放',
    featured: false,
  },

  // ============================================================
  // 常规周期活动
  // ============================================================
  {
    id: 'zzz-2.7-city-tour-gift',
    game: 'zzz',
    title: '新城观览礼（累计登录签到）',
    type: 'minor_event',
    startDate: '2026-03-20T04:00:00.000Z',
    endDate: '2026-05-01T03:59:00.000Z',
    rewardInfo: '加密母带×10',
    description: '2.7版本累计登录签到活动，每日登录游戏即可领取奖励，累计可获得10抽（加密母带）。',
    featured: true,
  },
  {
    id: 'zzz-2.7-daily-quests',
    game: 'zzz',
    title: '日常活跃任务（每日重置）',
    type: 'routine',
    startDate: '2026-03-20T04:00:00.000Z',
    endDate: '2026-05-01T03:59:00.000Z',
    rewardInfo: '60菲林/日',
    description: '每日凌晨4:00 (UTC+8) 重置，完成登录、经营录像店等日常任务，每日菲林和经验的重要来源。奖励：60菲林、代理人经验、丁尼。',
    featured: false,
  },
  {
    id: 'zzz-2.7-weekly-hunt',
    game: 'zzz',
    title: '周常挑战 - 恶名狩猎（每周一重置）',
    type: 'routine',
    startDate: '2026-03-23T04:00:00.000Z',
    endDate: '2026-04-27T03:59:00.000Z',
    rewardInfo: '高级养成材料',
    description: '每周一凌晨4:00重置，挑战强大的周本Boss，每周可领取3次奖励。',
    featured: false,
  },

  // ============================================================
  // 常规重置（战斗挑战）
  // ============================================================
  {
    id: 'zzz-2.7-shiyu-defense',
    game: 'zzz',
    title: '式舆防卫战（2.7下半期）刷新',
    type: 'routine',
    startDate: '2026-04-19T04:00:00.000Z',
    endDate: '2026-05-03T03:59:00.000Z',
    rewardInfo: 'x600',
    description: '式舆防卫战本期刷新，双周重置，满星通关可获得最多600菲林奖励。',
    featured: false,
  },
  {
    id: 'zzz-2.7-deadly-assault',
    game: 'zzz',
    title: '危局强袭战（2.7下半期）刷新',
    type: 'routine',
    startDate: '2026-04-26T04:00:00.000Z',
    endDate: '2026-05-10T03:59:00.000Z',
    rewardInfo: 'x360',
    description: '危局强袭战本期刷新，双周重置，挑战强力BOSS获取菲林及进阶材料。',
    featured: false,
  },
  {
    id: 'zzz-2.7-hollow-zero',
    game: 'zzz',
    title: '零号空洞（本周）刷新',
    type: 'routine',
    startDate: '2026-04-21T04:00:00.000Z',
    endDate: '2026-04-28T03:59:00.000Z',
    rewardInfo: 'x300',
    description: '零号空洞每周刷新，完成当期主题任务获取菲林及专属奖励。',
    featured: false,
  },

  // ============================================================
  // 特殊版本活动
  // ============================================================
  {
    id: 'zzz-2.7-major',
    game: 'zzz',
    title: '「砥砺与回响」2.7版本主题旗舰活动',
    type: 'major_event',
    startDate: '2026-03-20T10:00:00.000Z',
    endDate: '2026-04-30T03:59:00.000Z',
    rewardInfo: '1200-1500菲林、限定道具',
    description: '2.7版本「砥砺与回响」核心旗舰活动，围绕全新区域探索和新代理人登场展开，内容包含大型主题关卡、剧情任务和解谜玩法。奖励：菲林1200-1500、活动纪念名片、主题家具、大量代理人养成资源。',
    featured: true,
  },
  {
    id: 'zzz-2.7-double-drops',
    game: 'zzz',
    title: '先遣赏金 - 实战双倍掉落',
    type: 'minor_event',
    startDate: '2026-04-20T04:00:00.000Z',
    endDate: '2026-04-27T03:59:00.000Z',
    rewardInfo: '双倍养成材料',
    description: '版本后期开启，持续约7天。在指定副本中，道具掉落数量翻倍，集中刷取养成材料的绝佳时机。',
    featured: true,
  },

  // ============================================================
  // 下一版本预告
  // ============================================================
  {
    id: 'zzz-2.8-update',
    game: 'zzz',
    title: '绝区零 2.8版本更新',
    type: 'major_event',
    startDate: '2026-05-01T03:00:00.000Z',
    endDate: '2026-06-12T02:59:00.000Z',
    rewardInfo: 'x1600',
    description: '2.8版本全新内容即将上线，包含新S级代理人和全新故事，更新补偿菲林即将发放。',
    featured: true,
  },
];

// ============================================================
// 鸣潮活动数据 (v3.2「落雪之痕」当前版本)
// 版本周期：2026-03-19(周四) ~ 2026-04-29(周三)，共41天
// 上半：03-19 ~ 04-09；下半：04-09 ~ 04-29
// v3.3 预计 2026-04-29 起，周期约42天至 2026-06-10
// ============================================================
export const wutheringEvents: GameEvent[] = [
  // ============================================================
  // 卡池（特定唤取）
  // ============================================================
  {
    id: 'wuthering-3.2-convene-1',
    game: 'wuthering',
    title: '「3.2版本上半」西格莉卡特定唤取',
    type: 'banner',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-09T14:59:00.000Z',
    description: '3.2版本上半限定5星共鸣者「西格莉卡 (Sigrika)」特定唤取',
    featured: true,
    characters: [
      { name: '西格莉卡', rarity: 5, isNew: true },
      { name: '散华', rarity: 4 },
      { name: '灯灯', rarity: 4 },
    ],
  },
  {
    id: 'wuthering-3.2-convene-2',
    game: 'wuthering',
    title: '「3.2版本下半」限定角色特定唤取',
    type: 'banner',
    startDate: '2026-04-09T06:00:00.000Z',
    endDate: '2026-04-29T14:59:00.000Z',
    description: '3.2版本下半限定5星共鸣者特定唤取，新角色登场',
    featured: true,
    characters: [
      { name: '维里奈', rarity: 5, isNew: false },
      { name: '渊武', rarity: 4 },
      { name: '莫特菲', rarity: 4 },
    ],
  },
  {
    id: 'wuthering-3.2-weapon-convene',
    game: 'wuthering',
    title: '「3.2版本」限定武器特定唤取',
    type: 'banner',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-29T14:59:00.000Z',
    description: '3.2版本限定5星武器特定唤取，全版本开放',
    featured: false,
  },

  // ============================================================
  // 常规重置
  // ============================================================
  {
    id: 'wuthering-3.2-adversity-tower-1',
    game: 'wuthering',
    title: '逆境深塔（3.2上半期）刷新',
    type: 'routine',
    startDate: '2026-03-19T04:00:00.000Z',
    endDate: '2026-04-02T03:59:00.000Z',
    rewardInfo: 'x960',
    description: '逆境深塔本期刷新，通关全部楼层可获得最多960星声奖励，双周重置。',
    featured: false,
  },
  {
    id: 'wuthering-3.2-adversity-tower-2',
    game: 'wuthering',
    title: '逆境深塔（3.2下半期）刷新',
    type: 'routine',
    startDate: '2026-04-16T04:00:00.000Z',
    endDate: '2026-04-29T03:59:00.000Z',
    rewardInfo: 'x960',
    description: '逆境深塔本期刷新，通关全部楼层可获得最多960星声奖励，双周重置。',
    featured: false,
  },
  {
    id: 'wuthering-3.2-weekly-gate',
    game: 'wuthering',
    title: '千道门扉（每周重置）',
    type: 'routine',
    startDate: '2026-04-21T04:00:00.000Z',
    endDate: '2026-04-27T03:59:00.000Z',
    rewardInfo: 'x160',
    description: '千道门扉每周刷新，完成全部挑战可获得160星声奖励。',
    featured: false,
  },

  // ============================================================
  // 版本大活动（旗舰活动）
  // ============================================================
  {
    id: 'wuthering-3.2-major',
    game: 'wuthering',
    title: '「落雪之痕」3.2版本主题旗舰活动',
    type: 'major_event',
    startDate: '2026-03-21T10:00:00.000Z',
    endDate: '2026-04-28T03:59:00.000Z',
    rewardInfo: '星声x1600+、限定道具',
    description: '3.2版本「落雪之痕」核心旗舰活动，围绕西格莉卡的故事展开，包含剧情探索、战斗挑战及解谜玩法。完成全部任务链可累计获得1600+星声、限定纪念道具及大量角色养成材料。',
    featured: true,
  },

  // ============================================================
  // 小活动 / 签到
  // ============================================================
  {
    id: 'wuthering-3.2-login-gift',
    game: 'wuthering',
    title: '「落雪之痕」登录礼遇（7日签到）',
    type: 'minor_event',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-28T03:59:00.000Z',
    rewardInfo: '浮金波纹x5、精锻专材x5',
    description: '3.2版本登录签到活动，每日登录领取奖励，累计7日可获浮金波纹x5及精锻专属材料x5。',
    featured: true,
  },
  {
    id: 'wuthering-3.2-mail-reward',
    game: 'wuthering',
    title: '「落雪之痕」版本补偿邮件',
    type: 'minor_event',
    startDate: '2026-03-19T06:00:00.000Z',
    endDate: '2026-04-29T03:59:00.000Z',
    rewardInfo: '星声x1600',
    description: '3.2版本更新补偿，通过游戏内邮件分批发放，累计可领星声x1600及限定专属道具。',
    featured: true,
  },
  {
    id: 'wuthering-3.2-exploration',
    game: 'wuthering',
    title: '「落雪之痕」限时探索活动',
    type: 'minor_event',
    startDate: '2026-03-21T10:00:00.000Z',
    endDate: '2026-04-28T03:59:00.000Z',
    rewardInfo: '星声、角色经验材料、贝币',
    description: '前往3.2版本新区域探索，完成特定目标获得大量星声、角色经验材料和贝币奖励。',
    featured: true,
  },

  // ============================================================
  // 跨界联动（跨版本持续）
  // ============================================================
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

  // ============================================================
  // 下一版本预告
  // ============================================================
  {
    id: 'wuthering-3.3-update',
    game: 'wuthering',
    title: '鸣潮 V3.3版本更新',
    type: 'major_event',
    startDate: '2026-04-29T06:00:00.000Z',
    endDate: '2026-06-10T03:59:00.000Z',
    rewardInfo: 'x1600',
    description: 'V3.3版本全新内容上线，包含新限定角色、全新剧情和版本活动，更新补偿星声即将发放。',
    featured: true,
  },
];

// ============================================================
// PUBG Mobile 活动数据（2026年）
// 活动规律（基于历史数据归纳）：
//   1. 充值返利活动：按 S A A S A A S A A S 规律循环（3月起）
//      - S级返利：返利比例最高80%，包含随机1200-6000UC高额返利
//      - A级返利：返利比例最高50%
//      - 一般在月初6-10号之间上线，持续约7-10天
//   2. 月中IP联动：一般在15号之前上线，包含Prize Path和幸运转盘
//   3. 月末GILT金装：20-27号之间，仅保留20-27号的活动卡片
//   4. 通行证更新：约2个月一个周期，月中更新
//      - A17: 2026-01-11 ~ 2026-03-15
//      - A18: 2026-03-15 ~ 2026-05-17
//      - A19: 2026-05-17 ~ 2026-07-14
//      - A20: 2026-07-14 ~ 2026-09-15
//      - A21: 2026-09-15 ~ 2026-11-16
//      - A22: 2026-11-16 ~ 2027-01-11
//   5. 版本更新：约每2个月一次
//      - 4.2: 2026-01-08, 4.3: 2026-03-12, 4.4: 2026-05-13
//      - 4.5: 2026-07-10, 4.6: 2026-09-10, 4.7: 2026-11-11
//   6. 版本更新+2天：联动活动（预估）
// 赛季重置时刻：通常在北京时间 10:00 (UTC+8)，即 UTC 02:00
// ============================================================
export const pubgEvents: GameEvent[] = [
  // ============================================================
  // 2026年1月活动
  // ============================================================
  // ---- A级充值返利（1月） ----
  {
    id: 'pubg-2026-01-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-01-06T02:00:00.000Z',
    endDate: '2026-01-15T01:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: 'A级充值返利活动，累计充值达到指定档位可获得丰厚返利，最高返50%UC。包含改装零件碎片礼包、神话印记、枪械升级改装零件等奖励。',
    featured: true,
  },
  // ---- 月中IP联动（1月） ----
  {
    id: 'pubg-2026-01-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-01-10T02:00:00.000Z',
    endDate: '2026-02-05T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '1月IP联动活动上线，包含Prize Path奖励路线和幸运转盘抽奖，限时获取联动主题皮肤礼包、载具涂装和动作表情。',
    featured: true,
  },
  // ---- A17 Royale Pass（1月-3月） ----
  {
    id: 'pubg-a17-rp',
    game: 'pubg',
    title: 'A17 Royale Pass 通行证',
    type: 'major_event',
    startDate: '2026-01-11T02:00:00.000Z',
    endDate: '2026-03-15T01:59:00.000Z',
    rewardInfo: '限定皮肤、载具涂装、升级材料',
    description: 'A17赛季Royale Pass开启，北京时间1月11日10:00全球统一重置。升级解锁全套限定服装、载具皮肤、武器涂装和大量升级材料。',
    featured: true,
  },
  // ---- 4.2版本大更新 ----
  {
    id: 'pubg-4.2-update',
    game: 'pubg',
    title: '4.2版本大更新 - 全新主题玩法',
    type: 'major_event',
    startDate: '2026-01-08T03:00:00.000Z',
    endDate: '2026-03-11T23:59:00.000Z',
    rewardInfo: '版本更新奖励',
    description: '4.2大版本更新，北京时间1月8日11:00起分批推送。包含全新主题玩法、地图更新和系统优化。',
    featured: true,
  },
  // ---- 4.2版本联动（版本+2天） ----
  {
    id: 'pubg-4.2-collab',
    game: 'pubg',
    title: '4.2版本联动活动（预估）',
    type: 'major_event',
    startDate: '2026-01-10T02:00:00.000Z',
    endDate: '2026-02-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤',
    description: '4.2版本更新后联动活动，限时获取联动主题限定服装和道具。',
    featured: true,
  },
  // ---- GILT金装（1月20-27日） ----
  {
    id: 'pubg-2026-01-gilt',
    game: 'pubg',
    title: 'GILT金装活动（1月）',
    type: 'major_event',
    startDate: '2026-01-20T02:00:00.000Z',
    endDate: '2026-01-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '1月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年2月活动
  // ============================================================
  // ---- A级充值返利（2月） ----
  {
    id: 'pubg-2026-02-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-02-06T02:00:00.000Z',
    endDate: '2026-02-15T01:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: '2月A级充值返利活动，累计充值达到指定档位可获得丰厚返利。',
    featured: true,
  },
  // ---- 月中IP联动（2月） ----
  {
    id: 'pubg-2026-02-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-02-10T02:00:00.000Z',
    endDate: '2026-03-08T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '2月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- GILT金装（2月20-27日） ----
  {
    id: 'pubg-2026-02-gilt',
    game: 'pubg',
    title: 'GILT金装活动（2月）',
    type: 'major_event',
    startDate: '2026-02-20T02:00:00.000Z',
    endDate: '2026-02-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '2月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年3月活动（当前月份）- S级
  // ============================================================
  // ---- S级充值返利（3月） ----
  {
    id: 'pubg-2026-03-recharge-s',
    game: 'pubg',
    title: '充值返利活动（S级）',
    type: 'major_event',
    startDate: '2026-03-06T02:00:00.000Z',
    endDate: '2026-03-31T15:59:00.000Z',
    rewardInfo: '最高返80%UC',
    description: '3月S级充值返利活动，返利比例更高，累计充值达到指定档位可获得丰厚返利，最高返80%UC。包含随机1200-6000UC高额返利、神话印记*2、枪械升级改装零件*2等顶级奖励。',
    featured: true,
  },
  // ---- 月中IP联动（3月） ----
  {
    id: 'pubg-2026-03-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-03-10T02:00:00.000Z',
    endDate: '2026-04-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '3月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖，限时获取联动主题皮肤礼包。',
    featured: true,
  },
  // ---- A18 Royale Pass（3月-5月） ----
  {
    id: 'pubg-a18-rp',
    game: 'pubg',
    title: 'A18 Royale Pass 通行证',
    type: 'major_event',
    startDate: '2026-03-15T02:00:00.000Z',
    endDate: '2026-05-17T01:59:00.000Z',
    rewardInfo: '限定皮肤、载具涂装、升级材料',
    description: 'A18赛季Royale Pass开启，北京时间3月15日10:00全球统一重置。升级解锁全套限定服装、载具皮肤、武器涂装和大量升级材料。',
    featured: true,
  },
  // ---- 4.3版本大更新 ----
  {
    id: 'pubg-4.3-update',
    game: 'pubg',
    title: '4.3版本大更新 - 全新主题玩法',
    type: 'major_event',
    startDate: '2026-03-12T03:00:00.000Z',
    endDate: '2026-05-12T23:59:00.000Z',
    rewardInfo: '版本更新奖励',
    description: '4.3大版本更新，北京时间3月12日11:00起分批推送。包含全新主题玩法、地图更新和系统优化。',
    featured: true,
  },
  // ---- 4.3版本联动（版本+2天） ----
  {
    id: 'pubg-4.3-collab',
    game: 'pubg',
    title: '4.3版本联动活动（预估）',
    type: 'major_event',
    startDate: '2026-03-14T02:00:00.000Z',
    endDate: '2026-04-11T01:59:00.000Z',
    rewardInfo: '联动限定皮肤',
    description: 'A18赛季版本更新后联动活动，限时获取联动主题限定服装和道具。',
    featured: true,
  },
  // ---- 周年庆宝箱活动 ----
  {
    id: 'pubg-2026-anniversary-chest',
    game: 'pubg',
    title: '周年庆宝箱',
    type: 'major_event',
    startDate: '2026-03-06T02:00:00.000Z',
    endDate: '2026-05-10T15:59:00.000Z',
    rewardInfo: '600UC/10次',
    description: '周年庆宝箱活动，600UC可开启十次。奖励包括：小丑女王主题限定皮肤（武器、服装、头盔、背包等）、周年庆专属vouchers（可用于特殊转盘抽奖）、UC、优惠券、主题表情动作、周年纪念平底锅皮肤、三级头盔皮肤。',
    featured: true,
  },
  // ---- GILT金装（3月20-27日） ----
  {
    id: 'pubg-2026-03-gilt',
    game: 'pubg',
    title: 'GILT金装活动（3月）',
    type: 'major_event',
    startDate: '2026-03-20T02:00:00.000Z',
    endDate: '2026-03-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '3月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年4月活动 - A级
  // ============================================================
  // ---- A级充值返利（4月） ----
  {
    id: 'pubg-2026-04-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-04-06T02:00:00.000Z',
    endDate: '2026-04-30T15:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: '4月A级充值返利活动，累计充值达到指定档位可获得丰厚返利。',
    featured: true,
  },
  // ---- 月中IP联动（4月） ----
  {
    id: 'pubg-2026-04-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-04-10T02:00:00.000Z',
    endDate: '2026-05-07T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '4月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- GILT金装（4月20-27日） ----
  {
    id: 'pubg-2026-04-gilt',
    game: 'pubg',
    title: 'GILT金装活动（4月）',
    type: 'major_event',
    startDate: '2026-04-20T02:00:00.000Z',
    endDate: '2026-04-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '4月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年5月活动 - A级
  // ============================================================
  // ---- A级充值返利（5月） ----
  {
    id: 'pubg-2026-05-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-05-06T02:00:00.000Z',
    endDate: '2026-05-31T15:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: '5月A级充值返利活动，累计充值达到指定档位可获得丰厚返利。',
    featured: true,
  },
  // ---- 月中IP联动（5月） ----
  {
    id: 'pubg-2026-05-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-05-10T02:00:00.000Z',
    endDate: '2026-06-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '5月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- A19 Royale Pass（5月-7月） ----
  {
    id: 'pubg-a19-rp',
    game: 'pubg',
    title: 'A19 Royale Pass 通行证',
    type: 'major_event',
    startDate: '2026-05-17T02:00:00.000Z',
    endDate: '2026-07-14T01:59:00.000Z',
    rewardInfo: '限定皮肤、载具涂装、升级材料',
    description: 'A19赛季Royale Pass开启，北京时间5月17日10:00全球统一重置。升级解锁全套限定服装、载具皮肤、武器涂装和大量升级材料。',
    featured: true,
  },
  // ---- 4.4版本大更新 ----
  {
    id: 'pubg-4.4-update',
    game: 'pubg',
    title: '4.4版本大更新 - 全新主题玩法',
    type: 'major_event',
    startDate: '2026-05-13T03:00:00.000Z',
    endDate: '2026-07-09T23:59:00.000Z',
    rewardInfo: '版本更新奖励',
    description: '4.4大版本更新，北京时间5月13日11:00起分批推送。包含全新主题玩法、地图更新和系统优化。',
    featured: true,
  },
  // ---- 4.4版本联动（版本+2天） ----
  {
    id: 'pubg-4.4-collab',
    game: 'pubg',
    title: '4.4版本联动活动（预估）',
    type: 'major_event',
    startDate: '2026-05-15T02:00:00.000Z',
    endDate: '2026-06-11T01:59:00.000Z',
    rewardInfo: '联动限定皮肤',
    description: '4.4版本更新后联动活动，限时获取联动主题限定服装和道具。',
    featured: true,
  },
  // ---- GILT金装（5月20-27日） ----
  {
    id: 'pubg-2026-05-gilt',
    game: 'pubg',
    title: 'GILT金装活动（5月）',
    type: 'major_event',
    startDate: '2026-05-20T02:00:00.000Z',
    endDate: '2026-05-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '5月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年6月活动 - S级
  // ============================================================
  // ---- S级充值返利（6月） ----
  {
    id: 'pubg-2026-06-recharge-s',
    game: 'pubg',
    title: '充值返利活动（S级）',
    type: 'major_event',
    startDate: '2026-06-06T02:00:00.000Z',
    endDate: '2026-06-30T15:59:00.000Z',
    rewardInfo: '最高返80%UC',
    description: '6月S级充值返利活动，返利比例更高，累计充值达到指定档位可获得丰厚返利，最高返80%UC。',
    featured: true,
  },
  // ---- 月中IP联动（6月） ----
  {
    id: 'pubg-2026-06-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-06-10T02:00:00.000Z',
    endDate: '2026-07-07T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '6月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- GILT金装（6月20-27日） ----
  {
    id: 'pubg-2026-06-gilt',
    game: 'pubg',
    title: 'GILT金装活动（6月）',
    type: 'major_event',
    startDate: '2026-06-20T02:00:00.000Z',
    endDate: '2026-06-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '6月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年7月活动 - A级
  // ============================================================
  // ---- A级充值返利（7月） ----
  {
    id: 'pubg-2026-07-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-07-06T02:00:00.000Z',
    endDate: '2026-07-31T15:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: '7月A级充值返利活动，累计充值达到指定档位可获得丰厚返利。',
    featured: true,
  },
  // ---- 月中IP联动（7月） ----
  {
    id: 'pubg-2026-07-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-07-10T02:00:00.000Z',
    endDate: '2026-08-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '7月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- A20 Royale Pass（7月-9月） ----
  {
    id: 'pubg-a20-rp',
    game: 'pubg',
    title: 'A20 Royale Pass 通行证',
    type: 'major_event',
    startDate: '2026-07-14T02:00:00.000Z',
    endDate: '2026-09-15T01:59:00.000Z',
    rewardInfo: '限定皮肤、载具涂装、升级材料',
    description: 'A20赛季Royale Pass开启，北京时间7月14日10:00全球统一重置。升级解锁全套限定服装、载具皮肤、武器涂装和大量升级材料。',
    featured: true,
  },
  // ---- 4.5版本大更新 ----
  {
    id: 'pubg-4.5-update',
    game: 'pubg',
    title: '4.5版本大更新 - 全新主题玩法',
    type: 'major_event',
    startDate: '2026-07-10T03:00:00.000Z',
    endDate: '2026-09-09T23:59:00.000Z',
    rewardInfo: '版本更新奖励',
    description: '4.5大版本更新，北京时间7月10日11:00起分批推送。包含全新主题玩法、地图更新和系统优化。',
    featured: true,
  },
  // ---- 4.5版本联动（版本+2天） ----
  {
    id: 'pubg-4.5-collab',
    game: 'pubg',
    title: '4.5版本联动活动（预估）',
    type: 'major_event',
    startDate: '2026-07-12T02:00:00.000Z',
    endDate: '2026-08-08T01:59:00.000Z',
    rewardInfo: '联动限定皮肤',
    description: '4.5版本更新后联动活动，限时获取联动主题限定服装和道具。',
    featured: true,
  },
  // ---- GILT金装（7月20-27日） ----
  {
    id: 'pubg-2026-07-gilt',
    game: 'pubg',
    title: 'GILT金装活动（7月）',
    type: 'major_event',
    startDate: '2026-07-20T02:00:00.000Z',
    endDate: '2026-07-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '7月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年8月活动 - A级
  // ============================================================
  // ---- A级充值返利（8月） ----
  {
    id: 'pubg-2026-08-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-08-06T02:00:00.000Z',
    endDate: '2026-08-31T15:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: '8月A级充值返利活动，累计充值达到指定档位可获得丰厚返利。',
    featured: true,
  },
  // ---- 月中IP联动（8月） ----
  {
    id: 'pubg-2026-08-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-08-10T02:00:00.000Z',
    endDate: '2026-09-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '8月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- GILT金装（8月20-27日） ----
  {
    id: 'pubg-2026-08-gilt',
    game: 'pubg',
    title: 'GILT金装活动（8月）',
    type: 'major_event',
    startDate: '2026-08-20T02:00:00.000Z',
    endDate: '2026-08-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '8月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年9月活动 - S级
  // ============================================================
  // ---- S级充值返利（9月） ----
  {
    id: 'pubg-2026-09-recharge-s',
    game: 'pubg',
    title: '充值返利活动（S级）',
    type: 'major_event',
    startDate: '2026-09-06T02:00:00.000Z',
    endDate: '2026-09-30T15:59:00.000Z',
    rewardInfo: '最高返80%UC',
    description: '9月S级充值返利活动，返利比例更高，累计充值达到指定档位可获得丰厚返利，最高返80%UC。',
    featured: true,
  },
  // ---- 月中IP联动（9月） ----
  {
    id: 'pubg-2026-09-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-09-10T02:00:00.000Z',
    endDate: '2026-10-07T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '9月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- A21 Royale Pass（9月-11月） ----
  {
    id: 'pubg-a21-rp',
    game: 'pubg',
    title: 'A21 Royale Pass 通行证',
    type: 'major_event',
    startDate: '2026-09-15T02:00:00.000Z',
    endDate: '2026-11-16T01:59:00.000Z',
    rewardInfo: '限定皮肤、载具涂装、升级材料',
    description: 'A21赛季Royale Pass开启，北京时间9月15日10:00全球统一重置。升级解锁全套限定服装、载具皮肤、武器涂装和大量升级材料。',
    featured: true,
  },
  // ---- 4.6版本大更新 ----
  {
    id: 'pubg-4.6-update',
    game: 'pubg',
    title: '4.6版本大更新 - 全新主题玩法',
    type: 'major_event',
    startDate: '2026-09-10T03:00:00.000Z',
    endDate: '2026-11-10T23:59:00.000Z',
    rewardInfo: '版本更新奖励',
    description: '4.6大版本更新，北京时间9月10日11:00起分批推送。包含全新主题玩法、地图更新和系统优化。',
    featured: true,
  },
  // ---- 4.6版本联动（版本+2天） ----
  {
    id: 'pubg-4.6-collab',
    game: 'pubg',
    title: '4.6版本联动活动（预估）',
    type: 'major_event',
    startDate: '2026-09-12T02:00:00.000Z',
    endDate: '2026-10-09T01:59:00.000Z',
    rewardInfo: '联动限定皮肤',
    description: '4.6版本更新后联动活动，限时获取联动主题限定服装和道具。',
    featured: true,
  },
  // ---- GILT金装（9月20-27日） ----
  {
    id: 'pubg-2026-09-gilt',
    game: 'pubg',
    title: 'GILT金装活动（9月）',
    type: 'major_event',
    startDate: '2026-09-20T02:00:00.000Z',
    endDate: '2026-09-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '9月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年10月活动 - A级
  // ============================================================
  // ---- A级充值返利（10月） ----
  {
    id: 'pubg-2026-10-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-10-06T02:00:00.000Z',
    endDate: '2026-10-31T15:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: '10月A级充值返利活动，累计充值达到指定档位可获得丰厚返利。',
    featured: true,
  },
  // ---- 月中IP联动（10月） ----
  {
    id: 'pubg-2026-10-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-10-10T02:00:00.000Z',
    endDate: '2026-11-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '10月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- GILT金装（10月20-27日） ----
  {
    id: 'pubg-2026-10-gilt',
    game: 'pubg',
    title: 'GILT金装活动（10月）',
    type: 'major_event',
    startDate: '2026-10-20T02:00:00.000Z',
    endDate: '2026-10-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '10月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年11月活动 - A级
  // ============================================================
  // ---- A级充值返利（11月） ----
  {
    id: 'pubg-2026-11-recharge-a',
    game: 'pubg',
    title: '充值返利活动（A级）',
    type: 'minor_event',
    startDate: '2026-11-06T02:00:00.000Z',
    endDate: '2026-11-30T15:59:00.000Z',
    rewardInfo: '最高返50%UC',
    description: '11月A级充值返利活动，累计充值达到指定档位可获得丰厚返利。',
    featured: true,
  },
  // ---- 月中IP联动（11月） ----
  {
    id: 'pubg-2026-11-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-11-10T02:00:00.000Z',
    endDate: '2026-12-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '11月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- A22 Royale Pass（11月-次年1月） ----
  {
    id: 'pubg-a22-rp',
    game: 'pubg',
    title: 'A22 Royale Pass 通行证',
    type: 'major_event',
    startDate: '2026-11-16T02:00:00.000Z',
    endDate: '2027-01-11T01:59:00.000Z',
    rewardInfo: '限定皮肤、载具涂装、升级材料',
    description: 'A22赛季Royale Pass开启，北京时间11月16日10:00全球统一重置。升级解锁全套限定服装、载具皮肤、武器涂装和大量升级材料。',
    featured: true,
  },
  // ---- 4.7版本大更新 ----
  {
    id: 'pubg-4.7-update',
    game: 'pubg',
    title: '4.7版本大更新 - 全新主题玩法',
    type: 'major_event',
    startDate: '2026-11-11T03:00:00.000Z',
    endDate: '2027-01-09T23:59:00.000Z',
    rewardInfo: '版本更新奖励',
    description: '4.7大版本更新，北京时间11月11日11:00起分批推送。包含全新主题玩法、地图更新和系统优化。',
    featured: true,
  },
  // ---- 4.7版本联动（版本+2天） ----
  {
    id: 'pubg-4.7-collab',
    game: 'pubg',
    title: '4.7版本联动活动（预估）',
    type: 'major_event',
    startDate: '2026-11-13T02:00:00.000Z',
    endDate: '2026-12-10T01:59:00.000Z',
    rewardInfo: '联动限定皮肤',
    description: '4.7版本更新后联动活动，限时获取联动主题限定服装和道具。',
    featured: true,
  },
  // ---- GILT金装（11月20-27日） ----
  {
    id: 'pubg-2026-11-gilt',
    game: 'pubg',
    title: 'GILT金装活动（11月）',
    type: 'major_event',
    startDate: '2026-11-20T02:00:00.000Z',
    endDate: '2026-11-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '11月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },

  // ============================================================
  // 2026年12月活动 - S级
  // ============================================================
  // ---- S级充值返利（12月） ----
  {
    id: 'pubg-2026-12-recharge-s',
    game: 'pubg',
    title: '充值返利活动（S级）',
    type: 'major_event',
    startDate: '2026-12-06T02:00:00.000Z',
    endDate: '2026-12-31T15:59:00.000Z',
    rewardInfo: '最高返80%UC',
    description: '12月S级充值返利活动，返利比例更高，累计充值达到指定档位可获得丰厚返利，最高返80%UC。',
    featured: true,
  },
  // ---- 月中IP联动（12月） ----
  {
    id: 'pubg-2026-12-collab',
    game: 'pubg',
    title: 'IP联动活动 - Prize Path & 幸运转盘',
    type: 'major_event',
    startDate: '2026-12-10T02:00:00.000Z',
    endDate: '2027-01-06T01:59:00.000Z',
    rewardInfo: '联动限定皮肤、载具涂装',
    description: '12月IP联动活动，包含Prize Path奖励路线和幸运转盘抽奖。',
    featured: true,
  },
  // ---- GILT金装（12月20-27日） ----
  {
    id: 'pubg-2026-12-gilt',
    game: 'pubg',
    title: 'GILT金装活动（12月）',
    type: 'major_event',
    startDate: '2026-12-20T02:00:00.000Z',
    endDate: '2026-12-27T01:59:00.000Z',
    rewardInfo: '金装皮肤、枪械涂装、动作表情',
    description: '12月GILT金装活动，包含高价值皮肤、枪械涂装、动作表情等丰富内容。',
    featured: true,
  },
];

// ============================================================
// Arena Breakout Mobile 活动数据（FPS掠夺类，腾讯天美）
// 节律：每周四重置（UTC 02:00），赛季约 60 天
// 当前赛季：S9（2026-03-05 ~ 2026-05-03）
// 数据为结构化占位，供后续爬虫/运营日历覆盖
// ============================================================
export const arenaBreakoutMobileEvents: GameEvent[] = [
  {
    id: 'abm-s9-pass',
    game: 'arenaBreakoutMobile',
    title: 'S9赛季战场通行证',
    type: 'banner',
    startDate: '2026-03-05T02:00:00.000Z',
    endDate: '2026-05-03T01:59:00.000Z',
    rewardInfo: '黑市币×5000、限定服装',
    description: 'S9赛季战场通行证，升级解锁限定盔甲、背包液价和枪械贴纸。',
    featured: true,
  },
  {
    id: 'abm-2026-04-raid',
    game: 'arenaBreakoutMobile',
    title: '「卫星城」地图轮换',
    type: 'major_event',
    startDate: '2026-04-10T02:00:00.000Z',
    endDate: '2026-05-03T01:59:00.000Z',
    rewardInfo: '高级战利品箱',
    description: 'S9后期上线「卫星城」新地图，含高价值物资刷新点和集合强制线的调整。',
    featured: true,
  },
  {
    id: 'abm-2026-04-weekly',
    game: 'arenaBreakoutMobile',
    title: '周常战备任务（每周四重置）',
    type: 'routine',
    startDate: '2026-04-23T02:00:00.000Z',
    endDate: '2026-04-30T01:59:00.000Z',
    rewardInfo: '战备盱券×3',
    description: '每周四凌晨2:00 UTC（北京时10:00）重置周常任务，三档任务全完成可领高级盱券。',
    featured: false,
  },
  {
    id: 'abm-2026-04-blackmarket',
    game: 'arenaBreakoutMobile',
    title: '限时黑市折扣周',
    type: 'minor_event',
    startDate: '2026-04-18T02:00:00.000Z',
    endDate: '2026-04-25T01:59:00.000Z',
    rewardInfo: '指定商品 30-50% OFF',
    description: '汉卡约更新，部分热门枪械配件、防弹装备持续7日折扣。',
    featured: false,
  },
  {
    id: 'abm-2026-04-collection',
    game: 'arenaBreakoutMobile',
    title: '月度特殊藏品活动',
    type: 'minor_event',
    startDate: '2026-04-01T02:00:00.000Z',
    endDate: '2026-04-30T15:59:00.000Z',
    rewardInfo: '珍稀收藏品',
    description: '4月藏品系列，可通过挑战任务和折扣商城收集，可兼容后续版本。',
    featured: false,
  },
  {
    id: 'abm-s10-preview',
    game: 'arenaBreakoutMobile',
    title: 'S10赛季预告',
    type: 'major_event',
    startDate: '2026-05-03T02:00:00.000Z',
    endDate: '2026-07-02T01:59:00.000Z',
    rewardInfo: '赛季奖励',
    description: 'S10赛季即将开启，包含新地图、新武器和平衡性调整，更新补偿即将发放。',
    featured: true,
  },
];

// ============================================================
// Arena Breakout: Infinite（PC）活动数据（Steam/全球）
// 节律：每周三重置（Steam 维护时间），赛季约 70 天
// 当前赛季：S5（2026-03-05 ~ 2026-05-14）
// ============================================================
export const arenaBreakoutPCEvents: GameEvent[] = [
  {
    id: 'abp-s5-pass',
    game: 'arenaBreakoutPC',
    title: 'S5赛季战场通行证（PC）',
    type: 'banner',
    startDate: '2026-03-05T02:00:00.000Z',
    endDate: '2026-05-14T01:59:00.000Z',
    rewardInfo: 'PC专属皆肤、启动器图标',
    description: 'S5赛季 PC 专属通行证，包含 100 级奖励、PC 专属枪械模型以及 Steam 成就。',
    featured: true,
  },
  {
    id: 'abp-2026-04-patch',
    game: 'arenaBreakoutPC',
    title: '4月大版本内容更新',
    type: 'major_event',
    startDate: '2026-04-15T02:00:00.000Z',
    endDate: '2026-05-14T01:59:00.000Z',
    rewardInfo: '更新补偿礼包',
    description: 'PC版6月前大更新，包含新地图「密令区」、热成像优化和一批反作弊系统调整。',
    featured: true,
  },
  {
    id: 'abp-2026-04-weekly',
    game: 'arenaBreakoutPC',
    title: '联机任务（每周三重置）',
    type: 'routine',
    startDate: '2026-04-22T02:00:00.000Z',
    endDate: '2026-04-29T01:59:00.000Z',
    rewardInfo: '战备盱券和经验',
    description: '每周三 UTC 02:00 重置，3 人小队任务奖励翻倍。',
    featured: false,
  },
  {
    id: 'abp-2026-04-steam-sale',
    game: 'arenaBreakoutPC',
    title: 'Steam 春季特别促销',
    type: 'minor_event',
    startDate: '2026-03-21T17:00:00.000Z',
    endDate: '2026-03-28T17:00:00.000Z',
    rewardInfo: 'DLC 50% OFF',
    description: 'Steam 春季特卖期间本体及精华版升级包打折。',
    featured: false,
  },
  {
    id: 'abp-2026-04-monthly',
    game: 'arenaBreakoutPC',
    title: '4月月度事件',
    type: 'minor_event',
    startDate: '2026-04-01T02:00:00.000Z',
    endDate: '2026-04-30T15:59:00.000Z',
    rewardInfo: '限定头像框与凭证',
    description: '月度限时活动链，累计参战场次可兑换限定奖励。',
    featured: false,
  },
];

// ============================================================
// Blood Strike 活动数据（FPS，网易全球）
// 节律：每周四重置（UTC 02:00），赛季约 56 天
// 当前赛季：S8（2026-03-12 ~ 2026-05-07）
// ============================================================
export const bloodStrikeEvents: GameEvent[] = [
  {
    id: 'bs-s8-pass',
    game: 'bloodStrike',
    title: 'S8赛季通行证',
    type: 'banner',
    startDate: '2026-03-12T02:00:00.000Z',
    endDate: '2026-05-07T01:59:00.000Z',
    rewardInfo: '限定角色×1、枪械皆肤×3',
    description: 'S8 赛季通行证，含 50 级奖励、限定角色皆肤和专属击杀特效。',
    featured: true,
  },
  {
    id: 'bs-2026-04-hero',
    game: 'bloodStrike',
    title: '周常英雄挑战（每周四重置）',
    type: 'routine',
    startDate: '2026-04-23T02:00:00.000Z',
    endDate: '2026-04-30T01:59:00.000Z',
    rewardInfo: '金币×2000',
    description: '每周四凌晨 UTC 02:00 重置，使用指定英雄完成挑战获得额外奖励。',
    featured: false,
  },
  {
    id: 'bs-2026-04-map',
    game: 'bloodStrike',
    title: '地图轮换：雪域大逃杀',
    type: 'major_event',
    startDate: '2026-04-05T02:00:00.000Z',
    endDate: '2026-05-07T01:59:00.000Z',
    rewardInfo: '雪域主题礼包',
    description: '雪域地图限时回归，平衡性调整 + 限定任务链。',
    featured: true,
  },
  {
    id: 'bs-2026-04-festival',
    game: 'bloodStrike',
    title: '五月狂欢节日活动',
    type: 'minor_event',
    startDate: '2026-04-28T02:00:00.000Z',
    endDate: '2026-05-05T01:59:00.000Z',
    rewardInfo: '限定护符和表情',
    description: '劳动节主题限时任务，签到累计可领限定表情。',
    featured: false,
  },
  {
    id: 'bs-2026-04-daily',
    game: 'bloodStrike',
    title: '每日任务与登录奖励',
    type: 'routine',
    startDate: '2026-04-01T02:00:00.000Z',
    endDate: '2026-04-30T15:59:00.000Z',
    rewardInfo: '金币、通行证经验',
    description: '每日登录 + 3 条日常任务，持续提供赛季通行证经验。',
    featured: false,
  },
];

// ============================================================
// Delta Force（全球）活动数据（FPS + 掠夺，腾讯天美）
// 节律：每周二重置（UTC 02:00），赛季约 60 天
// 当前赛季：S3（2026-02-20 ~ 2026-04-21），S4 起于 2026-04-21
// ============================================================
export const deltaForceEvents: GameEvent[] = [
  {
    id: 'df-s3-pass',
    game: 'deltaForce',
    title: 'S3作战通行证',
    type: 'banner',
    startDate: '2026-02-20T02:00:00.000Z',
    endDate: '2026-04-21T01:59:00.000Z',
    rewardInfo: '高级行动员×1、武器装饰×5',
    description: 'S3 作战通行证，含 60 级奖励、限定行动员置装和区域作战地图彩蛋。',
    featured: true,
  },
  {
    id: 'df-s4-pass',
    game: 'deltaForce',
    title: 'S4作战通行证（下赛季）',
    type: 'banner',
    startDate: '2026-04-21T02:00:00.000Z',
    endDate: '2026-06-23T01:59:00.000Z',
    rewardInfo: '限定新行动员',
    description: 'S4 赛季开启，新行动员上线 + 雪山作战地图。',
    featured: true,
  },
  {
    id: 'df-2026-04-ops',
    game: 'deltaForce',
    title: '每周作战任务（每周二重置）',
    type: 'routine',
    startDate: '2026-04-21T02:00:00.000Z',
    endDate: '2026-04-28T01:59:00.000Z',
    rewardInfo: '行动点数×5000',
    description: '每周二 UTC 02:00 重置，累计作战点数解锁头像框与武器配件。',
    featured: false,
  },
  {
    id: 'df-2026-04-pvp',
    game: 'deltaForce',
    title: '团队竟赛天版图',
    type: 'major_event',
    startDate: '2026-04-18T02:00:00.000Z',
    endDate: '2026-05-02T01:59:00.000Z',
    rewardInfo: '限定涂装与认证章',
    description: '月度 PvP 竟赛天版图，15 人VS15 新模式测试。',
    featured: true,
  },
  {
    id: 'df-2026-04-collab',
    game: 'deltaForce',
    title: '月度联动皆肤（3月6本片）',
    type: 'minor_event',
    startDate: '2026-04-10T02:00:00.000Z',
    endDate: '2026-04-30T15:59:00.000Z',
    rewardInfo: '联动限定置装',
    description: '月度影视联动皆肤上架，商城限时可购。',
    featured: false,
  },
];

// ============================================================
// Marvel Rivals 活动数据（英雄射击，网易）
// 节律：双月赛季（约 56 天），每周任务每周一 UTC 00:00 重置
// 当前赛季：S4（2026-03-14 ~ 2026-05-09）
// ============================================================
export const marvelRivalsEvents: GameEvent[] = [
  {
    id: 'mr-s4-pass',
    game: 'marvelRivals',
    title: 'S4英雄通行证「铁利美时代」',
    type: 'banner',
    startDate: '2026-03-14T02:00:00.000Z',
    endDate: '2026-05-09T01:59:00.000Z',
    rewardInfo: '传奇皆肤×2、英雄券×600',
    description: 'S4 英雄通行证，含 50 级奖励、两位英雄的传奇皆肤和全教育关卡。',
    featured: true,
  },
  {
    id: 'mr-s4-newhero',
    game: 'marvelRivals',
    title: '新英雄上线：金钢狼（预估）',
    type: 'major_event',
    startDate: '2026-04-11T02:00:00.000Z',
    endDate: '2026-05-09T01:59:00.000Z',
    rewardInfo: '英雄免费解锁券',
    description: 'S4 中期新英雄上线，累计对局次数可领免费解锁券。',
    featured: true,
  },
  {
    id: 'mr-2026-04-weekly',
    game: 'marvelRivals',
    title: '每周英雄任务（每周一重置）',
    type: 'routine',
    startDate: '2026-04-27T00:00:00.000Z',
    endDate: '2026-05-04T00:00:00.000Z',
    rewardInfo: '英雄券×150',
    description: '每周一 UTC 00:00 重置，三条英雄任务全完成可领英雄券。',
    featured: false,
  },
  {
    id: 'mr-2026-04-rank',
    game: 'marvelRivals',
    title: '排位赛中期重置',
    type: 'routine',
    startDate: '2026-04-11T02:00:00.000Z',
    endDate: '2026-05-09T01:59:00.000Z',
    rewardInfo: '段位头像框',
    description: 'S4 中期排位赛软重置，段位下降一个子段位。',
    featured: false,
  },
  {
    id: 'mr-2026-04-collab',
    game: 'marvelRivals',
    title: '联动皆肤包：X战警主题',
    type: 'minor_event',
    startDate: '2026-04-18T02:00:00.000Z',
    endDate: '2026-05-02T01:59:00.000Z',
    rewardInfo: 'X战警主题皆肤',
    description: '限时联动商城上架 X 战警主题皆肤套装。',
    featured: false,
  },
];

// ============================================================
// Where Winds Meet（燕云十六声）活动数据（武侠 MMO，网易）
// 节律：每周三重置（UTC 03:00 / 北京时间 11:00），版本约 42 天
// 当前版本：V1.6（2026-04-09 ~ 2026-05-21）
// ============================================================
export const whereWindsMeetEvents: GameEvent[] = [
  {
    id: 'wwm-1.6-story',
    game: 'whereWindsMeet',
    title: 'V1.6「哀哉江湖」主线剧情更新',
    type: 'major_event',
    startDate: '2026-04-09T03:00:00.000Z',
    endDate: '2026-05-21T02:59:00.000Z',
    rewardInfo: '限定侠客、绝世武学重林',
    description: 'V1.6 版本更新，主线「哀哉江湖」上线，新门派与绝世武学开放。',
    featured: true,
  },
  {
    id: 'wwm-1.6-daily',
    game: 'whereWindsMeet',
    title: '每日门派任务',
    type: 'routine',
    startDate: '2026-04-09T03:00:00.000Z',
    endDate: '2026-05-21T02:59:00.000Z',
    rewardInfo: '侠名×500',
    description: '每日凌晨 UTC 20:00 重置（次日北京时间 04:00），完成事件任务获得侠名与卡丹。',
    featured: false,
  },
  {
    id: 'wwm-1.6-weekly',
    game: 'whereWindsMeet',
    title: '周常侠客秘境（每周三重置）',
    type: 'routine',
    startDate: '2026-04-22T03:00:00.000Z',
    endDate: '2026-04-29T02:59:00.000Z',
    rewardInfo: '天杆磎×1',
    description: '每周三 UTC 03:00 重置，四档秘境满星获得天杆磎与高级来仪。',
    featured: false,
  },
  {
    id: 'wwm-1.6-guyu',
    game: 'whereWindsMeet',
    title: '谷雨节气主题活动',
    type: 'minor_event',
    startDate: '2026-04-20T03:00:00.000Z',
    endDate: '2026-05-05T02:59:00.000Z',
    rewardInfo: '限定涂游扮与嘴屏',
    description: '谷雨节气限时任务，采菲、参与风筝赛可领限定时装。',
    featured: true,
  },
  {
    id: 'wwm-1.6-pass',
    game: 'whereWindsMeet',
    title: 'V1.6侠客之路通行证',
    type: 'banner',
    startDate: '2026-04-09T03:00:00.000Z',
    endDate: '2026-05-21T02:59:00.000Z',
    rewardInfo: '限定外观、天杆磎×15',
    description: 'V1.6 通行证，含 60 级奖励和侠客限定外观。',
    featured: true,
  },
];

// ============================================================
// Once Human（七日世界）活动数据（生存类，网易）
// 节律：每个场景赛季约 6 周（约 42 天），每周一 UTC 00:00 重置每周任务
// 当前场景赛季：S6「唇温流金」（2026-03-26 ~ 2026-05-07）
// ============================================================
export const onceHumanEvents: GameEvent[] = [
  {
    id: 'oh-s6-scenario',
    game: 'onceHuman',
    title: 'S6「唇温流金」场景赛季',
    type: 'banner',
    startDate: '2026-03-26T02:00:00.000Z',
    endDate: '2026-05-07T01:59:00.000Z',
    rewardInfo: '场景限定蓝图、快怕×3',
    description: 'S6 新场景「唇温流金」上线，含 6 周赛季目标、新武器框架与场景独占蓝图。',
    featured: true,
  },
  {
    id: 'oh-s7-preview',
    game: 'onceHuman',
    title: 'S7新场景预告',
    type: 'major_event',
    startDate: '2026-05-07T02:00:00.000Z',
    endDate: '2026-06-18T01:59:00.000Z',
    rewardInfo: '赛季奖励',
    description: 'S7 新场景即将上线，包含新怀异与新 BOSS 轮换。',
    featured: true,
  },
  {
    id: 'oh-2026-04-daily',
    game: 'onceHuman',
    title: '每日建造任务',
    type: 'routine',
    startDate: '2026-03-26T02:00:00.000Z',
    endDate: '2026-05-07T01:59:00.000Z',
    rewardInfo: '能量链接×200',
    description: '每日 UTC 00:00 重置，收集、建造、探索任务的能量链接主要来源。',
    featured: false,
  },
  {
    id: 'oh-2026-04-boss',
    game: 'onceHuman',
    title: '赛季 BOSS 轮换（每周四）',
    type: 'routine',
    startDate: '2026-04-23T02:00:00.000Z',
    endDate: '2026-04-30T01:59:00.000Z',
    rewardInfo: '高品质蓝图线索',
    description: '每周四凌晨 UTC 00:00 轮换赛季 BOSS，打通可获得蓝图线索。',
    featured: false,
  },
  {
    id: 'oh-2026-04-coop',
    game: 'onceHuman',
    title: '跨服合作事件：「黑雾芘灵」',
    type: 'minor_event',
    startDate: '2026-04-11T02:00:00.000Z',
    endDate: '2026-04-25T01:59:00.000Z',
    rewardInfo: '纪念头像框、高级能量链接',
    description: '特定活动区域限时开放，跨服玉玠合作挑战「黑雾芘灵」。',
    featured: true,
  },
];

// ============================================================
// Whiteout Survival（寒霜启示录）活动数据（SLG，点点互动）
// 节律：每周一 UTC 00:00 重置联盟战，每月 5-8 日开启 SVS 跨服战
// ============================================================
export const whiteoutSurvivalEvents: GameEvent[] = [
  {
    id: 'wos-2026-04-svs',
    game: 'whiteoutSurvival',
    title: 'SVS 跨服争霸赛（4月场次）',
    type: 'major_event',
    startDate: '2026-04-07T00:00:00.000Z',
    endDate: '2026-04-13T23:59:00.000Z',
    rewardInfo: '隐藏头像、英雄纪念章',
    description: '服器 VS 服器的跨服大战，含战厉、研究、生产、爬塔等子项，累计积分解锁等级奖励。',
    featured: true,
  },
  {
    id: 'wos-2026-04-pass',
    game: 'whiteoutSurvival',
    title: '冰原通行证（4月）',
    type: 'banner',
    startDate: '2026-04-01T00:00:00.000Z',
    endDate: '2026-04-30T23:59:00.000Z',
    rewardInfo: '英雄磎×1000、勇气而诽×5',
    description: '月度冰原通行证，升级解锁限定头像、城堡皮肤和大量基建资源。',
    featured: true,
  },
  {
    id: 'wos-2026-04-alliance',
    game: 'whiteoutSurvival',
    title: '联盟决斗周（每周一重置）',
    type: 'routine',
    startDate: '2026-04-27T00:00:00.000Z',
    endDate: '2026-05-04T00:00:00.000Z',
    rewardInfo: '联盟章×3000',
    description: '每周一 UTC 00:00 重置，包含联盟远征、城堡争夺与召集令。',
    featured: false,
  },
  {
    id: 'wos-2026-04-arena',
    game: 'whiteoutSurvival',
    title: '英雄竞技场赛季',
    type: 'routine',
    startDate: '2026-04-01T00:00:00.000Z',
    endDate: '2026-04-30T23:59:00.000Z',
    rewardInfo: '英雄所属奖牌',
    description: '月度竞技场排名赛，前 100 名可领取英雄所属奖牌。',
    featured: false,
  },
  {
    id: 'wos-2026-04-buildup',
    game: 'whiteoutSurvival',
    title: '月度建造冲刺活动',
    type: 'minor_event',
    startDate: '2026-04-15T00:00:00.000Z',
    endDate: '2026-04-22T23:59:00.000Z',
    rewardInfo: '高级加速券',
    description: '限时7日内完成建筑或研究键点节点，获得加速券与资源私人包。',
    featured: false,
  },
];

// ============================================================
// Last War: Survival（末日：幸存者）活动数据（SLG）
// 节律：每日无限循环，每周一 UTC 00:00 重置 VS 跨服商战
// ============================================================
export const lastWarSurvivalEvents: GameEvent[] = [
  {
    id: 'lws-2026-04-vs',
    game: 'lastWarSurvival',
    title: 'VS 跨服争赛（4月场次）',
    type: 'major_event',
    startDate: '2026-04-14T00:00:00.000Z',
    endDate: '2026-04-20T23:59:00.000Z',
    rewardInfo: '限定头像、高级加速券',
    description: '为期 6 天的服器 VS 服器竟赛，含书价、建造、环境、战斗等章节，累计积分领奖。',
    featured: true,
  },
  {
    id: 'lws-2026-04-doomsday',
    game: 'lastWarSurvival',
    title: '每周末日任务',
    type: 'routine',
    startDate: '2026-04-21T00:00:00.000Z',
    endDate: '2026-04-28T00:00:00.000Z',
    rewardInfo: '战斗募兵令×1000',
    description: '每周一 UTC 00:00 重置，完成指定末日任务获得募兵令与英雄经验。',
    featured: false,
  },
  {
    id: 'lws-2026-04-combat',
    game: 'lastWarSurvival',
    title: '每日作战循环',
    type: 'routine',
    startDate: '2026-04-01T00:00:00.000Z',
    endDate: '2026-04-30T23:59:00.000Z',
    rewardInfo: '体力片×1、幸运券',
    description: '每日 UTC 00:00 重置日常任务，签到 + 超级浦限时挑战 + 零度筛选。',
    featured: false,
  },
  {
    id: 'lws-2026-04-troop',
    game: 'lastWarSurvival',
    title: '兵种养成周（3怀主题）',
    type: 'minor_event',
    startDate: '2026-04-10T00:00:00.000Z',
    endDate: '2026-04-17T23:59:00.000Z',
    rewardInfo: '英雄纪念章×50',
    description: '7 日养成周活动，升级兵种、训练英雄累计积分兑换限定纪念品。',
    featured: false,
  },
  {
    id: 'lws-2026-04-pass',
    game: 'lastWarSurvival',
    title: '幸存者通行证（4月）',
    type: 'banner',
    startDate: '2026-04-01T00:00:00.000Z',
    endDate: '2026-04-30T23:59:00.000Z',
    rewardInfo: '高级英雄磎、限定头像',
    description: '月度通行证，进斗获取经验，满级解锁限定外观与高级英雄磎。',
    featured: true,
  },
];

// ============================================================
// Kingshot 活动数据（牛仔主题 SLG，点点互动）
// 节律：每周一 UTC 00:00 重置城邦争霸，赛季约 45 天
// 当前赛季：S3（2026-03-15 ~ 2026-04-29），S4 起于 2026-04-29
// ============================================================
export const kingshotEvents: GameEvent[] = [
  {
    id: 'ks-s3-pass',
    game: 'kingshot',
    title: 'S3通行证「日落荒原」',
    type: 'banner',
    startDate: '2026-03-15T00:00:00.000Z',
    endDate: '2026-04-29T23:59:00.000Z',
    rewardInfo: '限定英雄磎×2000、牛仔院外观',
    description: 'S3 赛季通行证，升级解锁限定牛仔院、英雄所属奖牌与建筑背景。',
    featured: true,
  },
  {
    id: 'ks-s4-pass',
    game: 'kingshot',
    title: 'S4通行证（下赛季）',
    type: 'banner',
    startDate: '2026-04-29T00:00:00.000Z',
    endDate: '2026-06-13T23:59:00.000Z',
    rewardInfo: '新英雄×1',
    description: 'S4 赛季开启，新牛仔英雄上线 + 城邦争霸玩法升级。',
    featured: true,
  },
  {
    id: 'ks-2026-04-citystate',
    game: 'kingshot',
    title: '每周城邦争霸（每周一重置）',
    type: 'routine',
    startDate: '2026-04-27T00:00:00.000Z',
    endDate: '2026-05-04T00:00:00.000Z',
    rewardInfo: '税金×1500',
    description: '每周一 UTC 00:00 重置，联邦之间争夺城主宝座与种植中心。',
    featured: false,
  },
  {
    id: 'ks-2026-04-daily',
    game: 'kingshot',
    title: '每日建筑快冲',
    type: 'routine',
    startDate: '2026-03-15T00:00:00.000Z',
    endDate: '2026-04-29T23:59:00.000Z',
    rewardInfo: '建筑材料礼包',
    description: '每日 UTC 00:00 重置，完成建筑、种植、马匹养成目标获得材料礼包。',
    featured: false,
  },
  {
    id: 'ks-2026-04-festival',
    game: 'kingshot',
    title: '牢福节狂欢限时活动',
    type: 'minor_event',
    startDate: '2026-05-01T00:00:00.000Z',
    endDate: '2026-05-08T23:59:00.000Z',
    rewardInfo: '特色头像框、城堡展品',
    description: '牢福节主题限时任务，牢穿来宾、十字骑兵、巨人仙人掌主题食物奖励线。',
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
  ...arenaBreakoutMobileEvents,
  ...arenaBreakoutPCEvents,
  ...bloodStrikeEvents,
  ...deltaForceEvents,
  ...marvelRivalsEvents,
  ...whereWindsMeetEvents,
  ...onceHumanEvents,
  ...whiteoutSurvivalEvents,
  ...lastWarSurvivalEvents,
  ...kingshotEvents,
];

// 按游戏获取活动
export function getEventsByGame(gameId: string): GameEvent[] {
  return allEvents.filter(e => e.game === gameId);
}
