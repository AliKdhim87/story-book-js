import styled from "styled-components"
import { buttonBackground } from "../../../utils/buttonBackground"

export const StyledButton = styled.button`
  align-items: center;
  display: inline-flex;
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "7px 15px"
      case "medium":
        return "10px 21px"
      case "large":
        return "16px"
      default:
        return "10px 21px"
    }
  }};
  background-color: ${({ theme, color }) =>
    color ? buttonBackground(theme, color) : "transparent"};
  border: none;
  box-shadow: ${({ basic }) =>
    basic
      ? "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"
      : "none"};
  cursor: pointer;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  & svg {
    display: inline-block;
    margin-right: 5px;
  }
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
