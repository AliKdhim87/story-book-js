export const alignItemsHandler = (cssProp) => {
  switch (cssProp) {
    case "start":
      return "flex-start"
    case "center":
      return "center"
    case "end":
      return "flex-end"
    default:
      return "center"
  }
}
