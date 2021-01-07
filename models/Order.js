const {Schema, model} = require('mongoose')

const orderedSchema = new Schema({
    customerId: {
        type: String, 
        required: true
    },
    // customer: {
    //     type: {},
    //     required: true
    // },
    cart_products: {
        type: [],
        required: true
    },
    subTotal: {
        type: String,
        required: true
    },
    paid: {
        message: String,
        createAt: Date,  
    },
    picked: {
        message: String,
        createAt: Date,  
    },
    shipped:{
        message: String,
        createAt: Date,  
    },
    delivered: {
        message: String,
        createAt: Date,  
    },
}, {timestamps: true})

const Order = model('Order', orderedSchema)
module.exports = Order

