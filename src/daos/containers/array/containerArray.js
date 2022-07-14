class ContainerArray {
  constructor () {
    this.containers = []
  }

  getAll () {
    return this.containers
  }

  getById (id) {
    return this.containers.find((container) => container.id === id)
  }

  create (data) {
    const container = new ContainerArray(data)
    this.containers.push(container)
    return container
  }

  update (id, data) {
    const container = this.getById(id)
    Object.assign(container, data)
    return container
  }

  deleteById (id) {
    const container = this.getById(id)
    const deletedItemIndex = this.containers.indexOf(container)
    this.containers.splice(deletedItemIndex, 1)
    return container
  }

  deleteAll () {
    this.containers = []
  }
}
export default ContainerArray
