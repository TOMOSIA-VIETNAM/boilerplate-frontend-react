import { Loading } from '@/components/shared/Loading'
import { useAuth } from '@/hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const withoutAuthPaths = ['/login']

export default function AuthGuard() {
  const location = useLocation()
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

  // If user is authenticated and trying to access login page, redirect to home
  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to="/" replace />
  }

  // If user is not authenticated and trying to access protected routes, redirect to login
  if (!isAuthenticated && !withoutAuthPaths.includes(location.pathname)) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
