"use client"

import { Button } from "@/components/ui/button"
import type { Character } from "@/types/character"
import Image from "next/image"
import { RefreshCw } from "lucide-react"

interface ResultScreenProps {
  character: Character
  onRestart: () => void
}

export default function ResultScreen({ character, onRestart }: ResultScreenProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center p-8 min-h-[350px] text-center">
        <div className="space-y-6 mb-6">
          <p className="text-2xl text-gray-500">あなたは...</p>
        </div>

        <div className="my-4 relative flex justify-center">
          <Image
            src={character.imageSrc || "/placeholder.svg"}
            alt={character.name}
            className="object-contain w-[80%] max-w-md sm:w-[100%]"
            loading="lazy"
            width={200}
            height={200}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-700 mt-4 tracking-wider">{character.name}</h2>

        <p className="text-lg text-gray-600 mt-4 max-w-md whitespace-pre-line">{character.description}</p>

        {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg max-w-lg">
          <p className="text-sm text-gray-600 whitespace-pre-line">{character.details}</p>
        </div> */}

        {/* <div className="mt-4 px-4 py-2 bg-emerald-100 rounded-full">
          <p className="text-sm font-medium text-emerald-700">{character.brandStage}</p>
        </div> */}
      </div>

      <div className="flex justify-center p-6">
        <Button onClick={onRestart} variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full">
          <RefreshCw className="mr-2 h-5 w-5 text-gray-500" />
          もう一度診断する
        </Button>
      </div>
    </div>
  )
}
