import { logger } from '../utils/index.utils.js'
export const loggerNonExistent = (req, res, next) => {
  try {
    logger.warn(`Non-existent resource URL: ${req.url} Method: ${req.method}`)
    next()
  } catch (error) {
    console.log(error)
  }
}
