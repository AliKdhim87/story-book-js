// @ts-check

import styled from "styled-components"

import { colorHandler } from "../../../utils/colorHandler"

const buttonSizeMapper = {
  small: "7px 15px",
  medium: "10px 21px",
  large: "16px",
}

export const StyledButton = styled.button`
  align-items: center;
  display: inline-flex;
  padding: ${({ size }) => buttonSizeMapper[size]};
  background-color: ${({ theme, color }) => theme[color]};
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
  color: ${({ color, theme }) => colorHandler(color, theme)};
  & svg {
    display: inline-block;
    margin-right: 5px;
  }
`
