const Product = require('../models/Product')
const cloudinary = require('../utils/cloudinary')



exports.productImgsUpload = async(req, res, next) => {

    try{
        const uploader = async (path) => await cloudinary.uploads(path, 'projects/ecommerce/product_images')

        const images_id = []
    
        const files = req.files
    
        for(const file of files) {
          const path = file.path
          const newPath = await uploader(path)
          images_id.push(newPath)
        }
    
        res.json(images_id)
        
    }catch(e) {
        next(e)
    }




//    let productImgs = []
//     req.files.map(productImg => {
//         productImgs.push('/' + productImg.filename)
//     }) 
//     res.json(productImgs)
}