import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, select } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"

import Button from "./button"
import { icon } from "./button.knobs.json"

const { defaultValue, groupId, label, options } = icon

const buttonClicked = () => {
  alert("Hello world!")
}

export const basicButton = () => (
  <Button variant="secondary">{text("Label", "Basic button")}</Button>
)

export const FunctionButton = () => (
  <Button onClick={buttonClicked}>{text("Label", "Function button")}</Button>
)

export const linkButton = () => (
  <Button href="/">{text("Label", "Link Button")}</Button>
)

export const iconButton = () => (
  <Button icon={select(label, options, defaultValue, groupId)}>
    {text("Label", " Icon Button")}
  </Button>
)

export const FigmaButton = () => (
  <Button>{text("Label", "Figma Button")}</Button>
)

FigmaButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },
}

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs, withDesign],
}
