import { productDao } from '../daos/index.daos.js'

export default class ProductRepository {
  getById (id) {
    try {
      return productDao.getById(id)
    } catch (error) {

    }
  }

  getAll () {
    try {
      return productDao.getAll()
    } catch (error) {

    }
  }

  // TODO: Arreglar que el codigo sea unico   no tire error si hay repetido
  createProduct (name, price, code, stock, thumbnail, description) {
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

  updateProduct (id, newData) {
    try {
      return productDao.update(id, newData)
    } catch (error) {

    }
  }

  deleteProduct = (id) => {
    try {
      return productDao.deleteById(id)
    } catch (error) {

    }
  }
}
