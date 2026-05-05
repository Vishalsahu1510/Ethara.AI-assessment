import clsx from 'clsx'

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-stone-100 text-stone-800 dark:bg-white/10 dark:text-stone-100',
    primary: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-100',
    success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-100',
    warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    'status-todo': 'bg-stone-100 text-stone-700 dark:bg-white/10 dark:text-stone-200',
    'status-in-progress': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200',
    'status-done': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200',
  }

  return (
    <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  )
}
