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
    text: "過去に新ブランド立ち上げに\n関わったことはありますか？",
    type: QuestionType.YES_NO,
  },
  {
    id: "q3",
    text: "新ブランド立ち上げ後、\n課題を感じてまだできることを\n模索していますか？",
    type: QuestionType.YES_NO,
  },
  {
    id: "q4",
    text: "あなたのブランドの「らしさ」を\n一言で表現できますか？",
    type: QuestionType.YES_NO,
  },
]
