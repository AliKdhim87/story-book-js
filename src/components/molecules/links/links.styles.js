import styled from "styled-components"

const flexOptionMapper = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
}

export const StyledLinks = styled.ul`
  display: flex;
  background-color: ${({ theme, color }) => theme[color]};
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "vertical" ? "column" : undefined};
  align-items: ${({ alignItems }) => flexOptionMapper[alignItems]};
  justify-content: ${({ alignItems }) => flexOptionMapper[alignItems]};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  & li {
    list-style-type: none;
  }
  & ul > a {
    margin-right: 20px;
`
