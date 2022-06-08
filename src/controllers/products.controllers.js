export const productsCtrl = {}

productsCtrl.getProducts = (req, res) => {
  const { id } = req.params
  if (!id) {
    res.send('Return all products')
  } else {
    res.send(`Products with ID: ${id}`)
  }
}

productsCtrl.addProduct = (req, res) => {
  const { name } = req.body
  res.send(`Product add with name: ${name}`)
}

productsCtrl.updateProduct = (req, res) => {
  const { id } = req.params
  res.send(`Update product [${id}] successfully`)
}

productsCtrl.deleteProduct = (req, res) => {
  const { id } = req.params
  res.send(`Delete product [${id}] successfully`)
}
