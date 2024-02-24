import {
  chakra,
  Flex,
  HStack,
  Link,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDesktopView } from "../../hooks/useDesktop";
import { ColorModeButton } from "../DataDisplay/ColorModeButton";
import { Laptop } from "../Images/Laptop";
import { DesktopUpgrade } from "./DesktopUpgrade";
import { MobileDrawer } from "./MobileDrawer";

export const ModernNavBar = () => {
  const [isDesktopView] = useDesktopView();
  return (
    <chakra.header id="header">
      {/* Orientation */}
      <Flex
        bg={useColorModeValue("gray.200", "gray.900")}
        w="100%"
        px={"2"}
        position={"fixed"}
        zIndex={1000}
        py="2"
        alignItems={"flex-start"}>
        {/* Logo */}
        <Link href="#top">
          <Laptop h="10" />
        </Link>
        {/* Nav Items */}
        {isDesktopView ? (
          <>
            {/* Nav Items */}
            <DesktopUpgrade />
            <ColorModeButton />
          </>
        ) : (
          <>
            {/* Hamburger Menu */}
            <Spacer />
            <HStack>
              <ColorModeButton />
              <MobileDrawer />
            </HStack>
          </>
        )}
      </Flex>
    </chakra.header>
  );
};
