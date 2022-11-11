import react from 'react'
import { GlobalHeader } from '../organisms/Header/GlobalHeader'
import { GlobalFooter } from '../organisms/Footer/GlobalFooter'
import { Theme } from '../../theme/ThemeProvider'

export const PageLayout = ({ children }) => {
  return (
    <Theme>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </Theme>
  )
}
