import { Box } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavBar } from "./NavBar";

export default {
  title: "Toplevel/Navbar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => (
  <Box margin="0" p="0">
    <NavBar />
  </Box>
);

export const Default = Template.bind({});
