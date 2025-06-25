"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center p-12 min-h-[500px] text-center">
        <div className="space-y-4 mb-6 sm:mb-10 sm:space-y-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-600 leading-snug whitespace-nowrap">
            Branding Step-up Test
          </h1>
          <p className="text-lg text-gray-500 sm:text-xl">ブランディング・ステップアップ診断</p>
        </div>

        <p className="text-gray-500 mb-8 max-w-lg whitespace-pre-line text-sm sm:text-base leading-normal">
          質問に答えて、あなたの事業の<br className="showSP" />「らしさの種」を発見しましょう。<br className="showSP" />
          診断結果からブランドの成長可能性が<br className="showSP" />見えてきます。
        </p>

        <Button onClick={onStart} size="lg" className="px-8 py-6 text-lg text-center rounded-full startButton">
          診断を始める
          <ArrowRight className="ml-1 h-5 w-5" />
        </Button>
        <div className="text-center mt-8"><figure className="w-fit mx-auto"><img src="/images/logo.svg" alt="shunbin" loading="lazy" /></figure></div>
      </div>
    </div>
  )
}
