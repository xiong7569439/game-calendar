import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "游戏活动日历 | Game Event Calendar",
  description: "聚合展示热门游戏的当前活动和未来活动时间轴 - 原神、崩坏：星穹铁道、绝区零、鸣潮、PUBG Mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} antialiased bg-[#0f0f1a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
