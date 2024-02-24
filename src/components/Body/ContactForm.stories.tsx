import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContactForm } from "./ContactForm";

export default {
  title: "Body/ContactSection",
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm />;

export const Form = Template.bind({});
