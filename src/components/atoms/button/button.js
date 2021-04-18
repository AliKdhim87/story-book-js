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

const Button = ({ text, href, color, icon, basic }) => {
  // TODO handle the error in case user pass not existing icon name
  let Icon = IconTypes[icon]
  return (
    <>
      {!href ? (
        <StyledButton color={color} basic={basic}>
          {icon && <Icon />}
          {text}
        </StyledButton>
      ) : (
        <StyledButton color={color} as="a" href={href} basic={basic}>
          {icon && <Icon />}
          {text}
        </StyledButton>
      )}
    </>
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
   * The expected color
   */
  color: oneOf(["secondary", "primary"]),
  /**
   * The expected Icon
   */
  icon: oneOf(["x", "user", "shopping", "plus"]),
  /**
   * If the basic property is `false` it will remove the shadow
   */
  basic: bool,
}

Button.defaultProps = {
  basic: true,
}
