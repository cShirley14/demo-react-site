import { AspectRatio, Box, Button, Center, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { TypingMessage } from "../DataDisplay/TypingMessage";
import { Laptop } from "../Images/Laptop";


export const AboutSection = () => {
  const { colorMode } = useColorMode();
  const darkBackground = {
    className: "slate-blue-dark"
  };
  const lightBackground = {
    className: "slate-blue-light"
  };
  const darkDivider = {
    src: "assets/stacked-waves-haikei-bp-dark.svg"
  }
  const lightDivider = {
    src: "assets/stacked-waves-haikei-bp-light.svg"
  }
  return (
    <>
      <Box
        as="section"
        {...(colorMode === "light" ? lightBackground : darkBackground)}
        w="100%"
        overflowX="hidden"
        display="flex"
      >
        <Stack
          w="90vw"
          direction={["column", "column", "row"]}>
          {/* <Box p="0 2em" m={["auto", "auto", "0"]}> */}
          <Box pl={[2, "2em", 0]} mt={["2em", "2em", "4em"]} fontSize="3xl">
            <TypingMessage
              message="Hi, I'm Chantal &#128075;"
              typingSpeed={50}
              fontWeight="bold"
              fontSize="large"
              repeatInterval={60000} />
            <Text fontWeight="bold">
              I love to build Cloud Solutions!
            </Text>
            <Text fontSize="large" >
              Former educator, turned codespelunker. I love talking about new and
              emerging technologies and connecting with the community.
            </Text>
            <Stack spacing={1}
              direction={["column", "row", "row"]}
              align="flex-start"
              my="2"
              minW="min-content">
              <Button
                rightIcon={<BsFillCalendarCheckFill />}
                size="md"
                colorScheme="green"
                aria-label="Connect with me via Calendly"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://calendly.com/chantal-c-shirley/30min";
                }}>
                Work With Me
              </Button>
              <Button
                rightIcon={<FaTools />}
                colorScheme="blue"
                aria-label="View my technical skills"
                size="md"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#skills-and-technologies";
                }}>
                My Tech Skills
              </Button>
            </Stack>
            {/* </Box> */}
          </Box>
          <Center>
            <Laptop px="2" h={["250", "350", "500"]} />
          </Center>
        </Stack>
      </Box>
      <AspectRatio ratio={1000 / 100} maxW="100%">
        <Image
          {...(colorMode === "light" ? lightDivider : darkDivider)}
          alt="background waves image"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover" />
      </AspectRatio>
    </>)
};
