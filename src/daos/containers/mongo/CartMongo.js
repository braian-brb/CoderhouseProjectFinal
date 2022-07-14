import Container from './ContainerMongo.js'
import cartSchema from '../../../databases/mongo/Schemas/CartSchema.js'

export default class cartsMongo extends Container {
  constructor () {
    super('carts', cartSchema)
  }

  // TODO: No deberia haber logica en la dao creo, pero weno solucion momentanea
  async getProductInCart (cartFind, idProduct) {
    return await cartFind.products.find((product) => product._id.toJSON() === idProduct)
  }

  // async addProductToCart (idCart, product) {
  //   const cartToUpdate = await this.getCart(idCart)
  //   cartToUpdate.products.push(product)
  //   return this.update(idCart, cartToUpdate)
  // }
}
