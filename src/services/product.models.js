import { productDao } from '../daos/index.daos.js'

export const productModel = {}

productModel.getById = (id) => {
  try {
    return productDao.getById(id)
  } catch (error) {

  }
}

productModel.getAll = () => {
  try {
    return productDao.getAll()
  } catch (error) {

  }
}

// TODO: Arreglar que el codigo sea unico   no tire error si hay repetido
productModel.saveProduct = (name, price, code, stock, thumbnail, description) => {
  try {
    const newProduct = {
      name,
      price,
      code,
      stock,
      thumbnail,
      description
    }
    return productDao.create(newProduct)
  } catch (error) {

  }
}

productModel.updateProduct = (id, newData) => {
  try {
    return productDao.update(id, newData)
  } catch (error) {

  }
}
productModel.deleteProduct = (id) => {
  try {
    return productDao.deleteById(id)
  } catch (error) {

  }
}
