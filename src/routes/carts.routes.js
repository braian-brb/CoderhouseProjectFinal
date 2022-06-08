import { Router } from 'express'
import { cartsCtrl } from '../controllers/carts.controllers.js'
const {
  createCart,
  deleteCart,
  addProductInCart,
  getProductsInCart,
  deleteProductInCart
} = cartsCtrl

export const router = Router()

router.post('/', createCart)
router.delete('/:idCart', deleteCart)
router.post('/:idCart/products/:idProduct', addProductInCart)
router.get('/:idCart/products', getProductsInCart)
router.delete('/:idCart/products/:idProduct', deleteProductInCart)
