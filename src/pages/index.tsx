import { useAuth } from '@/hooks/useAuth'
import { removeAccessTokenFromLocalStorage } from '@/utils/localStorage'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleLogout = () => {
    removeAccessTokenFromLocalStorage()
    queryClient.invalidateQueries({ queryKey: ['me'] })
    navigate('/login')
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl leading-tight text-transparent">
        {t('hello')} {user?.username}
      </div>
      <button className="hover:text-gray-600" onClick={handleLogout}>
        {t('logout')}
      </button>
    </div>
  )
}
