import styled from "styled-components"

import { alignItemsHandler } from "../../../utils/alignItemsHandler"
import { buttonBackground } from "../../../utils/buttonBackground"

export const StyledLinks = styled.ul`
  display: flex;
  background-color: ${({ theme, color }) => buttonBackground(theme, color)};
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "vertical" ? "column" : undefined};
  align-items: ${({ alignItems }) => alignItemsHandler(alignItems)};
  justify-content: ${({ alignItems }) => alignItemsHandler(alignItems)};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  & ul > a {
    margin-right: 20px;
  }
`
