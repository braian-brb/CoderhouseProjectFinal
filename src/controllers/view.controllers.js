export const viewCtrl = {}

viewCtrl.renderIndex = (req, res) => {
  res.render('index')
}

viewCtrl.renderProducts = (req, res) => {
  res.render('products')
}

viewCtrl.renderProductsForm = (req, res) => {
  res.render('product-form')
}

viewCtrl.renderCarts = (req, res) => {
  res.render('carts')
}
