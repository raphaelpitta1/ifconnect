/* eslint-disable no-unused-vars */
import express, { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import SessionController from './controllers/SessionController'
import FilesController from './controllers/FilesController'
import uploadConfig from './config'
const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/api/session', SessionController.store)

routes.post('/api/file', upload.single('file'), FilesController.store)
routes.get('/api/file', FilesController.index)
routes.get('/api/download/:file', (req: Request, res: Response) => {
  const { file } = req.params
  res.download(`${path.resolve(__dirname, '..', 'uploads')}/${file}`)
})

export default routes
