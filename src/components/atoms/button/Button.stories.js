import React from "react"

import { withDesign } from "storybook-addon-designs"

import Button from "./button"
import { icon } from "./button.knobs.json"
const { options } = icon

const Template = (args) => <Button {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
}

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary",
  variant: "primary",
}
export const LinkButton = Template.bind({})
LinkButton.args = {
  href: "/",
  children: "Link",
}

export const IconButton = Template.bind({})
IconButton.args = {
  children: "Icon",
  icon: "",
}

export const FunctionButton = Template.bind({})
FunctionButton.args = {
  children: "Function",
  onClick: () => alert("Button clicked"),
}

export default {
  component: Button,
  title: "Button",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/cF0i6Y4QygRENgjFehwidd/Pegasus-Design-System-Community?node-id=982%3A5936",
    },
  },
  argTypes: {
    onClick: { action: "clicked" },
    icon: {
      control: {
        type: "select",
        options,
      },
    },
  },
}
