import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cron from 'node-cron'
import authRoutes from './routes/authRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import userRoutes from './routes/userRoutes.js'
import activityRoutes from './routes/activityRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'

dotenv.config()
await connectDB()

const app = express()

const defaultAllowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://task-manager-sigma-nine-18.vercel.app',
]

const allowedOrigins = (process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((o) => o.trim()).filter(Boolean)
  : defaultAllowedOrigins
).map((o) => o.replace(/\/+$/, ''))

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true) // allow non-browser clients
      const normalized = origin.replace(/\/+$/, '')
      if (allowedOrigins.includes(normalized)) return callback(null, true)
      return callback(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true,
  })
)
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Team Task Manager API is running' })
})

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true })
})

app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/users', userRoutes)
app.use('/api/activities', activityRoutes)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

export default app
