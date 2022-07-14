import db from '../../../databases/firebase/firebase.js'
export default class ContainerFirebase {
  constructor (collection) {
    this.collection = db.collection(collection)
  }

  async getAll () {
    try {
      const result = await this.collection.get()
      const items = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      return items
    } catch (error) {
      console.log(error)
    }
  }

  async getById (id) {
    try {
      const result = await this.collection.doc(id).get()
      return {
        id: result.id,
        ...result.data()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async create (data) {
    try {
      return await this.collection.add(data)
    } catch (error) {
      console.log(error)
    }
  }

  async update (id, data) {
    try {
      return this.collection.doc(id).update(data)
    } catch (error) {
      console.log(error)
    }
  }

  async deleteById (id) {
    try {
      return await this.collection.doc(id).delete()
    } catch (error) {
      console.log(error)
    }
  }

  async deleteAll () {
    try {
      const result = await this.collection.get()
      result.docs.forEach((doc) => doc.ref.delete())
    } catch (error) {
      console.log(error)
    }
  }
}
