"use client"

import { Button } from "@/components/ui/button"
import { QuestionType, type Question } from "@/types/question"

interface QuestionScreenProps {
  question: Question
  questionNumber: string
  totalQuestions: string
  onAnswer: (answer: boolean | string) => void
}

export default function QuestionScreen({ question, questionNumber, totalQuestions, onAnswer }: QuestionScreenProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="space-y-12 w-full">
          <p className="text-xl font-bold">
            Q. {questionNumber}/{totalQuestions}
          </p>
          <h2 className="text-xl sm:text-2xl max-w-md mx-auto whitespace-pre-line font-bold">{question.text}</h2>
        </div>
      </div>

      <div className="flex justify-center gap-4 py-0 px-6">
        {question.type === QuestionType.YES_NO ? (
          <>
            <Button
              onClick={() => onAnswer(true)}
              variant="default"
              size="lg"
              className="w-32 px-12 py-3 text-lg rounded-full bg-red-500 hover:bg-red-600"
            >
              はい
            </Button>
            <Button
              onClick={() => onAnswer(false)}
              variant="destructive"
              size="lg"
              className="w-32 px-12 py-3 text-lg rounded-full bg-emerald-500 hover:bg-emerald-600"
            >
              いいえ
            </Button>
          </>
        ) : (
          <>
            {question.choices?.map((choice, index) => (
              <Button
                key={index}
                onClick={() => onAnswer(choice)}
                variant={index === 0 ? "destructive" : "default"}
                size="lg"
                className={`px-4 sm:px-8 py-2 text-base sm:text-lg rounded-full ${index === 0 ? "bg-emerald-500 hover:bg-emerald-600" : "bg-blue-500 hover:bg-blue-600"}`}
              >
                {choice}
              </Button>
            ))}
          </>
        )}
      </div>

      <div className="text-center pb-6 text-xs text-gray-400">ブランディング・ステップアップ診断</div>
    </div>
  )
}
