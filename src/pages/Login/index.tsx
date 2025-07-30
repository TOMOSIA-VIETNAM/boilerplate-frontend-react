import { login } from '@/apis/auth.api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { setAccessTokenToLocalStorage } from '@/utils/localStorage'
import { TAuthSchema, authSchema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<TAuthSchema>({
    resolver: yupResolver(authSchema),
    defaultValues: {
      username: 'admin',
      password: 'password'
    }
  })

  const onSubmit = handleSubmit((data) => {
    // Sample login -- please remove this after testing
    if (data.username === 'admin' && data.password === 'password') {
      setAccessTokenToLocalStorage('1234567890')
      queryClient.invalidateQueries({ queryKey: ['me'] })
      navigate('/')
      return
    }

    setIsLoading(true)
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        response.data.accessToken && setAccessTokenToLocalStorage(response.data.accessToken)
        queryClient.invalidateQueries({ queryKey: ['me'] })
        navigate('/')
      },
      onError: (error) => {
        const errorMessage = (error as AxiosError).message
        setError('password', {
          message: errorMessage,
          type: 'server'
        })
      },
      onSettled: () => {
        setIsLoading(false)
      }
    })
  })

  const loginMutation = useMutation({
    mutationFn: (body: TAuthSchema) => login(body)
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
            <LockIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <form onSubmit={onSubmit} noValidate className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="relative">
                <UserIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  {...register('username')}
                  className={`h-11 border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 ${
                    errors.username ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="Enter your username"
                />
              </div>
              {errors.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <LockIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={`h-11 border-gray-300 pr-10 pl-10 focus:border-blue-500 focus:ring-blue-500 ${
                    errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="h-11 w-full rounded-lg bg-blue-600 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <p className="mb-2 text-sm text-gray-600">Demo credentials:</p>
            <p className="text-xs text-gray-500">Username: admin </p>
            <p className="text-xs text-gray-500">Password: password</p>
          </div>
        </div>
      </div>
    </div>
  )
}
