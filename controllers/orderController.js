const Order = require('../models/Order')


exports.allOrders = async (req, res, next) => {
    try{
        let Orders = await Order.find()
        res.status(200).json(Orders.reverse())
    } catch(e) {
        next(e)
    }
}

exports.createOrder = async (req, res, next) => {
    try{
        let {customerId, guestCustomer, cart_products, subTotal} = req.body
        let order = new Order({
            customerId,
            shippingInformation,
            cart_products,
            subTotal,
            paid: {
                message: "false",
                createAt: ""
            },
            picked:  {
                message: "false",
                createAt: ""
            },
            shipped:  {
                message: "false",
                createAt: ""
            },
            delivered:  {
                message: "false",
                createAt: ""
            },
        })
        let newOrder = await order.save()
        res.status(200).json({
            message: "Order placed successfully",
            newOrder
        })
    } catch(e) {
        next(e)
    }
}

exports.updateOrder = async (req, res, next) => {
    let {orderId} = req.params
    try{
        let order = await Order.findById(orderId)
        let {paid, picked, shipped, delivered, processing} = req.body
        let update = {
            paid: paid ? paid : delivered ? {message: "true",createAt: delivered.createAt} : picked ? {message: "true", createAt: picked.createAt} : shipped ? {message: "true", createAt: shipped.createAt} :  order.paid,
            processing: processing || order.processing,
            picked: picked ? picked : delivered ? {message: order.picked.message === "false" ? "Your Product is picked by Admin" : order.picked.message, createAt: order.picked.createAt ? order.picked.createAt : delivered.createAt} : shipped ? {message: order.picked.message === "false" ? "Your product is picked by Seller" : order.picked.message, createAt: order.picked.createAt ? order.picked.createAt : shipped.createAt} : order.picked,
            shipped: shipped ? shipped : delivered ? {message: order.shipped.message === "false" ? "Your Product is being shipped soon" : order.shipped.message, createAt: order.shipped.createAt ? order.shipped.createAt : delivered.createAt} : order.shipped,
            delivered: delivered || order.delivered
        }

        let updatedOrder = await Order.findOneAndUpdate(
            {_id: orderId},
            {$set: update},
            {new: true}
        )
        res.status(200).json(updatedOrder)
    } catch(e) {
        next(e)
    }
}