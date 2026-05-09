import {type IState} from "./state"

export const Actions = {
  SetGameState: 'SetGameState',
} as const

export type TAction =
  | { type: 'SetGameState', payload: number }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetGameState: {
      return { ...state, gameState: action.payload }
    }

    default: {
      return state
    }

  }
}
