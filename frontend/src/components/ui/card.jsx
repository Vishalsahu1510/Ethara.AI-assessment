import clsx from 'clsx'

export function Card({ children, className, variant = 'default' }) {
  const variants = {
    default: 'rounded-lg border border-emerald-200/70 bg-emerald-50/82 shadow-sm shadow-teal-900/5 backdrop-blur dark:border-teal-800/60 dark:bg-teal-950/35',
    elevated: 'rounded-lg border border-emerald-200/70 bg-emerald-50/90 shadow-soft backdrop-blur dark:border-teal-800/60 dark:bg-teal-950/45',
    outline: 'rounded-lg border-2 border-teal-200 bg-emerald-50/70 backdrop-blur dark:border-teal-800 dark:bg-slate-950/45',
  }

  return (
    <div className={clsx(variants[variant], 'p-6', className)}>
      {children}
    </div>
  )
}
