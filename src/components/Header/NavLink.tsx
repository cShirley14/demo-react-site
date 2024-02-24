import { Text, Link, LinkProps, HStack, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends LinkProps {
  text: string;
  icon?: IconType;
}

export const NavLink = ({ text, icon, ...props }: NavLinkProps) => (
  <Link
    color="whiteAlpha.800"
    _hover={{ color: "whiteAlpha.700" }}
    fontWeight="bold"
    {...props}>
    <HStack>
      <>
        <Text>{text}</Text>
        <Box as={icon} />
      </>
    </HStack>
  </Link>
);
