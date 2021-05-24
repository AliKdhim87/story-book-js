// @ts-check
import styled from "styled-components"
import { buttonBackground } from "../../../utils/buttonBackground"

export const StyledFooter = styled.footer`
  display: flex;
  background-color: ${({ theme, color }) => buttonBackground(theme, color)};
  justify-content: center;
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
