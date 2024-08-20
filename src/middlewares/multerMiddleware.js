import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) // we also change name of file as user may enter same name, 
                                 // but for testing used original name
    }
  })
  
export const upload = multer({ 
    storage, 
})