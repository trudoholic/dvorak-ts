export interface IState {
  gameState: number // 0: Intro, 1: Main, 2: Outro
}

export const defaultState: IState = {
  gameState: 0,
}
