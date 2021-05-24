// @ts-check
import styled from "styled-components"

import { colorHandler } from "../../../utils/colorHandler"

export const StyledFooter = styled.footer`
  display: flex;
  background-color: ${({ theme, color }) => theme[color]};
  justify-content: center;
  color: ${({ color, theme }) => colorHandler(color, theme)};
`
