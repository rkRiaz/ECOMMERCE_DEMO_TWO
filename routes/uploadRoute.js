const router = require('express').Router()
const upload = require('../middlewares/multer')
const {productImgsUpload} = require('../controllers/uploadController')

router.post('/product-imgs', upload.array('productImgs', 5), productImgsUpload)

module.exports = router

