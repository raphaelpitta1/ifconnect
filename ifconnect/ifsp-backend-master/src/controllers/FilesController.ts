import User from '../data/User'
import Files from '../data/Files'
// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

/*
    Index = Listar
    Show = Retornar apenas uma
    Store = Criar
    Update = alterar
    Destroy = excluir
*/

export default {
  async store (req: Request, res: Response) {
    try {
      const { id } = req.body
      const { filename } = req.file

      const user = await User.findById(id)
      if (!user) res.status(400).json({ message: 'User not found' })

      const file = await Files.create({
        user: id,
        file: filename
      })

      return res.status(200).json({ success: file })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async index (req: Request, res: Response) {
    try {
      const { id } = req.headers
      const files = await Files.find({
        user: id
      })
      return res.json({ files })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
