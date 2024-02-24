import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import { BsCloudHazeFill } from "react-icons/bs";
import { links } from "../../schemas/profileConstants";

export const Device = () => (
  <>
    <Menu isLazy>
      {({ isOpen }) => (
        // Box silences popper.js dependency errors that have not been handled by ChakraUI
        <Box>
          <MenuButton
            isActive={isOpen}
            as={IconButton}
            aria-label="Options"
            variant="solid"
            colorScheme="green"
            p="0 1em"
            w={isOpen ? "12em" : "5em"}
            rightIcon={<ChevronDownIcon />}>
            {isOpen ? "Cloud Druid 👋🏽" : <BsCloudHazeFill />}
          </MenuButton>
          <MenuList color="black" bgColor="ButtonHighlight">
            {links.map((m) => {
              return (
                <MenuItem
                  key={m.name}
                  onClick={() => (document.location.href = m.href)}>
                  <HStack>
                    <>
                      <Text>{m.name}</Text>
                      <Box as={m.icon} />
                    </>
                  </HStack>
                </MenuItem>
              );
            })}
          </MenuList>
        </Box>
      )}
    </Menu>
  </>
);
