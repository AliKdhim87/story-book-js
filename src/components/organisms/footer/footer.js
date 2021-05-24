// @ts-check
import React from "react"
import { oneOf } from "prop-types"

import { StyledFooter } from "./footer.styles"
import Button from "../../atoms/button/button"

const Footer = ({ color = "default" }) => {
  return (
    <StyledFooter color={color}>
      <p>
        Copyright &copy;
        <Button
          color={color}
          as="a"
          href="https://ali-dev.com"
          text="Ali Kadhim"
          basic={false}
          size="small"
        />
        {new Date().getFullYear().toString()}
      </p>
    </StyledFooter>
  )
}

Footer.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: oneOf(["secondary", "primary", "tertiary", "default"]),
}

export default Footer
