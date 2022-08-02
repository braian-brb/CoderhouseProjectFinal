/* eslint-disable no-unused-vars */
import axios from 'axios'

async function getProductsTest (idProduct) {
  try {
    let response
    if (!idProduct) {
      response = await axios.get('http://localhost:3535/api/products')
      return response.data
    }
    response = await axios.get(`http://localhost:3535/api/products/${idProduct}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function addProductTest () {
  try {
    const product = {
      name: 'test',
      description: 'test',
      code: `${Math.random(100)}`,
      thumbnail: 'test',
      price: 1,
      stock: 1
    }
    const response = await axios.post('http://localhost:3535/api/products/', product, {
      headers: {
        'x-access-token': 'my secret token'
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function updateProductTest (idProduct) {
  try {
    const product = {
      name: 'updated',
      description: 'updated',
      code: `${Math.random(100)}`,
      thumbnail: 'updated',
      price: 1,
      stock: 1
    }
    const response = await axios.put(`http://localhost:3535/api/products/${idProduct}`, product, {
      headers: {
        'x-access-token': 'my secret token'
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function deleteProductTest (idProduct) {
  try {
    const response = await axios.delete(`http://localhost:3535/api/products/${idProduct}`, {
      headers: {
        'x-access-token': 'my secret token'
      }
    })
    if (response.status === 204) {
      return { mssg: 'DELETED' }
    }
    return { mssg: 'ANY WRONG' }
  } catch (error) {
    console.log(error)
  }
}
const products = await axios.get('http://localhost:3535/api/products/')
const productId = products.data.products[0]._id

console.log(await getProductsTest(productId))
console.log(await addProductTest())
console.log(await updateProductTest(productId))
// console.log(await deleteProductTest(productId))
