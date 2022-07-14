import cluster from 'cluster'
import { cpus } from 'os'
import { app } from './app.js'
import config from './config/config.js'
import logger from './utils/logger.js'

const { server } = config

const MODE = (server.MODE).toUpperCase()

const upServer = (mode) => {
  app.listen(server.PORT, () => {
    logger.info(`${mode}: PID [${process.pid}] Server running on http://${server.HOST}:${server.PORT}`)
  })
}

if (MODE === 'CLUSTER') {
  const numCPUs = cpus().length
  if (cluster.isPrimary) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }
  } else {
  // Up server in cluster mode
    upServer(MODE)
    logger.info(`Worker cluster PID: [${process.pid}] started`)
  }
} else {
  // Up server in fork mode
  upServer(MODE)
}
