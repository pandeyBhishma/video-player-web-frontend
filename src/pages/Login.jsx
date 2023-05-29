import React from 'react'
import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'100vw'} height={'100vh'}>
<form action="/dashboard/register" method="post">
    <VStack h={'70vh'} w={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Heading textDecoration={'underline'} m={'5'} >Welcome Back</Heading>
        <Avatar/>
        <VStack display={'flex'} justifyContent={'center'} w={'auto'} h={'full'}>
        <Text w={'full'} textAlign={'start'} fontSize={'20'} fontWeight={'bold'} >E-mail</Text>
        <Input type={'email'} placeholder='Enter Your E-mail' w={['80vw','40vw']} ></Input>

        <Text w={'full'} textAlign={'start'} fontSize={'20'} fontWeight={'bold'} >Password</Text>
        <Input type={'password'} placeholder='Enter Your Password' w={['80vw','40vw']} ></Input>

        <Text w={'full'} textAlign={'end'} >Register first. <Link to={'/dashboard/register'} style={{
            textDecoration: 'underline',
            color: 'blue'
        }} >Sign Up</Link></Text>

        <Button colorScheme='purple'type={'submit'} >Login</Button>
        </VStack>
    </VStack>
</form>
    </Container>
  )
}

export default Login