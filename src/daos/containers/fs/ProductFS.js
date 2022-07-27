import ContainerFS from './ContainerFS.js'

export default class ProductFs extends ContainerFS {
  constructor () {
    super('products')
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
