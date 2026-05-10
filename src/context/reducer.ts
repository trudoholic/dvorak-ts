import {type TPlayer} from "../data/players"
import {type IState} from "./state"

export const Actions = {
  SetGameState: 'SetGameState',
  SetPlayers: 'SetPlayers',
} as const

export type TAction =
  | { type: 'SetGameState', payload: number }
  | { type: 'SetPlayers', payload: TPlayer[] }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetGameState: {
      return { ...state, gameState: action.payload }
    }

    case Actions.SetPlayers: {
      const n = action.payload.length//, rnd = Math.floor(Math.random() * n)
      return { ...state,
        // curHand: 0, eldestHand: rnd,
        nPlayers: n,
        players: action.payload
      }
    }

    default: {
      return state
    }

  }
}
