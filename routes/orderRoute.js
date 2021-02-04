const router = require('express').Router()

let {allOrders, createOrder, updateOrder} = require('../controllers/orderController')

router.get("/all-orders", allOrders) //http://localhost:8080/api/order/all-orders
router.post("/create-order", createOrder) //http://localhost:8080/api/order/create-order
router.put("/update-order/:orderId", updateOrder) //http://localhost:8080/api/order/update-order/orderId

module.exports = router