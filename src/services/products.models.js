import { productDao } from '../daos/index.daos.js'

export const productModel = {}

productModel.getProduct = (id) => {
  Number(id)
  return productDao.getObjs(id)
}

productModel.getProducts = () => {
  return productDao.getObjs()
}

productModel.addProduct = (name, price, code, stock, thumbnail, description) => {
  const newProduct = {
    name,
    price,
    code,
    stock,
    thumbnail,
    description
  }
  return productDao.save(newProduct)
}
