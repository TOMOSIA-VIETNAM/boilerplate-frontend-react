import i18n from '@/i18n/i18n'
import { TUser } from '@/types/auth.type'
import { Link } from 'react-router-dom'

type TProps = {
  profile?: TUser
}

export default function Header({ profile }: TProps) {
  const currentLanguage = i18n.language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="bg-banner py-3">
      <div className="mx-auto flex max-w-7xl px-4">
        <nav className="flex items-end">
          <Link to="/">
            <img src="./src/assets/images/logo.png" alt="" className="h-5 lg:h-7" />
          </Link>
        </nav>
        <div className="ml-auto flex gap-3">
          <select
            className="bg-white text-sm"
            defaultValue={currentLanguage}
            onChange={(e) => {
              changeLanguage(e.target.value)
            }}
          >
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>

          {profile && (
            <div className="flex items-center gap-2">
              <div className="font-bold text-white">{profile.username}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
