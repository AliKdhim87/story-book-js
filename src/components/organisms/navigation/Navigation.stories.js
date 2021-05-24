// @ts-check
import React from "react"

import Navigation from "./navigation"

const Template = (args) => <Navigation {...args} />

export const NavigationBar = Template.bind({})

NavigationBar.args = {
  color: "primary",
}
export default {
  component: Navigation,
  title: "organisms/Navigation",
  argTypes: {
    color: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary", "default"],
      },
    },
  },
}
