// @ts-check
import React from "react"
import { string, shape, arrayOf, oneOf } from "prop-types"

import { StyledNavigation } from "./navigation.styles"
import Button from "../../atoms/button/button"
import Links from "../../molecules/links/links"

const linksData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "About",
    url: "/about",
  },
]

const Navigation = ({ color = "default" }) => {
  return (
    <StyledNavigation color={color}>
      <Button basic={false} text="Logo" href="#!" color={color} />
      <Links items={linksData} color={color} />
    </StyledNavigation>
  )
}

export default Navigation

Navigation.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: oneOf(["secondary", "primary", "tertiary", "default"]),
}
