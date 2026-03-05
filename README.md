# 游戏活动日历 Game Calendar

一个聚合多款热门手游/网游活动信息的日历网站，支持原神、崩坏：星穹铁道、绝区零、鸣潮、PUBG Mobile 五款游戏，帮助玩家一站式掌握当前版本的卡池、大活动、常规重置等关键时间节点。

## 功能特性

- **多游戏切换**：支持 5 款游戏一键切换，每款游戏独立主题配色
- **活动分类筛选**：按卡池/祈愿、大活动、小活动、常规重置四种类型过滤展示
- **活动状态分组**：自动将活动分为「当前进行中」「即将开始」「已结束」三组
- **进度可视化**：进行中的活动显示实时进度条和剩余天数
- **活动详情弹窗**：点击活动卡片展开完整信息
- **双数据源模式**：默认展示精准的静态模拟数据，可一键切换到爬虫抓取的真实数据
- **自动爬虫抓取**：从 Fandom Wiki、米游社、库洛官网、PUBG 官网等多数据源抓取活动信息，含自动重试和 fallback 容灾

## 项目截图

> 默认深色玻璃态 UI，各游戏独立主题色。

## 技术栈

| 类别 | 技术 |
|---|---|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4 |
| 动画 | Framer Motion 12 |
| 状态管理 | Zustand 5 |
| 图标 | Lucide React |
| 爬虫 | Axios + Cheerio |
| 定时任务 | node-cron |

## 项目结构

```
src/
├── app/
│   ├── api/events/route.ts   # REST API 端点（GET/POST）
│   ├── layout.tsx            # 全局布局
│   └── page.tsx              # 首页
├── components/
│   ├── GameSwitcher.tsx      # 游戏切换导航
│   ├── CategoryFilter.tsx    # 活动类型筛选栏
│   ├── Timeline.tsx          # 活动列表（分组+排序）
│   ├── EventCard.tsx         # 活动卡片
│   ├── EventDetailModal.tsx  # 活动详情弹窗
│   └── DataSourceToggle.tsx  # 数据源切换开关
├── data/
│   ├── games.ts              # 游戏配置（颜色/名称/类型）
│   └── mockEvents.ts         # 精准静态活动数据
├── lib/
│   ├── scraper.ts            # 多源爬虫（含重试/robots检查/翻译）
│   └── eventCache.ts         # 内存缓存（1小时 TTL，支持单游戏刷新）
├── store/
│   └── useGameStore.ts       # Zustand 全局状态
└── types/
    └── index.ts              # TypeScript 类型定义
```

## 设计思路

### 双数据源架构

项目采用「静态数据优先，真实数据可选」的双轨策略：

```
用户访问
   │
   ├─► 默认模式（useRealData = false）
   │       └─► mockEvents.ts（精准手工维护的版本活动数据）
   │
   └─► 真实数据模式（用户手动切换）
           └─► API /api/events?game=xxx&refresh=true
                   └─► EventCache（内存缓存，1h TTL）
                           └─► Scraper（多源抓取，含重试）
                                   ├─► Fandom Event/History Wiki
                                   ├─► 米游社社区
                                   ├─► 库洛官网（鸣潮）
                                   ├─► PUBG 官方活动页
                                   └─► Fallback 容灾数据
```

### 爬虫容灾机制

`scraper.ts` 对每款游戏实现多级数据源降级：

1. **主源**（Fandom Wiki Event/History 页面）
2. **备用源**（米游社 / 库洛官网 / PUBG 官网）
3. **Fallback**（内置与游戏实际结构匹配的兜底数据，包含卡池、常规重置、大活动各一套）

每次请求自动检查 `robots.txt`，遵守爬虫协议；网络失败时按指数退避策略最多重试 3 次。

### 活动分类逻辑

| 类型 | 识别关键词（示例） |
|---|---|
| `banner` 卡池 | 祈愿、跃迁、调频、唤取、Royale Pass、独家频道 |
| `routine` 常规重置 | 深境螺旋、忘却之庭、末日幻影、虚构叙事、差分宇宙、零号空洞、式舆防卫战、危局强袭战、逆境深塔、千道门扉 |
| `major_event` 大活动 | 版本更新、主题活动、限时活动、联动、赛事 |
| `minor_event` 小活动 | 其余活动默认归此类 |

### 前端状态管理

使用 Zustand 管理全局状态，核心数据流：

```
useGameStore
├── selectedGame       → 当前游戏
├── selectedTypes[]    → 激活的活动类型筛选
├── showEnded          → 是否显示已结束活动
├── useRealData        → 数据源开关
├── events[]           → 真实数据缓存
└── getFilteredEvents() → 筛选 + 排序后的活动列表
```

活动排序规则（进行中分组）：`featured 降序` → `类型权重(banner>major>minor>routine)` → `结束时间升序`

## 本地运行

### 环境要求

- Node.js >= 18
- npm / pnpm / yarn

### 安装依赖

```bash
npm install
```

### 配置环境变量（可选）

复制 `.env.local.example` 为 `.env.local`，按需配置：

```bash
# HTTP 代理（访问 Fandom Wiki 等境外站点时可能需要）
HTTP_PROXY=http://127.0.0.1:7890
```

> 不配置代理时，爬虫仍可运行，但访问 Fandom Wiki 等境外站点可能因网络问题失败，此时自动降级到 Fallback 数据。

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm run start
```

## 线上部署

### 方式一：Vercel（推荐）

Vercel 对 Next.js 项目提供一键部署，无需额外配置。

1. 将代码推送到 GitHub / GitLab / Bitbucket
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. 按需在 Vercel 项目设置的 **Environment Variables** 中添加：
   ```
   HTTP_PROXY=（如需代理填写，Vercel 服务器通常不需要）
   ```
4. 点击 Deploy，等待构建完成

> **注意**：Vercel Serverless 函数有执行时间限制（免费版 10s，Pro 版 60s）。爬虫抓取耗时较长时，建议在 `vercel.json` 中为 API 路由设置更长的超时时间，或仅使用静态模拟数据模式。

**vercel.json 示例：**

```json
{
  "functions": {
    "src/app/api/events/route.ts": {
      "maxDuration": 60
    }
  }
}
```

### 方式二：Docker 自托管

**Dockerfile：**

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

在 `next.config.ts` 中开启 standalone 输出：

```ts
const nextConfig = {
  output: 'standalone',
};
export default nextConfig;
```

构建并运行：

```bash
docker build -t game-calendar .
docker run -p 3000:3000 -e HTTP_PROXY=http://your-proxy:7890 game-calendar
```

### 方式三：传统 VPS / 云服务器

```bash
# 克隆代码
git clone https://github.com/your-username/game-calendar.git
cd game-calendar

# 安装依赖并构建
npm install
npm run build

# 使用 PM2 守护进程启动
npm install -g pm2
pm2 start npm --name "game-calendar" -- start
pm2 save
pm2 startup
```

推荐使用 Nginx 反向代理：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 数据更新说明

每个游戏版本周期约 **42 天**（6 周），版本更新时需同步维护 `src/data/mockEvents.ts` 中的活动数据：

- 更新各游戏的卡池起止时间
- 更新大活动和小活动内容
- 添加下一版本的 upcoming 预告事件

真实数据模式下，用户点击「刷新」按钮可触发单游戏重新抓取，结果在服务端内存缓存 1 小时。

## License

MIT
