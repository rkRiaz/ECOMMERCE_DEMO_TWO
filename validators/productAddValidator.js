const Product = require('../models/Product')
const { body } = require('express-validator')

// const form = formidable({ multiples: true });
// form.keepExtensions = true;
// //Parses an incoming node.js request containing form data
// form.parse(req, async (err, fields, files) => {

// })


const productAddValidator = [

    body('productName')
    .not().isEmpty().withMessage('Product Name Required'),
    body('slug')
    .not().isEmpty().withMessage('Product Slug Required'),
    body('categorySlug')
    .not().isEmpty().withMessage('Product Category Slug Required'),
    body('subCategorySlug')
    .not().isEmpty().withMessage('Product Sub Category Slug Required'),
    body('regularPrice')
    .not().isEmpty().withMessage('Product Regular Price Required'),
    body('salePrice')
    .not().isEmpty().withMessage('Product Sale Price Required'),
    body('productCode')
    .not().isEmpty().withMessage('Product Code Required'),
    body('quantity')
    .not().isEmpty().withMessage('Please Enter Product Quantity'),



]

module.exports = productAddValidator

