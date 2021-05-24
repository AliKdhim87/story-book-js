//@ts-check
import styled from "styled-components"

export const StyledNavigation = styled.nav`
  display: flex;
  background-color: ${({ theme, color }) => theme[color]};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); ;
`
