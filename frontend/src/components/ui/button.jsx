import clsx from 'clsx'

export function Button({ children, className, variant = 'primary', size = 'md', disabled, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-teal-600 text-white shadow-sm shadow-teal-900/10 hover:bg-teal-700 focus:ring-teal-300 dark:bg-teal-500 dark:text-ink-950 dark:hover:bg-teal-400 dark:focus:ring-teal-800',
    secondary: 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100 focus:ring-teal-300 dark:bg-white/10 dark:text-emerald-50 dark:hover:bg-white/15 dark:focus:ring-teal-800',
    outline: 'border-2 border-teal-200 text-emerald-950 hover:bg-teal-50 focus:ring-teal-300 dark:border-teal-800 dark:text-emerald-50 dark:hover:bg-teal-950/50 dark:focus:ring-teal-800',
    ghost: 'bg-transparent text-emerald-950 hover:bg-teal-50 focus:ring-teal-300 dark:text-emerald-50 dark:hover:bg-white/10 dark:focus:ring-teal-800',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  }
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  }

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
