// @ts-check
import React from "react"
import { string, oneOf, bool } from "prop-types"

import { StyledButton } from "./Button.styles"
import { PlusIcon, ShoppingIcon, UserIcon, XIcon } from "../../../assets/Icons"

const IconTypes = {
  plus: PlusIcon,
  shopping: ShoppingIcon,
  user: UserIcon,
  x: XIcon,
}

const Button = ({
  text,
  href,
  color = "default",
  icon,
  basic,
  as = "button",
  size = "medium",
}) => {
  // TODO handle the error in case user pass not existing icon name
  let Icon = IconTypes[icon]
  return (
    <StyledButton
      color={color}
      basic={basic}
      as={as}
      href={as === "a" ? href : undefined}
      size={size}
    >
      {icon && <Icon />}
      {text}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  /**
   * The button text
   */
  text: string,
  /**
   * The `href` is an optional attribute if you pass it the `Button` component will change to HTML `<a>` .
   *
   */
  href: string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: oneOf(["secondary", "primary", "tertiary", "default"]),
  /**
   * The expected Icon
   */
  icon: oneOf(["x", "user", "shopping", "plus"]),
  /**
   * If the basic property is `false` it will remove the shadow
   */
  basic: bool,
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  as: "button",

  size: oneOf(["small", "medium", "large"]),
}

Button.defaultProps = {
  basic: true,
  as: "button",
}
