import { 
    Input,
    Flex,
    Heading
} from '@chakra-ui/react'
import { SubmitButton } from './SubmitButton'

interface ICard {
    title: string,
  }
  
  export const Card = ({ title }: ICard) => {
    return(
            <Flex
                backgroundColor='#FFFFFF' 
                borderRadius='25px' 
                padding='45px'
                w='600px'
                direction='column'
                align='center'
                justify='center'
                gap='20px'
            >
                <Heading size='md' noOfLines={1} >
                    {title}
                </Heading>
                <Input placeholder="email" />
                <Input placeholder="password" />
                <SubmitButton onClick={() => {}} />
            </Flex>
    )
  }