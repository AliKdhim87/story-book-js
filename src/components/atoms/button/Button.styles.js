import styled from "styled-components"
import { buttonBackground } from "../../../utils/buttonBackground"

export const StyledButton = styled.button`
  align-items: center;
  display: inline-flex;
  padding: 16px;
  background-color: ${({ theme, color }) =>
    color ? buttonBackground(theme, color) : "transparent"};
  border: none;
  box-shadow: ${({ basic }) =>
    basic
      ? "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"
      : "none"};
  color: ${({ theme, color }) => (color ? theme.white : theme.black)};
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  .button__icon {
    display: inline-block;
    margin-right: 4px;
  }
`
