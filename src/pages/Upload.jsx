import React from 'react'
import { Button, Container, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const Upload = () => {
  return (
  <Container maxW={'container.xl'} h={'100vh'} p={4}>

    <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
<AiOutlineCloudUpload  size={'10vmax'}/>

<form>
    <Stack direction={['column' , 'row']}>
        <Input required type={'file'} css={{
            "&::file-selector-button" : {
                border: 'none',
                width: 'calc(100% + 36px)',
                height: '100%',
                marginLeft: '-18px',
                color: 'purple',
                backgroundColor: 'whitesmoke',
                cursor: 'pointer',
            }
        }} />
        <Button type={'submit'} colorScheme='purple'>Upload</Button>
    </Stack>

</form>
    </VStack>

  </Container>
  )
}

export default Upload