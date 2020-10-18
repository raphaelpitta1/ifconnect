import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import routes from './routes'

dotenv.config({
  path: process.env.TS_NODE_DEV ? '.env.development' : '.env'
})

const app = express()

app.get('/', (req, res) => res.send('ifconnect'))
app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

try {
  mongoose.connect('mongodb://ifconnect:If.2020@cluster0-shard-00-00.txtjy.gcp.mongodb.net:27017,cluster0-shard-00-01.txtjy.gcp.mongodb.net:27017,cluster0-shard-00-02.txtjy.gcp.mongodb.net:27017/ifconnect2?ssl=true&replicaSet=atlas-40oofr-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} catch (error) {
  console.log(error)
}

app.listen(process.env.PORT, () => console.log(process.env.PORT, process.env.TS_NODE_DEV))
