// TODO: CAMBIAR A IMPORTS DINAMICOS
// TODO: CORREGIR ERRORES y que no se detenga el sv
import config from '../config/config.js'

const { db } = config

let productDao
let cartDao

if (db.PERSIST === 'mongo') {
  import('./containers/mongo/ProductMongo.js')
    .then(({ default: ContainerProductMongo }) => (productDao = new ContainerProductMongo()))

  import('./containers/mongo/CartMongo.js')
    .then(({ default: ContainerCartMongo }) => (cartDao = new ContainerCartMongo()))
} else if (db.PERSIST === 'fs') {
  import('./containers/fs/ProductFS.js')
    .then(({ default: ContainerProductFs }) => (productDao = new ContainerProductFs()))

  import('./containers/fs/CartFs.js')
    .then(({ default: ContainerCartFs }) => (cartDao = new ContainerCartFs()))
} else if (db.PERSIST === 'firebase') {
  import('./containers/firebase/ProductFirebase.js')
    .then(({ default: ContainerProductFirebase }) => (productDao = new ContainerProductFirebase()))

  import('./containers/firebase/CartFirebase.js')
    .then(({ default: ContainerCartFirebase }) => (cartDao = new ContainerCartFirebase()))
}

export { productDao, cartDao }
