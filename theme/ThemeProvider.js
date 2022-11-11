// @flow
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from './base'
import { GlobalStyle } from './global-styles'

const getTheme = theme => {
  if (theme === 'dark') return 'dark'
  return baseTheme
}

const Theme = ({ children, theme = 'light' }) => {
  const baseTheme = getTheme(theme)

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export { Theme }
