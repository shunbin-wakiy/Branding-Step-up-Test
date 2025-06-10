"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
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
    <Card className="w-full shadow-lg border-0">
      <CardContent className="flex flex-col items-center justify-center p-12 min-h-[350px] text-center">
        <div className="space-y-12 w-full">
          <p className="text-xl text-gray-400">
            質問 {questionNumber}/{totalQuestions}
          </p>
          <h2 className="text-xl sm:text-2xl text-gray-600 max-w-md mx-auto whitespace-pre-line">{question.text}</h2>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center gap-4 py-0 px-6 sm:py-6">
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
      </CardFooter>

      <div className="text-center pb-6 text-xs text-gray-400">ブランディングタイプ診断</div>
    </Card>
  )
}
