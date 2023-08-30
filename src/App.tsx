import { RouterProvider } from 'react-router-dom'
import { router } from '@router/router.tsx'
import { ResetStyle } from '@styles/resetStyle.ts'
import { theme } from '@styles/theme.ts'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <>
      <ResetStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
