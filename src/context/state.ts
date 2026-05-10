import {type TPlayer} from "../data/players"

export interface IState {
  gameState: number // 0: Intro, 1: Main, 2: Outro
  nPlayers: number
  players: TPlayer[]
}

export const defaultState: IState = {
  gameState: 0,
  nPlayers: 0,
  players: [],
}
