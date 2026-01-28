import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from '@/components/AdBanner';  // 引入 AdBanner 组件


export const metadata: Metadata = {
  title: "Hexa Sort Level Guides & Solutions – Play Online Free",
  description: "Hexa Sort puzzle game guide with over 110+ level walkthroughs and expert tips. Master colorful hexagon sorting challenges efficiently.",
  alternates: {
    canonical: "https://www.hexasortlevel.com", // 这里替换为你真实的网址
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />

        {/* 插入广告 */}
        <AdBanner />
        
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
