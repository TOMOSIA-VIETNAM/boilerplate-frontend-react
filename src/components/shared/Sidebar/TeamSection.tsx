import { Button } from '@/components/ui/button'
import { useSidebar } from '@/contexts/SidebarContext'
import { ChevronDownIcon, GemIcon } from 'lucide-react'

const TeamSection = () => {
  const { isCollapsed } = useSidebar()

  return (
    <div className={`mt-auto flex-1 pt-6 pb-2 ${isCollapsed ? 'px-2' : 'px-4'}`}>
      <div className={`mb-4 rounded-lg bg-teal-50 p-3 ${isCollapsed ? 'flex justify-center' : ''}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GemIcon className="h-4 w-4 text-gray-500" />
            {!isCollapsed && (
              <div>
                <div className="text-xs text-gray-500">Team</div>
                <div className="text-sm font-medium text-gray-900">Marketing</div>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <ChevronDownIcon className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
      {!isCollapsed && (
        <>
          <Button className="mb-4 h-10 w-full rounded-lg bg-gray-800 text-white hover:bg-gray-900" variant="default">
            Upgrade Plan
          </Button>
          <p className="text-center text-xs text-gray-500">@2025 Tomosia.io, Inc.</p>
        </>
      )}
    </div>
  )
}

export default TeamSection
