import { 
    Alert, 
    AlertDialog, 
    AlertDialogContent, 
    AlertDialogOverlay, 
    AlertIcon, 
    AlertTitle, 
    Button, 
    useDisclosure 
} from '@chakra-ui/react'
import React from 'react'

export const SubmitButton  = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef<HTMLButtonElement>(null)

    return(
        <Button 
            onClick={onOpen} 
            colorScheme='teal' 
            size='sm' 
            width='100%' 
            marginTop='5px'
        >
            Button

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='150px'
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Welcoming
                            </AlertTitle>
                        </Alert>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            
        </Button>
    )
  }