import React from 'react';
import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'100vw'} height={'100vh'}>
<form action="/dashboard/register" method="post">
    <VStack h={'70vh'} w={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Heading textDecoration={'underline'} m={'5'} >Sign Up!</Heading>
        <Avatar/>
        <VStack display={'flex'} justifyContent={'center'} w={'auto'} h={'full'}>
        <Text  textAlign={'left'} fontSize={'20'} fontWeight={'bold'} w={'full'} >Name</Text>
        <Input type={'text'} placeholder='Enter Your Name' w={['80vw','40vw']} ></Input>

        <Text w={'full'} textAlign={'start'} fontSize={'20'} fontWeight={'bold'} >E-mail</Text>
        <Input type={'email'} placeholder='Enter Your Email' w={[ '80vw','40vw']} ></Input>

        <Text w={'full'} textAlign={'start'} fontSize={'20'} fontWeight={'bold'} >Password</Text>
        <Input type={'password'} placeholder='Enter A Password' w={['80vw','40vw']} ></Input>

        <Text w={'full'} textAlign={'end'} >Already have an account? <Link to={'/dashboard/login'} style={{
            textDecoration: 'underline',
            color: 'blue'
        }} >Login</Link></Text>

        <Button colorScheme='purple'type={'submit'} >Sign Up</Button>
        </VStack>
    </VStack>
</form>
    </Container>
  )
}

export default Signup