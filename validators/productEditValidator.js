const Product = require('../models/Product')
const { body } = require('express-validator')

const productEditValidator = [
    
        body('name')
        .not().isEmpty().withMessage('Product Name Required'),
        // .custom(async name => {
        //     let product = await Product.findOne({name: name})
        //     if(product) {
        //         return Promise.reject('This Name Of Product is Already Added. Add Unique Name')
        //     } 
        // }),
        body('quantity')
        .not().isEmpty().withMessage('Please Eneter Product Quantity'),
        body('price')
        .not().isEmpty().withMessage('Please Eneter Product Price'),
        body('department')
        .not().isEmpty().withMessage('Select Department'),
        body('type')
        .not().isEmpty().withMessage('Enter Product Types (like: mobile, watch, cloth)'),

        body('tag')
        .not().isEmpty().withMessage('Enter Product Tags (trending, best-seller)'),
        // body('productImgsName')
        // .not().isEmpty().withMessage('Please select at-least one image'),



]

module.exports = productEditValidator

