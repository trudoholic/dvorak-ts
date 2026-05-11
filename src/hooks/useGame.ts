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
    // dispatch({type: Actions.ResetDeck})
    dispatch({type: Actions.SetPlayers, payload: playerList(n)})
    dispatch({type: Actions.SetGameState, payload: 1})
    // handBegin()
  }

  const gameOutro = () => {
    dispatch({type: Actions.SetGameState, payload: 2})
  }

  const gameEnd = () => {
    dispatch({type: Actions.SetPlayers, payload: []})
    dispatch({type: Actions.SetGameState, payload: 0})
  }

  // PREDICATES

  // const gameOver = players.some(p => p.score > 30)
  const gameOver = true

  return {
    gameOver,
    gameState,
    players,

    gameBegin,
    gameOutro,
    gameEnd,
  }
}

export default useGame
