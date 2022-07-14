import config from '../../config/config.js'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const { firebase } = config

initializeApp({
  credential: cert(firebase.GOOGLE_APPLICATION_CREDENTIALS),
  databaseURL: firebase.databaseURL
})

const db = getFirestore()
db.settings({ ignoreUndefinedProperties: true })
export default db
