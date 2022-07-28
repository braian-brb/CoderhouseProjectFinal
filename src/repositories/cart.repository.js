import { cartDao, productDao } from '../daos/index.daos.js'

export default class CartServices {
  createCart = async () => {
    try {
      return await cartDao.create()
    } catch (error) {

    }
  }

  deleteCartById = (id) => {
    try {
      return cartDao.deleteById(id)
    } catch (error) {

    }
  }

  addProductToCart = async (id, idProduct) => {
    try {
      const cartToUpdate = await cartDao.getById(id)
      console.log(cartToUpdate)
      const product = await productDao.getById(idProduct)
      cartToUpdate.products.push(product)
      return await cartDao.update(id, cartToUpdate)
    } catch (error) {

    }
  }

  getProductsInCart = async (id) => {
    try {
      const cartFind = await cartDao.getById(id)
      return cartFind.products
    } catch (error) {

    }
  }

  deleteProductInCart = async (id, idProduct) => {
    try {
      const cartFind = await cartDao.getById(id)
      const productFind = await cartDao.getProductInCart(cartFind, idProduct)
      const deletedItemIndex = cartFind.products.indexOf(productFind)
      console.log(deletedItemIndex)
      cartFind.products.splice(deletedItemIndex, 1)
      await cartDao.update(id, cartFind)

      return cartFind
    } catch (error) {

    }
  }

  // EXTRA
  getAll = () => {
    try {
      return cartDao.getAll()
    } catch (error) {

    }
  }
}
