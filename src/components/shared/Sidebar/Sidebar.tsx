import { useSidebar } from '@/contexts/SidebarContext'
import {
  BarChart3Icon,
  CheckSquareIcon,
  Clipboard,
  FileTextIcon,
  HelpCircleIcon,
  MessageSquareIcon,
  SettingsIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon
} from 'lucide-react'
import Logo from './Logo'
import NavigationSection from './NavigationSection'
import TeamSection from './TeamSection'

const Sidebar = () => {
  const { isCollapsed } = useSidebar()

  const generalItems = [
    { icon: BarChart3Icon, label: 'Dashboard', href: '/' },
    { icon: Clipboard, label: 'Template', href: '/template' },
    { icon: UsersIcon, label: 'Customers', href: '/customers' },
    { icon: MessageSquareIcon, label: 'Message', badge: '8', badgeVariant: 'default' as const, href: '/message' }
  ]

  const toolsItems = [
    { icon: CheckSquareIcon, label: 'Product', href: '/product' },
    { icon: FileTextIcon, label: 'Invoice', href: '/invoice' },
    { icon: TrendingUpIcon, label: 'Analytics', href: '/analytics' },
    { icon: ZapIcon, label: 'Automation', href: '/automation' }
  ]

  const supportItems = [
    { icon: SettingsIcon, label: 'Settings', href: '/settings' },
    { icon: ShieldIcon, label: 'Security', href: '/security' },
    { icon: HelpCircleIcon, label: 'Help', href: '/help' }
  ]

  return (
    <aside
      className={`items-between fixed top-0 left-0 flex h-screen min-h-screen shrink-0 flex-col overflow-hidden border-r border-[#f1f1f1] bg-white transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-[280px]'
      }`}
    >
      <Logo />

      <nav className="space-y-6 overflow-y-auto px-4">
        <NavigationSection title="GENERAL" items={generalItems} />
        <NavigationSection title="TOOLS" items={toolsItems} />
        <NavigationSection title="SUPPORT" items={supportItems} />
      </nav>

      <TeamSection />
    </aside>
  )
}

export default Sidebar
