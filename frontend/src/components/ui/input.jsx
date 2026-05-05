import clsx from 'clsx'

export function Input({ label, className, error, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-emerald-950 dark:text-emerald-100">
      {label}
      <input
        className={clsx(
          'w-full rounded-lg border bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition',
          'placeholder:text-zinc-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100',
          'dark:border-teal-700/70 dark:bg-slate-950/45 dark:text-emerald-50 dark:placeholder:text-teal-100/45 dark:focus:ring-teal-900',
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-emerald-200',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    </label>
  )
}
