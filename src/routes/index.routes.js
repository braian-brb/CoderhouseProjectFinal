import { Router } from 'express'
import { indexCtrl } from '../controllers/index.controllers.js'

const { helloWorld } = indexCtrl

export const router = Router()

router.get('/', helloWorld)
