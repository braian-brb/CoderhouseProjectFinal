import jwt from 'jsonwebtoken'
import config from '../config/config.js'
import User from '../databases/mongo/models/User.js'
import Role from '../databases/mongo/models/Role.js'
const { jwtConfig } = config
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    if (!token) return res.status(403).json({ mssg: 'No token provided' })

    const decoded = jwt.verify(token, jwtConfig.secret)
    req.userId = decoded.id
    const user = await User.findById(req.userId, { password: 0 })
    if (!user) res.status(404).json({ mssg: 'no user Found' })

    next()
  } catch (error) {
    return res.status(401).json({ mssg: 'Unauthorized' })
  }
}

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })
  for (const rol of roles) {
    if (rol.name === 'admin') {
      next()
      return
    }
  }
  return res.status(403).json({ mssg: 'Require Admin role' })
}
