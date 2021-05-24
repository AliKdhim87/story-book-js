//@ts-check
import styled from "styled-components"

import { buttonBackground } from "../../../utils/buttonBackground"

export const StyledNavigation = styled.nav`
  display: flex;
  background-color: ${({ theme, color }) => buttonBackground(theme, color)};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${({ color, theme }) => {
    color === "primary" || "secondary" ? theme.white : theme.black
    switch (color) {
      case "primary":
        return theme.white
      case "secondary":
        return theme.white
      default:
        return theme.black
    }
  }};
`
