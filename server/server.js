import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRouters from './src/routes'
import connectDatabase from './src/config/connectDatabase'

const app = express()
app.use(cors({
  origin: process.env.CLIENT_URL,
  method: ["POST", "GET", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

initRouters(app)
connectDatabase()

const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`)
})
