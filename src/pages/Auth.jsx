import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema, signupSchema } from '../utils/validationSchema'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [tab, setTab] = useState('login')
  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-2xl shadow">
      <div className="flex border rounded-xl overflow-hidden mb-6">
        <button className={tab === 'login' ? 'flex-1 py-2 bg-slate-900 text-white' : 'flex-1 py-2'} onClick={() => setTab('login')}>Login</button>
        <button className={tab === 'signup' ? 'flex-1 py-2 bg-slate-900 text-white' : 'flex-1 py-2'} onClick={() => setTab('signup')}>Sign Up</button>
      </div>
      {tab === 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  )
}

function LoginForm() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = (data) => {
    login(data.email)
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input {...register('email')} type="email" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input {...register('password')} type="password" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="••••••••" />
        {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
      </div>
      <button type="submit" className="w-full py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Login</button>
    </form>
  )
}

function SignupForm() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: { email: '', password: '', confirmPassword: '' }
  })

  const onSubmit = (data) => {
    signup(data.email)
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input {...register('email')} type="email" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input {...register('password')} type="password" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="••••••••" />
        {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Confirm Password</label>
        <input {...register('confirmPassword')} type="password" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="••••••••" />
        {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit" className="w-full py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Create account</button>
    </form>
  )
}
