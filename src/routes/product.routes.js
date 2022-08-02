/* eslint-disable no-unused-vars */
import { Router } from 'express'
import productsController from '../controllers/product.controllers.js'
import { verifyToken, isAdmin } from '../middlewares/index.js' // verifica si es usuario y si es admin

export const router = Router()
const { getProducts, addProduct, updateProduct, deleteProduct } = productsController

// Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
router.get('/:id?', getProducts)
// Para incorporar productos al listado (disponible para administradores)
router.post('/', addProduct)
// Actualiza un producto por su id (disponible para administradores)
router.put('/:id', updateProduct)
// Borra un producto por su id (disponible para administradores)
router.delete('/:id', deleteProduct)
