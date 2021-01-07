const router = require('express').Router()



const {
    payment
} = require('../controllers/paymentController')



router.get('/', payment)





module.exports = router