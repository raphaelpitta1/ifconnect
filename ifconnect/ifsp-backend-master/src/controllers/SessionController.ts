/* eslint-disable no-unused-vars */
import User from '../data/User'
import { Request, Response } from 'express'

export default {
  async store (req: Request, res: Response) {
    console.log(req)
    try {
      const { email } = req.body
      let user = await User.findOne({ email })

      !user && (user = await User.create({ email }))

      return res.json(user)
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
  }
}
