import express, { urlencoded, json } from 'express'
import { router as indexRouter } from './routes/index.routes.js'
import { router as productsRouter } from './routes/products.routes.js'
import { router as cartsRouter } from './routes/carts.routes.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
// INITIALIZATIONS
export const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// SETTINGS
app.set('views', path.join(__dirname, 'views'))
app.engine(
  '.hbs',
  engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  })
)
app.set('view engine', '.hbs')

// MIDDLEWARES
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(morgan('dev'))

// ROUTES
app.use(indexRouter)
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))
