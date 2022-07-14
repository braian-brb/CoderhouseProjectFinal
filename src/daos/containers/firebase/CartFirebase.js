import ContainerFirebase from './containerFirebase.js'

export default class cartsFirebase extends ContainerFirebase {
  constructor () {
    super('carts')
  }

  async getProductInCart (cartFind, idProduct) {
    return await cartFind.products.find((product) => product.id === idProduct)
  }

  create = async () => {
    const cart = {
      products: [],
      date: new Date().toLocaleString()
    }
    return await super.create(cart)
  }
}
