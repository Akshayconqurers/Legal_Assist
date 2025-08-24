import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Strategic legal assistance, simplified.
          </h1>
          <p className="mt-4 text-slate-300">
            Draft, track, and organize your legal queries in a clean, responsive portal.
            Your data stays in your browser.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/auth" className="px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Get Started</Link>
            <a href="#services" className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800">Explore Services</a>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 ring-1 ring-white/10 shadow-smooth">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/10">
              <p className="text-sm text-slate-300">Quick Query</p>
              <p className="font-semibold">Create & save</p>
            </div>
            <div className="p-4 rounded-xl bg-white/10">
              <p className="text-sm text-slate-300">Secure</p>
              <p className="font-semibold">LocalStorage only</p>
            </div>
            <div className="p-4 rounded-xl bg-white/10">
              <p className="text-sm text-slate-300">Responsive</p>
              <p className="font-semibold">Mobile-first UI</p>
            </div>
            <div className="p-4 rounded-xl bg-white/10">
              <p className="text-sm text-slate-300">No Setup Hassle</p>
              <p className="font-semibold">Run & go</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
