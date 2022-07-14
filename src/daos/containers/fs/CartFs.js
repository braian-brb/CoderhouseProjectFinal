import ContainerFS from './ContainerFS.js'

export default class CartFs extends ContainerFS {
  constructor () {
    super('carts')
  }

  // TODO: No deberia haber logica en la dao creo, pero weno solucion momentanea

  async getProductInCart (cartFind, idProduct) {
    return await cartFind.products.find((product) => product.id === Number(idProduct))
  }

  create = async () => {
    const cart = {
      products: [],
      date: new Date().toLocaleString()
    }
    return await super.create(cart)
  }
}
