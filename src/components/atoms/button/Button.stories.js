import React from "react"
import { action } from "@storybook/addon-actions"

import Button from "./button"

const buttonClicked = () => {
  alert("Hello world!")
}

export const basicButton = () => (
  <Button variant="secondary">Basic button</Button>
)

export const FunctionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
)

export const linkButton = () => <Button href="/">Link Button</Button>

export const iconButton = () => <Button icon="plus">Icon Button</Button>

export default {
  component: Button,
  title: "Button",
}
