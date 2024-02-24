import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavScroll } from "../../../hooks/useNavScroll";

export const TopButton = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useNavScroll(lastScrollY, setShow, setLastScrollY);
  return (
    <Button
      visibility={show ? "hidden" : "visible"}
      position={"fixed"}
      bottom={"4"}
      right={"6"}
      zIndex={99}
      variant="solid"
      colorScheme="linkedin"
      padding={"15px"}
      border-raidus={"10px"}
      fontSize={"18px"}
      onClick={() => (document.location.href = "#top")}>
      Top
    </Button>
  );
};
