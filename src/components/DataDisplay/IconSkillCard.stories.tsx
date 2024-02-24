import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { skills } from "../../schemas/profileConstants";

import { IconSkillCard } from "./IconSkillCard";

export default {
  title: "Data Display/IconSkillCard",
  component: IconSkillCard,
} as ComponentMeta<typeof IconSkillCard>;

const Template: ComponentStory<typeof IconSkillCard> = (args) => (
  <Center w="100%">
    <Wrap maxW="45em" justify="center">
      {skills.map((s) => {
        return (
          <WrapItem>
            <IconSkillCard skill={s.name} icon={BsFillPatchCheckFill} />
          </WrapItem>
        );
      })}
    </Wrap>
  </Center>
);

export const Default = Template.bind({});
