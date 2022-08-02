import ProductRepository from '../repositories/product.repository.js'

export default class ProductService {
  #productRepository = new ProductRepository()
  async getById (id) {
    try {
      return await this.#productRepository.getById(id)
    } catch (error) {

    }
  }

  getAll = async () => {
    try {
      return await this.#productRepository.getAll()
    } catch (error) {

    }
  }

  saveProduct = async (name, price, code, stock, thumbnail, description) => {
    try {
      const newProduct = {
        name,
        price,
        code,
        stock,
        thumbnail,
        description
      }
      return await this.#productRepository.createProduct(newProduct)
    } catch (error) {

    }
  }

  updateProduct = async (id, newData) => {
    try {
      return this.#productRepository.updateProduct(id, newData)
    } catch (error) {

    }
  }

  // TODO: Arreglar que el codigo sea unico   no tire error si hay repetido

  deleteProduct = async (id) => {
    try {
      return this.#productRepository.deleteProduct(id)
    } catch (error) {

    }
  }
}
