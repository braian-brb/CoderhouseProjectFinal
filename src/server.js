import express from 'express'
import { router as indexRouter } from './routes/index.routes.js'
import { router as productsRouter } from './routes/products.routes.js'
export const app = express()

// ROUTES
app.use(indexRouter)
app.use('/api/products', productsRouter)
