// @ts-check
import React from "react"

import { withDesign } from "storybook-addon-designs"

import Button from "./button"
import { icon, color } from "./button.knobs.json"

const Template = (args) => <Button {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  text: "Secondary",
  color: "secondary",
}

export const Primary = Template.bind({})
Primary.args = {
  text: "Primary",
  color: "primary",
}
export const LinkButton = Template.bind({})
LinkButton.args = {
  href: "/",
  text: "Link",
  as: "a",
}

export const IconButton = Template.bind({})
IconButton.args = {
  text: "Icon",
  icon: "user",
}
export const BasicButton = Template.bind({})
BasicButton.args = {
  text: "Basic Button",
  basic: false,
}

export default {
  component: Button,
  title: "Atoms",
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
        options: icon.options,
      },
    },
    color: {
      control: {
        type: "radio",
        options: color.options,
      },
    },
  },
}
