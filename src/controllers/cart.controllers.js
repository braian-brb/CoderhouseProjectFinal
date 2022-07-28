import CartServices from '../services/cart.services.js'
import { logger } from '../utils/index.utils.js'

const errorMessage = 'An error has occurred'

const cartCtrl = {}
const cartServices = new CartServices()

// TODO: no todo va a salir bien papito ponele un trycatch
cartCtrl.createCart = async (req, res) => {
  try {
    const result = await cartServices.createCart()
    res
      .status(201)
      .json({
        mssg: 'created Successfully',
        cartID: result.id
      })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

cartCtrl.deleteCart = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    await cartServices.deleteCart(id)
    res
      .status(200)
      .json({ mssg: 'Deleted successfully' })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

cartCtrl.addProductToCart = async (req, res) => {
  try {
    const { id, idProduct } = req.params
    if (!id && !idProduct) res.status(400).json({ mssg: 'error' })
    await cartServices.addProductToCart(id, idProduct)
    res
      .status(200)
      .json({ mssg: `added product ${idProduct} to cart ${id} successfully` })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

cartCtrl.getProductsInCart = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    const products = await cartServices.getProductsInCart(id)
    res
      .status(200)
      .json({
        cartID: id,
        products
      })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

cartCtrl.deleteProductInCart = async (req, res) => {
  try {
    const { id, idProduct } = req.params
    if (!id && !idProduct) res.status(400).json({ mssg: 'error' })
    const cartFind = await cartServices.deleteProductInCart(id, idProduct)
    res
      .status(200)
      .json({ cartFind })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

// EXTRAS
cartCtrl.getAll = async (req, res) => {
  try {
    const carts = await cartServices.getAll()
    res
      .status(200)
      .json({ carts })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

export default cartCtrl
