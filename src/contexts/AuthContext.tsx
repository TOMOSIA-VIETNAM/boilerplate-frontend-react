import { getMeQueryOptions } from '@/queries/auth.query'
import { TUser } from '@/types/auth.type'
import { useQuery } from '@tanstack/react-query'
import { createContext, ReactNode, useMemo } from 'react'

type AuthContextType = {
  user: TUser | undefined
  isLoading: boolean
  error: any
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, isLoading, error } = useQuery({ ...getMeQueryOptions() })

  const value = useMemo(
    () => ({
      user: data?.data,
      isLoading,
      error,
      isAuthenticated: !!(data?.data && !error)
    }),
    [data, isLoading, error]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
