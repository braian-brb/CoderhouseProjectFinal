import Container from './ContainerMongo.js'
import productSchema from '../../../databases/mongo/Schemas/ProductSchema.js'

export default class ProductsMongo extends Container {
  constructor () {
    super('products', productSchema)
    this.value = Math.random(100)
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
