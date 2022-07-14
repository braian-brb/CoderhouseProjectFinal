import { Router } from 'express'
import { router as productRouter } from './product.routes.js'
import { router as cartRouter } from './cart.routes.js'
import authRouter from './auth.routes.js'
import userRouter from './user.routes.js'

export const router = Router()

router.use('/api/products', productRouter)
router.use('/api/carts', cartRouter)
router.use('/api/auth', authRouter)
router.use('/api/user', userRouter)
