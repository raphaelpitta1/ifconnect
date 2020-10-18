import mongoose from 'mongoose'

const FileSchema = new mongoose.Schema({
  file: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
  toJSON: {
    virtuals: true
  }
})

FileSchema.virtual('fileUrl').get(function (this: { file: string }) {
  return `${process.env.URL}/files/${this.file}`
})

export default mongoose.model('File', FileSchema)
