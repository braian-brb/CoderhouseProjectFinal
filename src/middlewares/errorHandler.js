import { logger } from '../utils/index.utils.js'
export const errorHandler = (error, req, res, next) => {
  logger.error(error)
  res.status(500).json({ error: `Something wrong: ${error.message}` })
}
