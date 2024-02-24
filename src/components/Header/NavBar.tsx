import { HStack } from "@chakra-ui/react";

import { Desktop } from "./Desktop";
import { Device } from "./Device";
import { useDesktopView } from "../../hooks/useDesktop";

export const NavBar = () => {
  const [isDesktopView] = useDesktopView();
  return (
    <HStack
      zIndex={1000}
      position="sticky"
      top="0"
      alignItems="center"
      bg="blue.800"
      p=".5em 2em"
      width="100%"
      fontFamily="Magra"
      fontSize={["2xl", "md"]}
      as="nav"
      spacing={10}>
      {isDesktopView ? <Desktop /> : <Device />}
    </HStack>
  );
};
