import ContainerFirebase from './containerFirebase.js'

export default class ProductFirebaseSingleton extends ContainerFirebase {
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
