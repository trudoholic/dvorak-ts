import {ChakraProvider, defaultSystem, Container} from "@chakra-ui/react"

import Main from "./Main"

function Layout() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Container
        color={"white"}
        bg={"green.900"}
        w="dvw" h="dvh" p={4}
      >
        <Main/>
      </Container>
    </ChakraProvider>
  )
}

export default Layout
