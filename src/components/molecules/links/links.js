// @ts-check
import React from "react"
import { string, shape, arrayOf, oneOf, bool } from "prop-types"

import { StyledLinks } from "./links.styles"
import Button from "../../atoms/button/button"

const Links = ({ flexDirection, items, alignItems, fullWidth, color }) => {
  return (
    <StyledLinks
      flexDirection={flexDirection}
      alignItems={alignItems}
      fullWidth={fullWidth}
      color={color}
    >
      {items.map((
        /** @type {{ url: string; title: string; }} */ item,
        /** @type {React.Key} */ index
      ) => (
        <li key={index}>
          <Button
            color={color}
            href={item.url}
            basic={false}
            text={item.title}
            as="a"
          />
        </li>
      ))}
    </StyledLinks>
  )
}

export default Links

Links.propTypes = {
  /**
   * Shorthand array of object for list item the object has two keys ´title´ and ´url´
   */
  items: arrayOf(
    shape({
      title: string.isRequired,
      url: string.isRequired,
    })
  ),
  /**
   * `flexDirection` A list can be formatted to have items appear horizontally or vertically
   */
  flexDirection: oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * `flexDirection` A list can be started from the left  or centered or right
   */
  alignItems: oneOf(["start", "center", "end"]),
  /**
   * If `true`, the list will take up the full width of its container.
   */
  fullWidth: bool,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: oneOf(["primary", "secondary", "tertiary", "default"]),
}

Links.defaultProps = {
  flexDirection: "horizontal",
  alignItems: "center",
  items: [],
  fullWidth: false,
  color: "default",
}
