import { authModel } from '../services/auth.model.js'
import { logger } from '../utils/index.utils.js'

const errorMessage = 'An error has occurred'

export const authCtrl = {}
authCtrl.signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body
    if (!username && !email && !password) return res.status(400).json({ mssg: 'Need username, email and password' })
    const savedUser = await authModel.createUser(username, email, password, roles)
    console.log(savedUser)
    const tokenJwt = authModel.signTokenJWT(savedUser)
    res
      .status(201)
      .json({ tokenJwt })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}

authCtrl.signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const userFound = authModel.findUser(email)
    if (!userFound) return res.status(400).json({ mssg: 'User Not Found' })
    const matchPassword = await authModel.matchPassword(password, userFound.password)
    if (!matchPassword) return res.status(401).json({ token: null, mssg: 'Invalid Password' })
    const tokenJwt = authModel.signTokenJWT(userFound)

    res.json({ tokenJwt })
  } catch (error) {
    logger.error(error)
    res.status(500).json({ message: errorMessage })
  }
}
