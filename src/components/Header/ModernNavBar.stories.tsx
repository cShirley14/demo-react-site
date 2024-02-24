import { Box } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModernNavBar } from "./ModernNavBar";

export default {
  title: "Toplevel/Navbar",
  component: ModernNavBar,
} as ComponentMeta<typeof ModernNavBar>;

const Template: ComponentStory<typeof ModernNavBar> = () => (
  <Box margin="0" p="0">
    <ModernNavBar />
  </Box>
);

export const Upgrade = Template.bind({});
