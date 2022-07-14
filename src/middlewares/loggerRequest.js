import { logger } from '../utils/index.utils.js'

export const loggerRequest = (req, res, next) => {
  logger.info(`${req.method} ${req.path}`)
  next()
}
