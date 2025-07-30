import { Header } from '@/components/Dashboard'
import { Sidebar } from '@/components/shared/Sidebar'
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext'
import { Outlet } from 'react-router-dom'

const LayoutContent = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="flex">
      <Sidebar />
      <main className={`w-full bg-[#f9fbfc] transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-[280px]'}`}>
        <div
          className={`fixed top-0 z-2 bg-white transition-all duration-300 ${isCollapsed ? 'w-[calc(100%-64px)]' : 'w-[calc(100%-280px)]'}`}
        >
          <Header />
        </div>
        <div className="mx-auto mt-[64px] w-full max-w-[1100px] p-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  )
}
