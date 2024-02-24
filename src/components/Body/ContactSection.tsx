import { Stack, Image, Box, useColorMode } from "@chakra-ui/react";
import { useDesktopView } from "../../hooks/useDesktop";
// import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  const imageEffects = {
    boxShadow:
      " 2em 4em 6em -2em rgba(255,255,255,.2), 1em 2em 3.5em -2.5em rgba(255,255,255,.2)",
    transform: "rotate3d(.5,-.866,0,15deg) rotate(1deg);",
    transition: "transform .4s ease, box-shadow .4s ease;",
    _hover: { transform: "rotate3d(0,0,0,0deg) rotate(0deg)" },
  };
  const [isDesktopView] = useDesktopView();
  const { colorMode } = useColorMode();
  const darkBackground = {
    className: "sage-green"
  };
  const lightBackground = {
    className: "sage-green-light"
  };
  return (
    <Stack
      as="section"
      {...(colorMode === "light" ? lightBackground : darkBackground)}
      justifyContent="center"
      align="center"
      direction={["column", "column", "row"]}
      spacing="5em">
      <Box>
        <Image
          zIndex={0}
          position="relative"
          opacity="0.9"
          src="./assets/iowa.jpg"
          alt="Image of Iowa City in the state of Iowa"
          minW="15em"
          borderRadius="md"
          {...(isDesktopView && imageEffects)}
        />
      </Box>
      {/* <ContactForm /> */}
    </Stack>
  );
};
