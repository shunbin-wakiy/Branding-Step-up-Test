export enum QuestionType {
  YES_NO = "yes_no",
  CHOICE = "choice",
}

export interface Question {
  id: string
  text: string
  type: QuestionType
  choices?: string[]
}
