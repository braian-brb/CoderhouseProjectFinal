import express, { urlencoded, json } from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { engine } from 'express-handlebars'
import { router as indexRoutes } from './routes/indexRoutes.routes.js'
import './databases/mongo/connectDB.js'
import { createRoles } from './libs/initialSetup.js'
import { errorHandler, loggerNonExistent, loggerRequest } from './middlewares/index.js'
// import morgan from 'morgan'

// INITIALIZATIONS
export const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
createRoles()

/* ------- SETTINGS ------- */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')

// MIDDLEWARES
app.use(urlencoded({ extended: true }))
app.use(json())
// app.use(morgan('dev'))

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

// LOGER REQUEST
app.use(loggerRequest)
// ROUTES
app.use(indexRoutes)
/* ------- VIEWS ------- */
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers: {

    }
  })
)

// NON EXISTENT ROUTE
app.use(loggerNonExistent)
// ERROR HANDLER
app.use(errorHandler)
