// @ts-check
import React from "react"

import Links from "./links"

const Template = (args) => <Links {...args} />

export const LinksVertical = Template.bind({})

LinksVertical.args = {
  flexDirection: "vertical",
  items: [
    {
      title: "Home",
      url: "/?path=/story/molecules--vertical",
    },
    {
      title: "Contact",
      url: "/?path=/story/molecules--vertical",
    },
    {
      title: "About",
      url: "/?path=/story/molecules--vertical",
    },
  ],
}

export const LinksHorizontal = Template.bind({})

LinksHorizontal.args = {
  flexDirection: "horizontal",
  items: [
    {
      title: "Home",
      url: "/?path=/story/molecules--horizontal",
    },
    {
      title: "Contact",
      url: "/?path=/story/molecules--horizontal",
    },
    {
      title: "About",
      url: "/?path=/story/molecules--horizontal",
    },
  ],
}

export default {
  component: Links,
  title: "Molecules/links list",
  argTypes: {
    flexDirection: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    alignItems: {
      control: {
        type: "select",
        options: ["start", "center", "end"],
      },
    },
    color: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary", "default"],
      },
    },
  },
}
