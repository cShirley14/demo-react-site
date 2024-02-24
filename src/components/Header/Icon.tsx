import { Box } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
}

export const Icon = ({ icon }: IconProps) => (
  <Box
    _hover={{ color: "whiteAlpha.700" }}
    className="subtext"
    as={icon}
    size="1.5em"
  />
);
