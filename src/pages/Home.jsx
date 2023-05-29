import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/9.jpg";
import img2 from "../assets/3.jpg";
import img3 from "../assets/10.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/11.jpg";


const headingoption ={
    pos: 'absolute',
    left: '50vw',
    top:"50vh",
    transform: "translate(-50%,-50%)",
    texttransform: 'uppercase',
    p: '4',
    
    
    }

const Home = () => {

  return (
    <>
      <Carousel
      autoPlay
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      showThumbs={false}
      infiniteLoop
      interval={2000}
      >
        <Box zIndex={2}>
          <Heading bgColor={'blackAlpha.400'} color={'white'} w={'4xl'} zIndex={'2'} {...headingoption}>Gaming with fun!</Heading>
          <Image src={img1} />
        </Box>

        <Box>
          <Heading bgColor={'blackAlpha.400'} color={'white'} w={'4xl'} zIndex={'2'} {...headingoption}>Gaming is future!</Heading>
          <Image src={img2} />
        </Box>


        <Box>
          <Heading bgColor={'blackAlpha.400'} color={'white'} w={'4xl'} zIndex={'2'} {...headingoption}>Watch Intresting Gaming Videos</Heading>
          <Image src={img3} />
        </Box>

        <Box>

          <Heading bgColor={'blackAlpha.400'} color={'white'} w={'4xl'} zIndex={'2'} {...headingoption}>Be Annonimous</Heading>
          <Image src={img4} />
        </Box>
      </Carousel>


      <Container minW={'100vw'} minH={'full'} margin={'auto'}>
        <Heading textTransform={'uppercase'} marginTop={'3'} py={'1'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'} >services</Heading>
<Stack display={'flex'} justifyContent={'center'} alignItems={'center'} m={'auto'} h={'full'} p={'4'} w={'100vw'} direction={['column' , 'row']} >
    <Image src={img5} borderRadius={'50%'} m={'2'} h={['100' , '60']} w={['100' , '60']} />
    <Text w={['90%' , '50%']} textAlign={'center'} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro dignissimos voluptatibus a culpa excepturi at nisi repudiandae accusamus facilis incidunt, eligendi accusantium magni recusandae aspernatur, quas voluptas molestiae laudantium corporis ullam, pariatur sed! Fugit tempora voluptatibus, consequuntur ipsa aliquid libero vel quod omnis eveniet alias at provident consequatur, eaque officia suscipit possimus molestiae? Iure ratione tenetur quam neque corrupti facere cupiditate? Eius earum debitis quod dolorum voluptate placeat sunt dolore, laboriosam quaerat odit libero vel repellendus id itaque deleniti repudiandae consectetur aspernatur necessitatibus possimus! Repellat doloremque, vel facilis, vero labore maxime quidem deleniti nobis commodi facere officiis corporis iusto natus!</Text>
</Stack>
      </Container>
    </>
  );
};

export default Home;
