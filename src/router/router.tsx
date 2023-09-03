import { createBrowserRouter } from 'react-router-dom'

import Header from '@layouts/header/Header.tsx'
import Main from '@pages/main/Main.tsx'
import Petwork from '@pages/petwork/Petwork.tsx'
import Chat from '@pages/chat/Chat.tsx'
import Profile from '@pages/profile/Profile.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/petwork', element: <Petwork /> },
      { path: '/chat', element: <Chat /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
])
