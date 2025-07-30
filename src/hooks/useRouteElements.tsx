import AuthGuard from '@/guards/AuthGuard'
import DefaultLayout from '@/layouts/DefaultLayout'
import Home from '@/pages'
import Login from '@/pages/Login'
import { useRoutes } from 'react-router-dom'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <AuthGuard />,
      children: [
        {
          path: '',
          element: <DefaultLayout />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            {
              path: '/login',
              element: <Login />
            }
          ]
        }
      ]
    }
  ])
  return routeElements
}
