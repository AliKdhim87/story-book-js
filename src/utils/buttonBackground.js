export const buttonBackground = (theme, color) => {
  switch (color) {
    case "primary":
      return theme.primary
    case "secondary":
      return theme.secondary
    case "tertiary":
      return theme.tertiary
    default:
      return theme.primary
  }
}
