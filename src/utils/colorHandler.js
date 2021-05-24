// @ts-check
export const colorHandler = (
  /** @type {string} */ color,
  /** @type {{ white: string; black: string; }} */ theme
) => {
  switch (color) {
    case "primary":
      return theme.white
    case "secondary":
      return theme.white
    default:
      return theme.black
  }
}
