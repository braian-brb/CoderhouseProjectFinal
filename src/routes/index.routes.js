import { Router } from 'express'
import { indexCtrl } from '../controllers/index.controllers.js'

const {
  renderIndex,
  renderProducts,
  renderProductsForm,
  renderCarts
} = indexCtrl

export const router = Router()

router.get('/', renderIndex)
router.get('/products', renderProducts)
router.get('/products/add', renderProductsForm)
router.get('/carts', renderCarts)
