import clsx from 'clsx'

export function Select({ label, name, value, onChange, options, className, required, disabled, placeholder = 'Select an option' }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-emerald-950 dark:text-emerald-100">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={clsx(
          'w-full rounded-lg border border-emerald-200 bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition',
          'focus:border-teal-500 focus:ring-2 focus:ring-teal-100',
          'dark:border-teal-700/70 dark:bg-slate-950/45 dark:text-emerald-50 dark:focus:ring-teal-900',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
      >
        <option value="">{placeholder}</option>
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  )
}
