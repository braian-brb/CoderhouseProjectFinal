import { Router } from 'express'
import { authCtrl } from '../controllers/auth.controllers.js'

const { signUp, signIn } = authCtrl
const router = Router()

router.post('/signUp', signUp)
router.post('/signIn', signIn)

export default router
