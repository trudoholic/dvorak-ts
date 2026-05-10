export type TPlayer = {
  id: number
  name: string
  pass: boolean
  score: number
}

const playerNames = ["Anna", "Beth", "Ciri", "Dana"]

const defaultPlayer: TPlayer = {
  id: 0,
  name: "",
  pass: false,
  score: 0,
}

export const range = (n: number) => [...Array(n).keys()]
export const playerList = (n: number) => range(n).map(i => ({
  ...defaultPlayer, id: i + 1, name: playerNames[i]
}))
