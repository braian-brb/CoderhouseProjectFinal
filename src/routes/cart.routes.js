import { Router } from 'express'
import { cartCtrl } from '../controllers/cart.controllers.js'

const {
  getAll,
  createCart,
  deleteCart,
  addProductToCart,
  getProductsInCart,
  deleteProductInCart
} = cartCtrl

export const router = Router()

// Crea un carrito y devuelve su id
router.post('/', createCart)

// Vacía un carrito y lo elimina
router.delete('/:id', deleteCart)

// Para incorporar productos al carrito por su id de producto
router.post('/:id/products/:idProduct', addProductToCart)

// Me permite listar todos los productos guardados en el carrito
router.get('/:id/products', getProductsInCart)

// Eliminar un producto del carrito por su id de carrito y de producto
router.delete('/:id/products/:idProduct', deleteProductInCart)

// EXTRAS
router.get('/', getAll)
