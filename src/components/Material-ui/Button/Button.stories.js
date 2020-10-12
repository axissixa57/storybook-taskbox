import React from "react";
import Button from "./Button";

export default {
  title: "Material-ui/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: "Button",
  isDisabled: false
};
