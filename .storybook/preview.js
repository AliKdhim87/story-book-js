//@ts-check
import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../src/themes/GlobalStyles"
import { themeDefault } from "../src/themes/themeDefault"

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
