"use client"

import { useState } from "react"
import StartScreen from "@/components/start-screen"
import QuestionScreen from "@/components/question-screen"
import ResultScreen from "@/components/result-screen"
import { questions } from "@/data/questions"
import { characters } from "@/data/characters"

type Answer = boolean | string

export default function BrandingTest() {
  const [currentScreen, setCurrentScreen] = useState<"start" | "question" | "result">("start")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [resultCharacter, setResultCharacter] = useState<string | null>(null)
  const [questionCount, setQuestionCount] = useState(1) // 現在何問目かをカウント

  const handleStartTest = () => {
    setCurrentScreen("question")
    setQuestionCount(1)
  }

  const handleAnswer = (answer: Answer) => {
    const currentQuestion = questions[currentQuestionIndex]
    const newAnswers = { ...answers, [currentQuestion.id]: answer }
    setAnswers(newAnswers)

    // 次の質問のインデックスを決定
    const nextQuestionIndex = getNextQuestionIndex(currentQuestion.id, answer, currentQuestionIndex)

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
      setQuestionCount(questionCount + 1)
    } else {
      // 全ての質問が終了したら結果を計算
      const result = calculateResult(newAnswers)
      setResultCharacter(result)
      setCurrentScreen("result")
    }
  }

  const getNextQuestionIndex = (questionId: string, answer: Answer, currentIndex: number): number => {
    switch (questionId) {
      case "q1":
        if (answer === false) {
          // Q1でNOを選択した場合はQ1-2をスキップしてQ2へ（インデックス2）
          return 2
        } else {
          // YESの場合はQ1-2へ（インデックス1）
          return currentIndex + 1
        }
      default:
        // その他の質問は順番に進む
        return currentIndex + 1
    }
  }

  const calculateResult = (answers: Record<string, Answer>): string => {
    // Q1でNOを選択した場合 → とりあえずはじまり研究者タイプ（後で決定）
    if (answers["q1"] === false) {
      return "hajimari"
    }

    // Q1-2でリブランディングを選択した場合
    if (answers["q1-2"] === "リブランディング") {
      return "rashisa"
    }

    // Q2でNOを選択した場合
    if (answers["q2"] === false) {
      return "hajimari"
    }

    // Q3でNOを選択した場合
    if (answers["q3"] === false) {
      return "hajimari"
    }

    // Q1「はい」→Q1-2「新規ブランド」→Q3「はい」/Q4「いいえ」→ チャレンジャータイプ
    if (
      answers["q1"] === true &&
      answers["q1-2"] === "新規ブランド" &&
      answers["q3"] === true &&
      answers["q4"] === false
    ) {
      return "challenger"
    }

    // All YES (Q1: YES, Q1-2: 新ブランド, Q2: YES, Q3: YES, Q4: YES)
    if (
      answers["q1"] === true &&
      answers["q1-2"] === "新規ブランド" &&
      answers["q2"] === true &&
      answers["q3"] === true &&
      answers["q4"] === true
    ) {
      return "brushup"
    }

    // その他のパターン（デフォルト）
    return "hajimari"
  }

  const handleRestart = () => {
    setCurrentScreen("start")
    setCurrentQuestionIndex(0)
    setAnswers({})
    setResultCharacter(null)
    setQuestionCount(1)
  }

  const getCurrentQuestion = () => {
    return questions[currentQuestionIndex]
  }

  const getQuestionNumber = () => {
    return questionCount.toString()
  }

  const getTotalQuestions = () => {
    // Q1で「いいえ」を選択した場合は4問、「はい」を選択した場合は5問
    if (answers["q1"] === false) {
      return "4"
    } else if (answers["q1"] === true) {
      return "5"
    } else {
      // Q1がまだ回答されていない場合は最大5問として表示
      return "5"
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-2xl mx-auto p-4">
        {currentScreen === "start" && <StartScreen onStart={handleStartTest} />}

        {currentScreen === "question" && (
          <QuestionScreen
            question={getCurrentQuestion()}
            questionNumber={getQuestionNumber()}
            totalQuestions={getTotalQuestions()}
            onAnswer={handleAnswer}
          />
        )}

        {currentScreen === "result" && resultCharacter && (
          <ResultScreen character={characters.find((c) => c.id === resultCharacter)!} onRestart={handleRestart} />
        )}
      </div>
    </div>
  )
}
