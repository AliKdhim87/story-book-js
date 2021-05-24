export const buttonBackground = (theme, color) => {
  switch (color) {
    case "primary":
      return theme.primary
    case "secondary":
      return theme.secondary
    case "tertiary":
      return theme.tertiary
    case "default":
      return "transparent"
    default:
      return theme.primary
  }
}
