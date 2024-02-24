import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface BaseDrawerProps extends DrawerProps {
  width?: string;
  isOpen: boolean;
  onClose: () => void;
  mx?: string;
  my?: string;
  title?: string;
  footer?: any;
}

export const BaseDrawer = ({
  width,
  placement,
  isOpen,
  finalFocusRef,
  mx,
  my,
  onClose,
  title,
  children,
  footer,
  ...props
}: BaseDrawerProps) => {
  return (
    <Flex w={width}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={finalFocusRef}>
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={mx} my={my} />
          <DrawerHeader my={my}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
