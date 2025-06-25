import type { Character } from "@/types/character"

export const characters: Character[] = [
  {
    id: "hajimari",
    name: "はじまり研究者",
    description: "ブランディングに興味はある、\nまたは準備中タイプ",
    imageSrc: "/images/hajimari.svg",
  },
  {
    id: "challenger",
    name: "チャレンジャー",
    description: "あれこれ試してはいるが、\nまだ手ごたえが少し足りない",
    imageSrc: "/images/challenger.svg",
  },
  {
    id: "rashisa",
    name: "らしさ探求者",
    description: "自分たちの「らしさ」を\n再発見したいタイプ",
    imageSrc: "/images/rashisa.svg",
  },
  {
    id: "brushup",
    name: "ブラッシュアップ職人",
    description: "ブランドはすでに軸があるが、\nもっと磨きたいタイプ",
    imageSrc: "/images/brushup.svg",
  },
]
