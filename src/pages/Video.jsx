import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import vid1 from "../videos/1.mp4";
import vid2 from "../videos/2.mp4";
import vid3 from "../videos/3.mp4";
import vid4 from "../videos/4.mp4";
import vid5 from "../videos/5.mp4";
import vid6 from "../videos/6.mp4";

const Video = () => {
  const videoArr = [vid1, vid2, vid3, vid4, vid5, vid6];
  const [videoSrc, setvideoSrc] = useState(videoArr[0]);
  return (
    <Stack direction={["column", "row"]} h={['auto',"100vh"]} w={"100vw"}>
      <VStack w={"full"}>
        <video
          src={videoSrc}
          controls
          controlsList="nodownload"
          style={{
            width: "100%",
            height: "70vh",
          }}
        ></video>

        <VStack
          w={"full"}
          alignItems={"flex-start"}
          overflowY={"auto"}
          p={"2"}
          h={["auto", "50vh"]}
        >
         <Heading>Tiktok videos</Heading>
          <Text overflow={"auto"} w={'full'}>
            This is a desc of my testing videos. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. 
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={["100vw", "xl"]}
        h={['auto','100vh']}
        alignItems={"stretch"}
        p={"5"}
        m={'50vh'}
        spacing={"8"}
        overflowY={"auto"}
        borderLeft={[ 'none','2px solid']}
        borderBottom={['2px solid' , 'none']}
        borderTop={['2px solid' , 'none']}
      >
      <Heading textAlign={'center'} >Other videos</Heading>
        {videoArr.map((item, index) => (
          <Button
            variant={"ghost"}
            colorScheme="purple"
            onClick={() => setvideoSrc(item)}
          >
            video no {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Video;
