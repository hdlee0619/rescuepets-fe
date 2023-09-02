import { RouterProvider } from 'react-router-dom'
import { router } from '@router/router.tsx'
import ResetStyle from '@styles/resetStyle.ts'
import GlobalStyle from '@styles/globalStyle.ts'
import { theme } from '@styles/theme.ts'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
