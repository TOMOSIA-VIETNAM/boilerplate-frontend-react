import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { useSidebar } from '@/contexts/SidebarContext'
import { useAuth } from '@/hooks/useAuth'
import {
  ArrowRightToLine,
  BellIcon,
  GiftIcon,
  LogOutIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-[#f1f1f1] bg-white px-6">
      <div className="flex items-center space-x-4">
        {isCollapsed && (
          <Button variant="outline" size="sm" onClick={toggleSidebar} className="h-9 w-9 p-0 hover:bg-gray-100">
            <ArrowRightToLine className="h-4 w-4" />
          </Button>
        )}
        <div className="relative flex items-center">
          <SearchIcon className="absolute left-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            className="h-9 w-80 rounded-full border-gray-200 bg-gray-50 pr-20 pl-10 focus:bg-white"
          />
          <span className="absolute right-3 text-xs text-gray-500">⌘ + F</span>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
          <GiftIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="relative h-9 w-9 p-0">
          <BellIcon className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 p-0 text-xs">4</Badge>
        </Button>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
          <PlusIcon className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-auto p-2">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback className="text-sm">T</AvatarFallback>
                </Avatar>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">Young Alaska</p>
                <p className="text-muted-foreground text-xs leading-none">young.alaska@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onClick={() => logout(() => navigate('/login'))}>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
