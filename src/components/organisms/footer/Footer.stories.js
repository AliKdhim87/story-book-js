// @ts-check
import React from "react"

import FooterComponent from "./footer"

const Template = (args) => <FooterComponent {...args} />

export const Footer = Template.bind({})

Footer.args = {
  color: "primary",
}

export default {
  component: FooterComponent,
  title: "organisms/Footer",
  argTypes: {
    color: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary", "default"],
      },
    },
  },
}
