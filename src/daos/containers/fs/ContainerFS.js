import fs from 'fs'

const auxFunct = {}
auxFunct.getObjsParsed = async (path) => {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

auxFunct.saveDataSerialized = async (path, data) => {
  const serializeData = JSON.stringify(data, null, 2)
  return fs.writeFileSync(path, serializeData)
}

class ContainerFS {
  constructor (name) {
    this.path = `./src/databases/fs/${name}.txt`
    if (!fs.existsSync(this.path)) {
      fs.writeFileSync(this.path, '[]')
    }
  }

  async getAll () {
    try {
      return await auxFunct.getObjsParsed(this.path)
    } catch (error) {
      console.log(error)
    }
  }

  async getById (id) {
    try {
      const allObjs = await this.getAll()
      return allObjs.find((obj) => obj.id === Number(id))
    } catch (error) {
      console.log(error)
    }
  }

  // TODO: cuando creo se pasa de array a objeto y por eso despues no puedo pushear
  async create (data) {
    try {
      const allObjs = await this.getAll()
      data.id = allObjs.length + 1
      allObjs.push(data)
      auxFunct.saveDataSerialized(this.path, allObjs)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async update (id, data) {
    try {
      const allObjs = await this.getAll()
      console.log(id)
      const objsFind = allObjs.findIndex((obj) => obj.id === Number(id))

      if (objsFind === -1) {
        return { error: 'Product not found' }
      }

      data.id = allObjs[objsFind].id
      data.timestamp = new Date().toLocaleString()
      allObjs[objsFind] = data
      auxFunct.saveDataSerialized(this.path, allObjs)

      return data
    } catch (error) {
      console.log(error)
    }
  }

  async deleteById (id) {
    try {
      const allObjs = await this.getAll()
      console.log(id)
      const dataUpdated = allObjs.filter((obj) => obj.id !== Number(id))
      console.log(dataUpdated)

      auxFunct.saveDataSerialized(this.path, dataUpdated)
      return dataUpdated
    } catch (error) {
      console.log(error)
    }
  }

  async deleteAll () {
    try {
      const newObjs = []
      auxFunct.saveDataSerialized(this.path, newObjs)
      return newObjs
    } catch (error) {
      console.log(error)
    }
  }
}

export default ContainerFS
