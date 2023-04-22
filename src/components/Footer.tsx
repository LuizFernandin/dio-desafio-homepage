import { Flex, Heading } from "@chakra-ui/react"

export const Footer  = () => {
    return(
      <Flex 
        direction='column'
        align='center' 
        justify='center'
        w='100%'
        bg='white'
        p='3'
      >
        <Heading size='sm' noOfLines={1}>
          desenvolvido por Luiz Goncalves Silva
        </Heading>
      </Flex>
    )
  }