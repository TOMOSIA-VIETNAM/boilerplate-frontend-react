import { Header } from '@/components/shared'
import { useAuth } from '@/hooks/useAuth'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  const { user } = useAuth()

  return (
    <div>
      <Header profile={user} />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  )
}
