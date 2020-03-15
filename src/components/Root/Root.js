import React from "react"
import StyleThemeProvider from "../../contexts/StyleThemeProvider"

const Root = ({ children }) => {
  return <StyleThemeProvider>{children}</StyleThemeProvider>
}

export default Root
