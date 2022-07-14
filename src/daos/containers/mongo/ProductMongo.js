import Container from './ContainerMongo.js'
import productSchema from '../../../databases/mongo/Schemas/ProductSchema.js'

export default class productsMongo extends Container {
  constructor () {
    super('products', productSchema)
  }
}
