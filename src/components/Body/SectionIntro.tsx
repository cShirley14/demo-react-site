import { Text, VStack, Box, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SectionIntroProps {
  child: IconType;
  title: string;
  description: string;
  id: string;
}

export const SectionIntro = ({
  child,
  title,
  description,
  id,
}: SectionIntroProps) => (
  <VStack id={id} justifyContent="center" px="2em">
    <Link href={`#${id}`} />
    <Box fontSize="3xl" fontWeight="bold" as={child} />
    <Text fontWeight="bold" fontSize="3xl" textAlign="center">
      {title}
    </Text>
    <Text className="subtext" maxW="35em" textAlign="center">
      {description}
    </Text>
  </VStack>
);
