import { app } from './server.js'
import * as config from './config.js'

app.listen(config.PORT, () => {
  console.log(`Server runing on http://${config.HOST}:${config.PORT}`)
})
