import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const linkCls = ({isActive}) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-700 hover:text-slate-900'

  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl tracking-tight text-slate-900">
          <span className="px-2 py-1 rounded-md bg-slate-900 text-white mr-1">GSLO</span> Legal Assist
        </Link>
        <button className="sm:hidden p-2 border rounded-md" onClick={() => setOpen(o => !o)} aria-label="Toggle Menu">
          ☰
        </button>
        <nav className={`sm:flex gap-6 items-center ${open ? 'block' : 'hidden'} sm:block`}>
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <a href="/#services" className="text-slate-700 hover:text-slate-900">Services</a>
          {user ? (
            <>
              <NavLink to="/dashboard" className={linkCls}>Dashboard</NavLink>
              <button onClick={handleLogout} className="px-3 py-1.5 rounded-lg border hover:bg-slate-50">Logout</button>
            </>
          ) : (
            <NavLink to="/auth" className={linkCls}>Login / Signup</NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}
