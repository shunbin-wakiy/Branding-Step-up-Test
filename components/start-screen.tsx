"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <Card className="w-full shadow-lg border-0">
      <CardContent className="flex flex-col items-center justify-center p-12 min-h-[500px] text-center">
        <div className="space-y-12 mb-10">
          <h1 className="text-5xl font-bold text-gray-600">
            Branding
            <br />
            Personality Test
          </h1>
          <p className="text-xl text-gray-500">ブランディングタイプ診断</p>
        </div>

        <p className="text-gray-500 mb-8 max-w-md">
          質問に答えて、あなたの事業の「らしさの種」を発見しましょう。
          診断結果からブランドの成長可能性が見えてきます。
        </p>

        <Button onClick={onStart} size="lg" className="px-8 py-6 text-lg rounded-full">
          診断を始める
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  )
}
