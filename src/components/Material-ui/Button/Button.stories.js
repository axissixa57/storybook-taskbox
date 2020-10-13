import React from "react";
import Button from "./Button";

export default {
  title: "Material-ui/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    checkbox: {
      control: {
        type: "check",
        options: ["loading", "error", "ready"],
      },
    },
    radio: {
      control: {
        type: "radio",
        options: ["loading", "error", "ready"],
      },
    },
    "inline-radio": {
      control: {
        type: "inline-radio",
        options: ["loading", "error", "ready"],
      },
    },
    "inline-check": {
      control: {
        type: "inline-check",
        options: ["loading", "error", "ready"],
      },
    },
    select: {
      control: {
        type: "select",
        options: ["loading", "error", "ready"],
      },
    },
    "multi-select": {
      control: {
        type: "multi-select",
        options: ["loading", "error", "ready"], 
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: "Button",
  isDisabled: false,
};
