import dotenv from 'dotenv'
import parseArgs from 'minimist'
dotenv.config()

const args = parseArgs(process.argv.slice(2))
const config = {

  server: {
    PORT: process.env.PORT || 8080,
    HOST: process.env.HOST || 'localhost',
    MODE: args.mode || args.modo || 'fork'
  },

  db: {
    PERSIST: args.persist || args.db || 'mongo'
  },

  mongo: {
    URI: process.env.MONGO_DB_URI,
    DB_HOST: process.env.MONGO_DB_HOST || 'mongodb://localhost:27017',
    DB_FINALPROJECT_DATABASE: process.env.DB_FINALPROJECT_DATABASE || 'FinalProject'
  },
  firebase: {
    databaseURL: process.env.FIREBASE_databaseURL || 'firebase-url',
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS || 'credentials-google'
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET || 'secretjwt'
  }

}

export default config
