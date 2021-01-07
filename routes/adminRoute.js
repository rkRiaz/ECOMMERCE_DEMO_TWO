const router = require('express').Router()
const adminLoginValidator = require('../validators/adminValidator')

let {loginController, ordersGetController, ordersPostController, ordersPutController} = require('../controllers/adminController')

//admin authentication not added. it required to add admin athentication in production level.
router.post("/login", adminLoginValidator, loginController)
router.get("/ordered-products", ordersGetController)
router.post("/ordered-products", ordersPostController)
router.put("/ordered-products/:orderId", ordersPutController)

module.exports = router

