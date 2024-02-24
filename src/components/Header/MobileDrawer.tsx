import React from "react";
import { useDisclosure, Flex, Button, VStack } from "@chakra-ui/react";
import { BaseDrawer } from "./BaseDrawer";
import { IoMdMenu } from "react-icons/io";
import { ProfileConstants } from "../DataDisplay/ProfileConstants";

export const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Flex>
      {/* Menu Button */}
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" aria-label="Hamburger Menu" />
      </Button>
      {/* Drawer Component */}
      <BaseDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="left">
          <ProfileConstants />
        </VStack>
      </BaseDrawer>
    </Flex>
  );
};
