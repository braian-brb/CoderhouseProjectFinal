/* eslint-disable no-undef */
import axios from 'axios'
import chai from 'chai'
import chaiHttp from 'chai-http'

const { expect } = chai

chai.use(chaiHttp)

const url = 'http://localhost:3535/api'
// completar con un productID
const products = await axios.get('http://localhost:3535/api/products/')
const productId = products.data.products[0]._id

describe('get  products', () => {
  it('get products', (done) => {
    chai
      .request(url)
      .get('/products')
      .end(function (err, res) {
        if (err) throw new Error(err)
        console.log(res.body.products[0])
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('Insert a new product', () => {
  it('should create a new product', (done) => {
    chai
      .request(url)
      .post('/products')
      .send({
        name: 'testChai',
        description: 'testChai',
        code: `${Math.random(100)}`,
        thumbnail: 'testChai',
        price: 1,
        stock: 1
      })
      .end(function (err, res) {
        if (err) throw new Error(err)
        console.log(res.body)
        expect(res).to.have.status(201)
        done()
      })
  })
})

describe(`update a product ${productId}`, () => {
  it(`update a product ${productId}`, (done) => {
    chai
      .request(url)
      .put(`/products/${productId}`)
      .send({
        name: 'updated Chai',
        description: 'updated Chai',
        price: 999,
        stock: 999
      })
      .end(function (err, res) {
        if (err) throw new Error(err)
        console.log(res.body)
        expect(res).to.have.status(202)
        done()
      })
  })
})

// describe(`delete a product ${productId}`, () => {
//   it(`delete a product ${productId}`, (done) => {
//     chai
//       .request(url)
//       .delete(`/products/${productId}`)
//       .end(function (err, res) {
//         if (err) throw new Error(err)
//         console.log(res.body)
//         expect(res).to.have.status(204)
//         done()
//       })
//   })
// })
