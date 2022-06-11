export const indexCtrl = {}

indexCtrl.renderIndex = (req, res) => {
  res.render('index')
}

indexCtrl.renderProducts = (req, res) => {
  res.render('products')
}

indexCtrl.renderProductsForm = (req, res) => {
  res.render('product-form')
}

indexCtrl.renderCarts = (req, res) => {
  res.render('carts')
}
