import { Router } from 'express'

import { viewCtrl } from '../controllers/view.controllers.js'

const router = Router()

const {
  renderIndex,
  renderProducts,
  renderProductsForm,
  renderCarts
} = viewCtrl

router.get('/', renderIndex)
router.get('/products', renderProducts)
router.get('/products/add', renderProductsForm)
router.get('/carts', renderCarts)

export default router
