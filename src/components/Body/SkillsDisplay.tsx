import { WrapItem, Wrap, Center, AspectRatio, Image, useColorMode } from "@chakra-ui/react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IconSkillCard } from "../DataDisplay/IconSkillCard";
import { skills, skillsSection } from "../../schemas/profileConstants";
import { SectionIntro } from "./SectionIntro";

export const SkillsDisplay = () => {
  const { colorMode } = useColorMode();
  const darkBackground = {
    className: "terra-cotta-dark"
  };
  const lightBackground = {
    className: "terra-cotta-light"
  };
  const darkDivider = {
    src: "assets/stacked-waves-haikei-pg-dark.svg"
  }
  const lightDivider = {
    src: "assets/stacked-waves-haikei-pg-light.svg"
  }
  return (
    <>
      <Center as="section"
        {...(colorMode === "light" ? lightBackground : darkBackground)}
      >
        {skillsSection.map((s) => (
          <SectionIntro
            key={s.title}
            id="skills-and-technologies"
            child={s.child}
            title={s.title}
            description={s.description}
          />
        ))}
        <Wrap justify="center" mt="2em">
          {skills.map((s) => {
            return (
              <WrapItem key={s.name}>
                <IconSkillCard skill={s.name} icon={BsFillPatchCheckFill} />
              </WrapItem>
            );
          })}
        </Wrap>
      </Center>
      <AspectRatio ratio={1000 / 100}
        maxW="100%"
        minW="100%"
        overflow="hidden"
        p="0"
        m="0">
        <Image
          {...(colorMode === "light" ? lightDivider : darkDivider)}
          alt="background waves image"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          width="100%"
          minWidth="100%"
          backgroundSize="cover" />
      </AspectRatio>
    </>
  );
}