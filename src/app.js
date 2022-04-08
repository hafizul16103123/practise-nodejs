const  express = require('express');
const  multer = require('multer');
const app = express();
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+".png")
    }
  })
   
  var upload = multer({ storage: storage })
app.post('/file', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.send('file uploaded')
  })

app.listen(3000)
