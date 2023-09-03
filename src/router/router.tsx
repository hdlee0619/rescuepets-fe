import { createBrowserRouter } from 'react-router-dom'

import Header from '@layouts/header/Header.tsx'
import Main from '@pages/main/Main.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [{ path: '/', element: <Main /> }],
  },
])
