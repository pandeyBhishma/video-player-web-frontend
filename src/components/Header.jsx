import React from 'react'
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerHeader, Button, useDisclosure, VStack, HStack, } from '@chakra-ui/react'
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button

                pos={'fixed'}
                top={'4'}
                left={'4'}
                colorScheme='purple'
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen}
                zIndex={'2'}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader textAlign={'center'}> VIDEO HUB</DrawerHeader>

                    <DrawerBody>
                        <VStack>
                            <Button w={'full'} border={'none'} outline={'none'} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/'} className='link'>Home</Link>
                            </Button>

                            <Button w={'full'} border={'none'} outline={'none'} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/watch/videos'} className='link'>Videos</Link>
                            </Button>

                           

                            <Button w={'full'} border={'none'} outline={'none'} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/watch/free/videos'} className='link'>Free Videos</Link>
                            </Button>

                            <Button w={'full'} border={'none'} outline={'none'} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/upload/videos'} className='link'>Upload Videos</Link>
                            </Button>
                        </VStack>

                        <HStack pos={'absolute'} bottom={'5'}  w={'80%'}>

                        <Button  border={'none'} outline={'none'} colorScheme='purple' variant={'solid'}w={'full'}>
                                <Link to={'/dashboard/login'} className='link'>Login</Link>
                            </Button>

                            <Button  border={'none'} outline={'none'} colorScheme='purple' variant={'solid'} w={'full'}>
                                <Link to={'/dashboard/register'} className='link'>Sign Up</Link>
                            </Button>

                        </HStack>
                    </DrawerBody>
                </DrawerContent>

            </Drawer>


        </>
    )
}

export default Header