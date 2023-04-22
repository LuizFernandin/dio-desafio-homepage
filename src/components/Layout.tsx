import { ChakraProvider, Flex } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return(
    <ChakraProvider>
      <Flex
        backgroundColor='#9413dc' 
        direction='column'
        align='center'
        justify='space-between'
        h='100vh'
      >
        <Header />
        { children }
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}