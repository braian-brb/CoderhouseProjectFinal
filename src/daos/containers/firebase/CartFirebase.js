import ContainerFirebase from './containerFirebase.js'

export default class SingletonCartsFirebase extends ContainerFirebase {
  constructor () {
    super('carts')
    this.value = Math.random(100)
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

  printValue () {
    console.log(this.value)
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new this()
    }
    return this.instance
  }
}
