import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/contexts/SidebarContext'
import { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface NavigationItemProps {
  icon: LucideIcon
  label: string
  badge?: string
  badgeVariant?: 'default' | 'secondary'
  href?: string
}

const NavigationItem = ({ icon: Icon, label, badge, badgeVariant = 'default', href = '/' }: NavigationItemProps) => {
  const location = useLocation()

  const isActive = location.pathname === href
  const { isCollapsed } = useSidebar()

  return (
    <Link to={href}>
      <Button
        variant="ghost"
        className={`h-10 cursor-pointer justify-start px-3 text-sm font-normal transition-all duration-300 ${
          isActive ? 'bg-[#f5f7f9] text-gray-900 hover:bg-[#f5f7f9]' : 'text-gray-600 hover:bg-gray-50'
        } ${badge ? 'relative' : ''} ${isCollapsed ? 'mx-auto w-10 justify-center px-0' : 'w-full'}`}
        title={isCollapsed ? label : undefined}
      >
        <Icon className={`h-4 w-4 ${isCollapsed ? '' : 'mr-3'}`} />
        {!isCollapsed && (
          <>
            {label}
            {badge && (
              <Badge
                variant={badgeVariant}
                className={`ml-auto h-5 w-5 p-0 text-xs ${
                  badgeVariant === 'default' ? 'rounded-full bg-gray-700' : 'rounded-md bg-purple-100 text-purple-700'
                }`}
              >
                {badge}
              </Badge>
            )}
          </>
        )}
      </Button>
    </Link>
  )
}

export default NavigationItem
