import { Router } from 'express'
import productsController from '../controllers/product.controllers.js'
import { verifyToken, isAdmin } from '../middlewares/index.js' // verifica si es usuario y si es admin

export const router = Router()

// Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
router.get('/:id?', productsController.getProducts)
// Para incorporar productos al listado (disponible para administradores)
router.post('/', [verifyToken, isAdmin], productsController.addProduct)
// Actualiza un producto por su id (disponible para administradores)
router.put('/:id', [verifyToken, isAdmin], productsController.updateProduct)
// Borra un producto por su id (disponible para administradores)
router.delete('/:id', [verifyToken, isAdmin], productsController.deleteProduct)
