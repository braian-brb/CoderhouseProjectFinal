import { cartDao, productDao } from '../daos/index.daos.js'

// TODO: PREGUNTAR SI NO SE PERMITEN ID REPETIDOS EN EL CART
// TODO: PREGUNTAR SI HABRIA QUE HACER ASOCIASION EN VEZ DE HACER UN ARRAY

export const cartModel = {}

cartModel.createCart = () => {
  try {
    return cartDao.create()
  } catch (error) {

  }
}

cartModel.deleteCart = (id) => {
  try {
    return cartDao.deleteById(id)
  } catch (error) {

  }
}

cartModel.addProductToCart = async (id, idProduct) => {
  try {
    const cartToUpdate = await cartDao.getById(id)
    console.log(cartToUpdate)
    const product = await productDao.getById(idProduct)
    cartToUpdate.products.push(product)
    return await cartDao.update(id, cartToUpdate)
  } catch (error) {

  }
}

cartModel.getProductsInCart = async (id) => {
  try {
    const cartFind = await cartDao.getById(id)
    return cartFind.products
  } catch (error) {

  }
}

cartModel.deleteProductInCart = async (id, idProduct) => {
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
cartModel.getAll = () => {
  try {
    return cartDao.getAll()
  } catch (error) {

  }
}
