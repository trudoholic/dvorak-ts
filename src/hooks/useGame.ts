import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

import {playerList} from "../data/players"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    gameState,
    players,
  } = state as IState

  // ACTIONS

  const gameBegin = (n: number) => {
    console.log('Set Players:', n)
    // dispatch({type: Actions.ResetDeck})
    dispatch({type: Actions.SetPlayers, payload: playerList(n)})
    dispatch({type: Actions.SetGameState, payload: 2})
    // handBegin()
  }

  const gameEnd = () => {
    // dispatch({type: Actions.SetPlayers, payload: []})
    dispatch({type: Actions.SetGameState, payload: 0})
  }

  return {
    gameState,
    players,

    gameBegin,
    gameEnd,
  }
}

export default useGame
