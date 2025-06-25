import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Branding Step-up Test",
  description: "ブランディング・ステップアップ診断 - 質問に答えて、あなたの事業の「らしさの種」を発見しましょう。診断結果からブランドの成長可能性が見えてきます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-noto-sans-jp font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
