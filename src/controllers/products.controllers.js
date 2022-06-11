import { productModel } from '../services/products.models.js'
export const productsCtrl = {}

productsCtrl.getProducts = (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      const product = productModel.getProduct(id)
      res.status(200).json({ product })
    } else {
      const allProducts = productModel.getProducts()
      res.status(200).json({ allProducts })
    }
  } catch (error) {
    res.status(400).json({ mssg: error })
    throw new Error(error)
  }
}

productsCtrl.addProduct = (req, res) => {
  const {
    name,
    price,
    code,
    stock,
    thumbnail,
    description
  } = req.body
  const product = productModel.addProduct(name, price, code, stock, thumbnail, description)
  if (!product) res.status(400).json({ mssg: 'ERROR ADDING PRODUCT' })
  else res.status(200).json({ mssg: 'Product added succesfully' })
}

productsCtrl.updateProduct = (req, res) => {
  const { id } = req.params
  res.send(`Update product [${id}] successfully`)
}

productsCtrl.deleteProduct = (req, res) => {
  const { id } = req.params
  res.send(`Delete product [${id}] successfully`)
}
