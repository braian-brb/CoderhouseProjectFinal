import jwt from 'jsonwebtoken'
import User from '../databases/mongo/models/User.js'
import Role from '../databases/mongo/models/Role.js'
import config from '../config/config.js'

const { jwtConfig } = config

export const authModel = {}
const auxFunct = {}

authModel.createUser = async (username, email, password, roles) => {
  try {
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password)
    })
    newUser.roles = await auxFunct.assignRole(roles)

    const savedUser = await newUser.save()
    return savedUser
  } catch (error) {

  }
}

// TODO: solo funciona con mongo por el ._id
authModel.signTokenJWT = (user) => {
  try {
    const tokenJwt = jwt.sign({ id: user._id }, jwtConfig.secret, {
      expiresIn: 86400 // 24 hs
    })
    return tokenJwt
  } catch (error) {

  }
}

authModel.findUser = async (email) => {
  try {
    const userFound = await User.findOne({ email }).populate('roles')
    return userFound
  } catch (error) {

  }
}

authModel.matchPassword = async (password, compare) => {
  try {
    return await User.comparePassword(password, compare.password)
  } catch (error) {

  }
}

auxFunct.assignRole = async (roles) => {
  try {
    if (!roles) {
      const roleUser = await Role.findOne({ name: 'user' })
      return [roleUser._id]
    }
    const foundRoles = await Role.find({ name: { $in: roles } })
    return foundRoles.map(role => role._id)
  } catch (error) {

  }
}
