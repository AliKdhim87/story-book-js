import React from "react"

export const decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <h2>Hello world!</h2>
      <Story />
    </div>
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
