import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku-gothic-new",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brand Personality Test",
  description: "ブランドパーソナリティテスト - あなたのブランドの個性を発見しましょう",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenKakuGothicNew.variable} font-zen-kaku-gothic-new font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
