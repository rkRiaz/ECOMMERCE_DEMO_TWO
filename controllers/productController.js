const Product = require('../models/Product')
const { validationResult } = require('express-validator')
const { errorFormatter } = require('../utils/errorFormatter')
const fs = require('fs')
const formidable = require('formidable');





exports.allProducts = async (req, res, next) => {
    try {
        let allProducts = await Product.find()
        if (allProducts.length !== 0) {
            res.status(200).json({
                allProducts,
                message: "Fetched all products successfully!"
            })
        } else {
            res.status(200).json({ message: "No products are in the database" })
        }
    } catch (e) {
        next(e)
    }
}

exports.getProductById = async (req, res, next) => {

    let { productId } = req.params
    try {
        let product = await Product.findById(productId)
        res.status(200).json({
            product: product
        })
    } catch (e) {
        next(e)
    }
}

exports.getProductBySlug = async (req, res, next) => {
    const slug = req.params.slug;
    try {
        let products = await Product.find({ slug })
        res.status(200).json({
            products: products,
            message: 'Single Product fetch Successfully!'
        });
    } catch (e) {
        if (!e.statusCode) {
            e.statusCode = 500;
        }
        next(e)
    }
}

exports.getProductsByCategory = async (req, res, next) => {
    const category = req.params.slug;
    try {
        let products = await Product.find({ category })
        res.status(200).json({
            products: products,
            message: 'Products by category fetch Successfully!'
        });
    } catch (e) {
        if (!e.statusCode) {
            e.statusCode = 500;
        }
        next(e)
    }
}

exports.getProductsBySubCategory = async (req, res, next) => {
    const subCategory = req.params.slug;
    try {
        let products = await Product.find({ subCategory })
        res.status(200).json({
            products: products,
            message: 'Products by sub category fetch Successfully!'
        });
    } catch (e) {
        if (!e.statusCode) {
            e.statusCode = 500;
        }
        next(e)
    }
}

//   Text SEARCH
exports.getSearchProductByText = async (req, res) => {

    try {
        const query = req.query.q;
        // return console.log(query)
        const results = await Product.fuzzySearch({ query: query, prefixOnly: false, minSize: 1 })
        return console.log(results)
        res.status(200).json({
            searchProducts: results
        });
    } catch (e) {
        console.log(e);
        next(e)
    }
}



exports.addProduct = async (req, res, next) => {

    // return console.log(req.files)
    // let errors = validationResult(req).formatWith(errorFormatter)

    // if (!errors.isEmpty()) {
    //     return res.status(400).json(errors.mapped())
    // }
    
    
    try{
        let productImages = req.files.map(file => file.filename)
        let product = new Product(req.body);
        product.available = true,
        product.productImages = productImages

        console.log(product)

        let addProduct = await product.save()
        return res.status(200).json({
            message: `Successfully added ${addProduct.productName} as category(${addProduct.category}) and sub category(${addProduct.subCategory})`
        })
    }
    catch(err) {
        console.log(err)
        next(err)
    }




    
        // const form = formidable({ multiples: true });
        // form.keepExtensions = true;
        // form.parse(req, async (err, fields, files) => {

        //   let product = new Product(fields);

        //   const productImgs = files.files
        //     // console.log(productImgs)
         
        //     if(Array.isArray(productImgs) === true) {
        //         for(const productImg of productImgs) {
        //             const path =  productImg.path
        //              product.productImages.push(path)
        //           }
        //     } else {
        //         // product.productImages.push(productImgs.path)
 
        //         let oldpath = productImgs.path;
        //         let newpath = "./uploads"
        //         // fs.copyFile(oldpath, newpath, function (err) {
        //         //   if (err) console.log(err) ;
        //         //   console.log('File uploaded and moved!')
        //         // });

        //         fs.writeFileSync(newpath, fs.readFileSync(oldpath));



        //     }

          
    

          

            // console.log(product)
        // const urls = []
       
        // for(const file of files) {
        //     const path = file.path
        //     // const newPath = await uploader(path)
        //     urls.push(path)
        // }
    
        // console.log(urls)

        // var newpath = 'C:/Users/' + files.name;
        // fs.rename( newpath, function (err) {
        //   if (err) throw err;
        //   res.write('File uploaded and moved!');
        //   res.end();
        // })

        


        // let product = new Product(fields);

        // const uploader = async (path) => await cloudinary.uploads(path, 'projects/ecommerce/product_images')
        // const productImgs = files.productImgs

        // for(const productImg of productImgs) {
        // const path = productImg.path
        // const newPath = await uploader(path)
        // product.productImgs.push(newPath.id)
        // }
    
        // console.log(product)
      

    //   console.log(product)
        //   product.save((err, result) => {
        //     if (err) {
        //       return res.status(400).json({
        //         error: errorHandler(err)
        //       });
        //     }
        //     res.json(result);
        //   });
        // });



}

exports.editProduct = async (req, res, next) => {
    let errors = validationResult(req).formatWith(errorFormatter)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.mapped())
    }

    
    const updatedData = req.body;
    const query = {_id: updatedData._id}
    const push = { $set: updatedData }

    try {

        const updatedProduct = await Product.findOneAndUpdate(query, push, {new: true})
        return res.status(200).json({
            message: 'Product Successfully Updated',
            updatedProduct
        })
        
    } catch (e) {
        next(e)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        let { productId } = req.params
        let deletedProduct = await Product.findByIdAndDelete(productId)
        let filter = deletedProduct.productImgs.filter(p => p !== 'no-image.jpg')
        filter.map(p => {
            fs.unlink(`client/public/images/${p}`, err => {
                console.log(err)
            })
        })
    } catch (e) {
        next(e)
    }
} 



