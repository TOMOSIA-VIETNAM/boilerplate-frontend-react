import { Button } from '@/components/ui/button'
import { useSidebar } from '@/contexts/SidebarContext'
import { ArrowLeftToLine } from 'lucide-react'

const Logo = () => {
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <div className="mb-8 flex h-[64px] max-h-[64px] flex-1 items-center justify-between space-x-4 border-b border-[#f1f1f1] p-4">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-blue-500 to-purple-600">
          <span className="text-sm font-bold text-white">T</span>
        </div>
        {!isCollapsed && <span className="text-lg font-bold text-gray-900">Tomosia</span>}
      </div>
      {!isCollapsed && (
        <Button variant="outline" size="sm" className="h-8 w-8 bg-gray-100 hover:bg-gray-200" onClick={toggleSidebar}>
          <ArrowLeftToLine className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

export default Logo
