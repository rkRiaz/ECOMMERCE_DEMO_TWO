const {Schema, model} = require('mongoose')
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const orderSchema = new Schema({
    customerId: {
        type: String, 
    },
    shippingInformation: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
        }
    },
    cart_products: {
        type: [],
        required: true
    },
    subTotal: {
        type: String,
        required: true
    },
    payment: {
        method: {
            type: String,
            required: true
        },
        transactionId: {
            type: String,
        }
    },
    status: {
        paid: {
            message: String,
            time: Date,
        },
        picked: {
            message: String,
            time: Date,  
        },
        shipped:{
            message: String,
            time: Date,  
        },
        delivered: {
            message: String,
            time: Date,  
        },
    },

}, {timestamps: true})

const Order = model('Order', orderSchema)
module.exports = Order

