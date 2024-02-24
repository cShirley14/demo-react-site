import {
  Card,
  CardBody,
  Box,
  Heading,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconSkillCardProps {
  icon: IconType;
  skill: string;
}

export const IconSkillCard = ({ icon, skill }: IconSkillCardProps) => (
  <Card
    w={["8.5em", "12em", "12em"]}
    bg={useColorModeValue("gray.600", "grey.400")}
    h={["100%"]}>
    <CardBody p="1em .75em">
      <HStack>
        <Box color="green.300" as={icon} w="1.5em" />
        <Heading color="whitesmoke" fontSize={["sm", "md"]}>
          {skill}
        </Heading>
      </HStack>
    </CardBody>
  </Card>
);
