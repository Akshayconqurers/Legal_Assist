import Hero from '../components/Hero'

const services = [
  'Family Law',
  'Property Law',
  'NCLT Practice',
  'Startup Advisory',
  'Consumer Law',
  'Labour Law',
  'NRI Services',
  'Debt Recovery',
  'Criminal Litigation',
  'Writ Litigation',
]

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">Practice Areas</h2>
        <p className="text-slate-600 mb-6">Explore common legal categories often handled by full-service firms.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <p className="font-semibold">{s}</p>
              <p className="text-sm text-slate-600 mt-1">Learn, draft queries, and save your notes.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="font-semibold">How it works</h3>
          <ol className="mt-3 space-y-2 text-slate-700 list-decimal list-inside">
            <li>Sign up or log in.</li>
            <li>Add legal queries in your dashboard.</li>
            <li>They’re saved to your browser for quick reference.</li>
          </ol>
        </div>
      </section>
    </>
  )
}
