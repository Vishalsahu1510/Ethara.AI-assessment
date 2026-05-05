import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../../lib/api'
import { useAuth } from '../../context/AuthContext'
import { useToast } from '../../context/ToastContext'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select } from '../ui/select'
import { LogIn, UserPlus } from 'lucide-react'

export function AuthForm({ initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode)
  const [values, setValues] = useState({ name: '', email: '', password: '', role: 'member' })
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/signup'
      const payload = mode === 'login'
        ? { email: values.email, password: values.password }
        : values
      const response = await API.post(endpoint, payload)
      login(response.data)
      toast.showToast(`Welcome ${response.data.user.name}`, 'success')
      navigate('/')
    } catch (error) {
      toast.showToast(error.response?.data?.message || 'Authentication failed', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-emerald-200/70 bg-emerald-50/88 p-8 shadow-soft backdrop-blur dark:border-teal-800/60 dark:bg-teal-950/40">
      <div className="mb-8 text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">Team Task</div>
        <h1 className="mt-2 text-3xl font-bold text-ink-900 dark:text-emerald-50">Manager</h1>
        <p className="mt-4 text-sm text-teal-800 dark:text-teal-100">{mode === 'login' ? 'Welcome back to your workspace' : 'Join your team workspace'}</p>
      </div>

      {/* Mode Toggle */}
      <div className="mb-6 flex gap-2 rounded-lg bg-emerald-50 p-1 dark:bg-white/10">
        <button
          type="button"
          onClick={() => setMode('login')}
          className={`flex-1 rounded-lg py-2 px-3 text-sm font-semibold transition ${mode === 'login' ? 'bg-teal-600 text-white shadow-sm dark:bg-teal-400 dark:text-ink-950' : 'text-teal-800 dark:text-teal-100'}`}
        >
          <LogIn size={16} className="inline mr-2" />
          Login
        </button>
        <button
          type="button"
          onClick={() => setMode('signup')}
          className={`flex-1 rounded-lg py-2 px-3 text-sm font-semibold transition ${mode === 'signup' ? 'bg-teal-600 text-white shadow-sm dark:bg-teal-400 dark:text-ink-950' : 'text-teal-800 dark:text-teal-100'}`}
        >
          <UserPlus size={16} className="inline mr-2" />
          Sign up
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <Input 
            label="Full name" 
            name="name" 
            value={values.name} 
            onChange={handleChange} 
            placeholder="John Doe"
            required 
          />
        )}
        <Input 
          label="Email address" 
          name="email" 
          type="email" 
          value={values.email} 
          onChange={handleChange} 
          placeholder="you@example.com"
          required 
        />
        <Input 
          label="Password" 
          name="password" 
          type="password" 
          value={values.password} 
          onChange={handleChange} 
          placeholder="••••••••"
          required 
        />
        {mode === 'signup' && (
          <Select
            label="Role"
            name="role"
            value={values.role}
            onChange={handleChange}
            options={[
              { value: 'member', label: 'Team Member' },
              { value: 'admin', label: 'Administrator' }
            ]}
          />
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Working…' : mode === 'login' ? 'Sign in' : 'Create account'}
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-teal-800 dark:text-teal-100">
        {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
        <button
          type="button"
          onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
          className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          {mode === 'login' ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </div>
  )
}
