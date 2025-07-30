import { useAuth } from '@/hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const withoutAuthPaths = ['/login']

export default function AuthGuard() {
  const location = useLocation()
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {isAuthenticated ? (
        !withoutAuthPaths.includes(location.pathname) ? (
          <Outlet />
        ) : (
          <Navigate to="/" />
        )
      ) : withoutAuthPaths.includes(location.pathname) ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  )
}
