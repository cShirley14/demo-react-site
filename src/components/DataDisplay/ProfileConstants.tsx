import { Button, Link, HStack, Text, Box, ButtonProps } from "@chakra-ui/react";
import { links } from "../../schemas/profileConstants";

export const ProfileConstants = ({ variant, ...props }: ButtonProps) => (
  <>
    {links.map((item, i) => (
      <Link key={i}>
        <Button
          variant={variant}
          onClick={() => (document.location.href = item.href)}
          aria-label={item.ariaLabel}>
          <HStack>
            <Text>{item.name}</Text>
            <Box as={item.icon} />
          </HStack>
        </Button>
      </Link>
    ))}
  </>
);
