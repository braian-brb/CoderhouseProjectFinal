import Role from '../databases/mongo/models/Role.js'
export const createRoles = async () => {
  try {
    const countRoles = await Role.estimatedDocumentCount()
    if (countRoles > 0) return

    const values = await Promise.all([
      new Role({ name: 'user' }).save(),
      new Role({ name: 'admin' }).save()
    ])
    console.log(values)
  } catch (error) {
    console.log(error)
  }
}
