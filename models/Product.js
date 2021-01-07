const { Schema, model } = require('mongoose')
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        regularPrice: {
            type: Number,
            required: true
        },
        salePrice: {
            type: Number,
            required: true
        },
        categorySlug: {
            type: String,
            required: true
        },
        subCategorySlug: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: false
        },
        productCode: {
            type: String,
            required: true
        },
        available:  {
            type: Boolean
        },
        quantity: {
            type: Number,
            required: true
        },
        tag: {
            type: [String]
        },
        productImages: {
            type: [String]
        },
        shortDescription: {
            type: String
        },
        longDescription: {
            type: String
        },
        ratings: {
            type: Object
        },
        reviews: {
            type: [String]
        },
    },
    {
        timestamps: true
    }
);

productSchema.plugin(mongoose_fuzzy_searching, { fields: ['productName', 'slug'] });
const Product = model('Product', productSchema);
module.exports = Product;