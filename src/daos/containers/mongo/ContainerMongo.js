import mongoose from 'mongoose'

export default class Container {
  constructor (collection, schema) {
    this.collection = mongoose.model(collection, schema)
  }

  async getAll () {
    try {
      const result = await this.collection.find()
      return result
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  async getById (id) {
    try {
      const result = await this.collection.findById(id)
      return result
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  async create (data) {
    try {
      const result = await this.collection.create(data)
      return result
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  async update (id, data) {
    try {
      const result = await this.collection.findByIdAndUpdate(id, data, { new: true })
      return result
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  async deleteById (id) {
    try {
      const result = await this.collection.findByIdAndDelete(id)
      return result
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  async deleteAll () {
    try {
      const result = await this.collection.deleteMany()
      return result
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
}
