import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String
  }
})

export default mongoose.model('User', UserSchema)
