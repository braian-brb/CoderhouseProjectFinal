export const cartsCtrl = {}

cartsCtrl.createCart = (req, res) => {
  res.send('POST: Cart created sucessfully')
}

cartsCtrl.deleteCart = (req, res) => {
  const { idCart } = req.params
  res.send(`DELETE: Cart [${idCart}] delete sucessfully`)
}

cartsCtrl.getProductsInCart = (req, res) => {
  const { idCart } = req.params
  res.send(`GET: List all products of cart [${idCart}]`)
}

cartsCtrl.addProductInCart = (req, res) => {
  const { idCart, idProduct } = req.params
  res.send(`POST: Add product [${idProduct}] to Cart [${idCart}]`)
}

cartsCtrl.deleteProductInCart = (req, res) => {
  const { idCart, idProduct } = req.params
  res.send(`DELETE: Product [${idProduct}] delete succcessfully from the cart [${idCart}] `)
}
