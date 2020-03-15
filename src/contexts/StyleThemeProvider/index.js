import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({
})

export default function StyleThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
