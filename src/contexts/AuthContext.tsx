import { logout } from '@/apis/auth.api'
import { getMeQueryOptions } from '@/queries/auth.query'
import { TUser } from '@/types/auth.type'
import { getAccessTokenFromLocalStorage, removeAccessTokenFromLocalStorage } from '@/utils/localStorage'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createContext, ReactNode, useMemo } from 'react'

type AuthContextType = {
  user: TUser | undefined
  isLoading: boolean
  error: any
  isAuthenticated: boolean
  logout: (callback?: () => void) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, isLoading, error } = useQuery({ ...getMeQueryOptions() })
  const queryClient = useQueryClient()

  const handleLogout = (callback?: () => void) => {
    logout()
    removeAccessTokenFromLocalStorage()
    queryClient.clear()
    callback?.()
  }

  const value = useMemo(() => {
    const isAuthenticated = getAccessTokenFromLocalStorage()
    return {
      user: data?.data,
      isLoading,
      error,
      isAuthenticated: !!isAuthenticated,
      logout: handleLogout
    }
  }, [data, isLoading, error, queryClient])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
