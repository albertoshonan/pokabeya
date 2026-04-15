import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Pokabeya - 完全無人 RFID ポーカールーム",
  description:
    "24時間営業の完全無人プライベートポーカールーム。RFID テーブル・オートシャフラー完備。新宿・秋葉原・渋谷・三田・横浜で展開中。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-dark font-[family-name:var(--font-noto)] leading-relaxed">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
