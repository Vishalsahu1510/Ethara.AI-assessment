import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { BarChart3, FolderKanban, CheckSquare, LogOut, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar } from '../ui/avatar'

const links = [
  { label: 'Dashboard', to: '/', icon: BarChart3 },
  { label: 'Projects', to: '/projects', icon: FolderKanban },
  { label: 'Tasks', to: '/tasks', icon: CheckSquare },
]

export function Sidebar() {
  const { user, logout } = useAuth()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden h-screen w-[280px] flex-col gap-6 overflow-hidden border-r border-emerald-100 bg-white/86 px-6 py-8 shadow-sm shadow-teal-900/5 backdrop-blur-xl lg:flex dark:border-teal-900/60 dark:bg-ink-950/82">
      {/* Logo / Brand */}
      <div className="flex flex-col gap-1">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">Team Task</div>
        <div className="text-2xl font-bold text-ink-900 dark:text-emerald-50">Manager</div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {links.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-sm shadow-teal-900/20 dark:bg-teal-400 dark:text-ink-950'
                    : 'text-emerald-950 hover:bg-teal-50 dark:text-emerald-100 dark:hover:bg-white/10'
                }`
              }
            >
              <Icon size={20} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>

      {/* User Card */}
      <div className="border-t border-emerald-100 pt-6 dark:border-teal-900/60">
        <div className="rounded-lg bg-emerald-50/80 p-4 dark:bg-white/10">
          <div className="flex items-center gap-3">
            <Avatar name={user?.name} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ink-900 dark:text-emerald-50 truncate">{user?.name}</p>
              <p className="text-xs text-teal-700 dark:text-teal-200">{user?.role === 'admin' ? 'Admin' : 'Member'}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={logout} className="w-full mt-3 justify-start">
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  )
}

export function MobileSidebar({ mobileOpen, onMobileClose }) {
  const { user, logout } = useAuth()

  if (!mobileOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onMobileClose}
        aria-label="Close menu"
      />

      <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto border-r border-emerald-100 bg-white px-6 py-6 shadow-xl dark:border-teal-900/60 dark:bg-ink-950">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">Team Task</div>
            <div className="text-2xl font-bold text-ink-900 dark:text-emerald-50">Manager</div>
          </div>
          <Button variant="ghost" size="sm" onClick={onMobileClose} title="Close">
            <X size={18} />
          </Button>
        </div>

        <nav className="mt-6 space-y-2">
          {links.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onMobileClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm shadow-teal-900/20 dark:bg-teal-400 dark:text-ink-950'
                      : 'text-emerald-950 hover:bg-teal-50 dark:text-emerald-100 dark:hover:bg-white/10'
                  }`
                }
              >
                <Icon size={20} />
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-6 border-t border-emerald-100 pt-6 dark:border-teal-900/60">
          <div className="rounded-lg bg-emerald-50 p-4 dark:bg-white/10">
            <div className="flex items-center gap-3">
              <Avatar name={user?.name} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink-900 dark:text-emerald-50 truncate">{user?.name}</p>
                <p className="text-xs text-teal-700 dark:text-teal-200">{user?.role === 'admin' ? 'Admin' : 'Member'}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                logout()
                onMobileClose()
              }}
              className="w-full mt-3 justify-start"
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </div>
  )
}
