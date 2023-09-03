import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { router } from '@router/router.tsx'
import ResetStyle from '@styles/resetStyle.ts'
import GlobalStyle from '@styles/globalStyle.ts'
import { theme } from '@styles/theme.ts'

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
