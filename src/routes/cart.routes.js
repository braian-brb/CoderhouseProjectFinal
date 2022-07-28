import { Router } from 'express'
import cartController from '../controllers/cart.controllers.js'

export const router = Router()

// Crea un carrito y devuelve su id
router.post('/', cartController.createCart)

// Vacía un carrito y lo elimina
router.delete('/:id', cartController.deleteCart)

// Para incorporar productos al carrito por su id de producto
router.post('/:id/products/:idProduct', cartController.addProductToCart)

// Me permite listar todos los productos guardados en el carrito
router.get('/:id/products', cartController.getProductsInCart)

// Eliminar un producto del carrito por su id de carrito y de producto
router.delete('/:id/products/:idProduct', cartController.deleteProductInCart)

// EXTRAS
router.get('/', cartController.getAll)
