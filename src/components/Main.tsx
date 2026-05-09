import useGame from "../hooks/useGame"

import PageIntro from "./pages/PageIntro"
import PageMain from "./pages/PageMain"
import PageOutro from "./pages/PageOutro"

const Main = () => {
  const {
    gameState,
  } = useGame()

  return (
    <>
      {
        [
          <PageIntro />,
          <PageMain />,
          <PageOutro />,
        ][gameState] ?? null
      }
    </>
  )
}

export default Main
