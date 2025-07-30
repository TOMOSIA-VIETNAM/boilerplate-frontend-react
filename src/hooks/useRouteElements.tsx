import AuthGuard from '@/guards/AuthGuard'
import DefaultLayout from '@/layouts/DefaultLayout'
import Home from '@/pages'
import Login from '@/pages/Login'
import NotFound from '@/pages/Notfound'
import Template from '@/pages/Template'
import { useRoutes } from 'react-router-dom'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/login',
      element: <Login />
    },
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
              path: '/template',
              element: <Template />
            },
            {
              path: '/*',
              element: <NotFound />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return routeElements
}
