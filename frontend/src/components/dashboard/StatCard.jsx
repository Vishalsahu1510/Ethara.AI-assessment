export function StatCard({ title, value, description, icon: Icon, trend }) {
  return (
    <div className="group rounded-lg border border-emerald-200/70 bg-emerald-50/82 p-6 shadow-sm shadow-teal-900/5 backdrop-blur transition hover:border-teal-200 hover:shadow-soft dark:border-teal-800/60 dark:bg-teal-950/35 dark:hover:border-teal-700">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-teal-700 dark:text-teal-300">{title}</p>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-ink-900 dark:text-emerald-50">{value}</h3>
            {trend && <span className={`text-xs font-semibold ${trend.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{trend.label}</span>}
          </div>
          <p className="mt-2 text-sm text-teal-800 dark:text-teal-100">{description}</p>
        </div>
        {Icon && <div className="ml-4 rounded-lg bg-gradient-to-br from-teal-100 to-indigo-100 p-3 text-teal-700 dark:from-teal-500/20 dark:to-indigo-500/20 dark:text-teal-200"><Icon size={24} /></div>}
      </div>
    </div>
  )
}
