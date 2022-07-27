import config from '../config/config.js'

const { db } = config
class ProductDaoFactory {
  async create (persist) {
    switch (persist) {
      case 'mongo':{
        const { default: ContainerProductMongo } = await import('./containers/mongo/ProductMongo.js')
        return ContainerProductMongo.getInstance()
      }
      case 'fs':{
        const { default: ContainerProductFs } = await import('./containers/fs/ProductFS.js')
        return ContainerProductFs.getInstance()
      }
      case 'firebase':{
        const { default: ContainerProductFirebase } = await import('./containers/firebase/ProductFirebase.js')
        return ContainerProductFirebase.getInstance()
      }
    }
  }
}

class CartDaoFactory {
  async create (persist) {
    switch (persist) {
      case 'mongo':{
        const { default: ContainerCartMongo } = await import('./containers/mongo/CartMongo.js')
        return ContainerCartMongo.getInstance()
      }
      case 'fs':{
        const { default: ContainerCartFs } = await import('./containers/fs/CartFs.js')
        return ContainerCartFs.getInstance()
      }
      case 'firebase':{
        const { default: ContainerCartFirebase } = await import('./containers/firebase/CartFirebase.js')
        return ContainerCartFirebase.getInstance()
      }
    }
  }
}

const productDaoFactory = new ProductDaoFactory()
const cartDaoFactory = new CartDaoFactory()

export const productDao = await productDaoFactory.create(db.PERSIST)
export const cartDao = await cartDaoFactory.create(db.PERSIST)
