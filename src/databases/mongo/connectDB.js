import mongoose from 'mongoose'
import config from '../../config/config.js'

const { mongo } = config

const MONGODB_URI = `${mongo.DB_HOST}/${mongo.DB_FINALPROJECT_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log(`database connected: ${db.connection.name}`))
  .catch(err => { throw new Error(err) })
