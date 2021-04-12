import React from "react"
import { string, func, node, oneOf } from "prop-types"

import { StyledButton } from "./Button.styles"
import { PlusIcon, ShoppingIcon, UserIcon, XIcon } from "../../../assets/Icons"

const IconTypes = {
  plus: PlusIcon,
  shopping: ShoppingIcon,
  user: UserIcon,
  x: XIcon,
}

const Button = ({ children, href, onClick, variant, icon }) => {
  // TODO handle the error in case user pass not existing  icon name
  let Icon = IconTypes[icon]
  return (
    <>
      {!href ? (
        <StyledButton variant={variant} onClick={onClick}>
          {icon && <Icon />}
          {children}
        </StyledButton>
      ) : (
        <StyledButton variant={variant} as="a" href={href} onClick={onClick}>
          {icon && <Icon />}
          {children}
        </StyledButton>
      )}
    </>
  )
}

export default Button

Button.propTypes = {
  children: node.isRequired,
  onClick: func,
  href: string,
  variant: oneOf(["secondary", "primary"]),
  icon: oneOf(["x", "user", "shopping", "plus"]),
}

Button.defaultProps = {
  onClick: undefined,
  href: null,
  variant: "primary",
}
