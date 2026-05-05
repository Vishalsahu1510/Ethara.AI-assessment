import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { Button } from '../ui/button'
import { Menu, Moon, Sun, Search } from 'lucide-react'

export function Topbar({ onMenuClick }) {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="border-b border-emerald-100 bg-white/78 px-6 py-4 backdrop-blur-xl dark:border-teal-900/60 dark:bg-ink-950/70">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={onMenuClick} title="Open menu">
            <Menu size={18} />
          </Button>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-sm">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-600 dark:text-teal-300" />
            <input
              type="text"
              placeholder="Search tasks, projects..."
              className="w-full rounded-lg border border-emerald-200 bg-emerald-50/70 py-2 pl-10 pr-4 text-sm text-ink-900 outline-none transition placeholder:text-zinc-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 dark:border-teal-900/70 dark:bg-white/10 dark:text-emerald-50 dark:focus:ring-teal-900"
            />
          </div>
        </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          {/* User Info & Logout */}
          <div className="flex items-center gap-3 border-l border-emerald-100 pl-3 dark:border-teal-900/60">
            <div className="hidden md:block">
              <p className="text-sm font-medium text-ink-900 dark:text-emerald-50">{user?.name}</p>
              <p className="text-xs text-teal-700 dark:text-teal-200">{user?.email}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={logout} title="Logout">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
