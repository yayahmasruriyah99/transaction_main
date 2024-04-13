const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (_, _, cb) {
        cb(null, 'uploads/')
    },
    filename: function (_, file, cb){
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        )
    }
})

const upload = multer({storage: storage})

module.exports = upload