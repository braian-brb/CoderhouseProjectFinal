import fs from 'fs'

class Container {
  constructor (name) {
    // this.path = `/database/fs/${name}`
    this.path = name
    if (!fs.existsSync(this.path)) {
      fs.writeFileSync(this.path, '[]')
    }
  }

  getObjs = (id) => {
    try {
      const allObjs = JSON.parse(fs.readFileSync(this.path, 'utf-8'))
      if (!id) {
        return allObjs
      } else {
        const objFind = allObjs.find((obj) => obj.id === id)
        return objFind
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  save = (obj) => {
    try {
      const allObjs = this.getObjs()
      obj.id = allObjs.length + 1
      obj.timestamp = new Date().toLocaleString()
      allObjs.push(obj)
      fs.writeFileSync(this.path, JSON.stringify(allObjs, null, 2))
      return obj
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default Container
