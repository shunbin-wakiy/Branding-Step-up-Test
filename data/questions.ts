import { QuestionType, type Question } from "@/types/question"

export const questions: Question[] = [
  {
    id: "q1",
    text: "今あなたの会社にブランディングが\n必要な事業はありますか？",
    type: QuestionType.YES_NO,
  },
  {
    id: "q1-2",
    text: "「既存ブランドのリブランディング」\nor\n「新規ブランド」\nどちらをお考えですか？",
    type: QuestionType.CHOICE,
    choices: ["リブランディング", "新規ブランド"],
  },
  {
    id: "q2",
    text: "過去にブランディングの\nご経験はありますか？",
    type: QuestionType.YES_NO,
  },
  {
    id: "q3",
    text: "過去のブランディングにおいて、\n課題や困難を感じられたことは\nありますか？",
    type: QuestionType.YES_NO,
  },
  {
    id: "q4",
    text: "あなたのブランドの「らしさ」を\n一言で表現できますか？",
    type: QuestionType.YES_NO,
  },
]
