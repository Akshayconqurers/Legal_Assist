export default function QueryCard({ query, index, onDelete }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm flex items-start justify-between gap-4">
      <div>
        <p className="text-sm text-slate-500">#{index + 1}</p>
        <p className="mt-1 font-medium">{query.text}</p>
        <p className="text-xs text-slate-400 mt-2">Saved on {new Date(query.createdAt).toLocaleString()}</p>
      </div>
      <button
        onClick={onDelete}
        className="px-3 py-1.5 text-sm rounded-lg border hover:bg-red-50 hover:border-red-300"
        aria-label="Delete query"
      >
        Delete
      </button>
    </div>
  )
}
