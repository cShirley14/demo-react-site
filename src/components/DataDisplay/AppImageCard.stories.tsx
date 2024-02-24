import { Box } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { appCards } from "../../schemas/profileConstants";

import { AppImageCard } from "./AppImageCard";

export default {
  title: "Data Display/ImageCard",
  component: AppImageCard,
} as ComponentMeta<typeof AppImageCard>;

const Template: ComponentStory<typeof AppImageCard> = (args) => (
  <Box margin="2em auto" w="30em">
    {appCards.map((c) => {
      return (
        <AppImageCard
          p="2em"
          name={c.name}
          tech={c.tech}
          href={c.href}
          src={c.src}
        />
      );
    })}
  </Box>
);

export const Default = Template.bind({});
