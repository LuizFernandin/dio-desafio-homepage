import { Heading, Flex } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Flex 
      direction='column'
      align='center' 
      justify='center'
      w='100%'
      bg='white'
      p='3'
    >
      <Heading size='lg' noOfLines={1} >
        Dio Bank
      </Heading>
    </Flex>
  )
}