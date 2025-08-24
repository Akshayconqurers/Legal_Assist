import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { querySchema } from '../utils/validationSchema'
import QueryCard from '../components/QueryCard'

const QUERIES_KEY = 'legassist_queries'

const demoQueries = [
  { text: 'What is the procedure to file a consumer complaint for a defective product?', createdAt: Date.now() - 86400000 * 2 },
  { text: 'How to draft a simple tenancy termination notice under state law?', createdAt: Date.now() - 86400000 * 3 },
  { text: 'Steps to initiate NCLT action for shareholder dispute?', createdAt: Date.now() - 86400000 * 5 },
]

export default function Dashboard() {
  const { user } = useAuth()
  const [queries, setQueries] = useState([])

  const storageKey = useMemo(() => `${QUERIES_KEY}:${user?.email}`, [user])

  // Load (and seed if empty)
  useEffect(() => {
    const raw = localStorage.getItem(storageKey)
    if (raw) {
      setQueries(JSON.parse(raw))
    } else {
      setQueries(demoQueries)
      localStorage.setItem(storageKey, JSON.stringify(demoQueries))
    }
  }, [storageKey])

  // Persist on change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(queries))
  }, [queries, storageKey])

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(querySchema),
    defaultValues: { text: '' }
  })

  const onSubmit = (data) => {
    const newQuery = { text: data.text, createdAt: Date.now() }
    setQueries((prev) => [newQuery, ...prev])
    reset()
  }

  const deleteQuery = (idx) => setQueries((prev) => prev.filter((_, i) => i !== idx))
  const clearAll = () => setQueries([])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
          <p className="text-slate-600 text-sm">{user?.email}</p>
        </div>
        <div className="text-sm text-slate-500">Your private legal query dashboard</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Saved Legal Queries</h2>
            {queries.length > 0 && (
              <button onClick={clearAll} className="text-sm px-3 py-1.5 rounded-lg border hover:bg-slate-50">Clear All</button>
            )}
          </div>
          {queries.length === 0 ? (
            <p className="text-slate-500 text-sm">No queries yet. Add one using the form →</p>
          ) : (
            <div className="grid gap-3">
              {queries.map((q, i) => (
                <QueryCard key={i} query={q} index={i} onDelete={() => deleteQuery(i)} />
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-1">
          <div className="rounded-2xl border bg-white p-4 shadow-sm sticky top-4">
            <h3 className="font-semibold mb-3">New Query</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Enter your legal query</label>
                <textarea {...register('text')} rows={4} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="E.g., Steps to draft a consumer complaint?"></textarea>
                {errors.text && <p className="text-sm text-red-600 mt-1">{errors.text.message}</p>}
              </div>
              <button type="submit" className="w-full py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Save Query</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
