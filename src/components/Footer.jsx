import { Box, HStack, Heading, Input, Stack, Text } from "@chakra-ui/react";
import {
  AiOutlineSend,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Stack
      direction={["column", "row"]}
      minH={"20vh"}
      minW={"100vw"}
      bgColor={"black"}
      color={"white"}
    >
      <Stack
        w={"full"}
        borderRight={"2px solid"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text textAlign={"center"} fontSize={"20"}>
          Contact Us
        </Text>
        <HStack>
          <Input
            type="text"
            w={"full"}
            focus={"none"}
            borderTop={"none"}
            borderLeft={"none"}
            borderRight={"none"}
            borderRadius={"0%"}
            outline={"none"}
            focusBorderColor="none"
            placeholder="Enter Your E-Mail..."
          />
          <AiOutlineSend fontSize={"20"} cursor={"pointer"} />
        </HStack>
      </Stack>

      <Stack
        w={"full"}
        borderRight={"2px solid"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading textTransform={"uppercase"} textAlign={"center"}>
          VIDEOS HUB
        </Heading>
        <Text textTransform={"uppercase"} textAlign={"center"}>
          all right reserved
        </Text>
      </Stack>

      <Stack
        w={"full"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"20"}
      >
        <Text>Social Media</Text>
        <HStack>
          <a href="https://facebook.com/profile.php?id=100073040116203">
            {" "}
            <AiFillFacebook />{" "}
          </a>
          <a href="https://instragram.com/bhishmapandey">
            {" "}
            <AiFillInstagram />{" "}
          </a>
          <a href="https://github.com/pandeyBhishma">
            {" "}
            <AiFillGithub />{" "}
          </a>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Footer;
