import { InboxIcon } from 'lucide-react'

export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-teal-200 bg-teal-50/70 py-12 px-6 text-center dark:border-teal-800/70 dark:bg-slate-950/55">
      <div className="mb-4 inline-flex rounded-full bg-teal-100 p-3 dark:bg-teal-900/55">
        {Icon ? <Icon size={24} className="text-teal-700 dark:text-teal-200" /> : <InboxIcon size={24} className="text-teal-700 dark:text-teal-200" />}
      </div>
      <h3 className="text-lg font-semibold text-ink-900 dark:text-emerald-50">{title}</h3>
      <p className="mt-2 text-sm text-teal-800 dark:text-teal-100">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
