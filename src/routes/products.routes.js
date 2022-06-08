import { Router } from 'express'
import { productsCtrl } from '../controllers/products.controllers.js'

const {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct
} = productsCtrl

export const router = Router()

router.get('/:id?', getProducts)
router.post('/', addProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
