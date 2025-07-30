import { useSidebar } from '@/contexts/SidebarContext'
import { LucideIcon } from 'lucide-react'
import NavigationItem from './NavigationItem'

interface NavigationItemData {
  icon: LucideIcon
  label: string
  isActive?: boolean
  badge?: string
  badgeVariant?: 'default' | 'secondary'
  href?: string
}

interface NavigationSectionProps {
  title: string
  items: NavigationItemData[]
}

const NavigationSection = ({ title, items }: NavigationSectionProps) => {
  const { isCollapsed } = useSidebar()

  return (
    <div className={isCollapsed ? 'flex flex-col items-center' : ''}>
      {!isCollapsed && <h3 className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">{title}</h3>}
      <div className={`space-y-1 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        {items.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            label={item.label}
            badge={item.badge}
            badgeVariant={item.badgeVariant}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}

export default NavigationSection
