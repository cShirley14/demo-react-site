import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button aria-label="color mode" onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
