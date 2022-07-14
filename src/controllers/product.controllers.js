import { productModel } from '../services/product.models.js'
import { logger } from '../utils/index.utils.js'

export const productsCtrl = {}
const errorMessage = 'An error has occurred'

productsCtrl.getProducts = async (req, res) => {
  try {
    let products
    const { id } = req.params
    if (!id) {
      products = await productModel.getAll()
    } else {
      products = await productModel.getById(id)
    }
    res
      .status(200)
      .json({ products })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

productsCtrl.addProduct = (req, res) => {
  try {
    const {
      name,
      price,
      code,
      stock,
      thumbnail,
      description
    } = req.body
    const productValidate = name && code
    if (!productValidate) {
      throw new Error('The product need Name and Code')
    }
    const product = productModel.saveProduct(name, price, code, stock, thumbnail, description)
    if (!product) {
      res
        .status(400)
        .json({ mssg: 'ERROR ADDING PRODUCT' })
    } else {
      res
        .status(201)
        .json({ mssg: 'Product added succesfully' })
    }
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

productsCtrl.updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    const newData = {
      name: req.body.name,
      price: req.body.price,
      code: req.body.code,
      stock: req.body.stock,
      thumbnail: req.body.thumbnail,
      description: req.body.description
    }

    const updatedProduct = await productModel.updateProduct(id, newData)
    res
      .status(202)
      .json({ updatedProduct })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

productsCtrl.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    await productModel.deleteProduct(id)
    res
      .status(204)
      .json({})
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}
