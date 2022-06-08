import express from 'express'
import { router as indexRouter } from './routes/index.routes.js'
export const app = express()

// ROUTES
app.use(indexRouter)
