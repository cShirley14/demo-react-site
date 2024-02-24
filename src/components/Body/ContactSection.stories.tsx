import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContactSection } from "./ContactSection";

export default {
  title: "Body/ContactSection",
  component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

const Template: ComponentStory<typeof ContactSection> = (args) => (
  <ContactSection />
);

export const Default = Template.bind({});
