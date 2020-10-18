import multer from 'multer'
import path from 'path'

export default {
  storage: multer.diskStorage({
    // Destino, sendo que o path.resolve irá configurar as barras para mim
    destination: path.resolve(__dirname, '..', 'uploads'),
    filename: (req, file, cb) => {
      // Selecionando a extensão do arquivo
      const ext = path.extname(file.originalname)
      // Pega o nome do arquivo, retira a extensão e salva
      const name = path.basename(file.originalname, ext)
      cb(null, `${name}-${Date.now()}${ext}`)
    }
  })
}
