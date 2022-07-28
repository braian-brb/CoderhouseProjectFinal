import CartRepository from '../repositories/cart.repository.js'

// TODO: PREGUNTAR SI NO SE PERMITEN ID REPETIDOS EN EL CART
// TODO: PREGUNTAR SI HABRIA QUE HACER ASOCIASION EN VEZ DE HACER UN ARRAY

export const cartModel = {}

export default class CartService {
  #cartRepository = new CartRepository()
  createCart = async () => {
    try {
      return await this.#cartRepository.createCart()
    } catch (error) {

    }
  }

  deleteCart = (id) => {
    try {
      return this.#cartRepository.deleteById(id)
    } catch (error) {

    }
  }

  addProductToCart = async (id, idProduct) => {
    try {
      return await this.#cartRepository.addProductToCart(id, idProduct)
    } catch (error) {

    }
  }

  getProductsInCart = async (id) => {
    try {
      return await this.#cartRepository.getProductsInCart(id)
    } catch (error) {

    }
  }

  deleteProductInCart = async (id, idProduct) => {
    try {
      return await this.#cartRepository.deleteProductInCart(id, idProduct)
    } catch (error) {

    }
  }

  // EXTRA
  getAll = () => {
    try {
      return this.#cartRepository.getAll()
    } catch (error) {

    }
  }
}
