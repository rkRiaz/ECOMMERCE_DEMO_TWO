
const { body } = require('express-validator')

const adminLoginValidator = [
    

        body('loginPhone')
        .not().isEmpty().withMessage('Phone number required')
        .isNumeric().withMessage('Please provide a valide phone number')
        .custom(async loginPhone => {
            if(loginPhone != 1234) {return Promise.reject('Invalid Phone or Password')}
            return true
        }),



        body('loginPassword')
        .not().isEmpty().withMessage('Please Enter Your Password')
        .custom(async loginPassword => {
            if(loginPassword !== "admin") {return Promise.reject('Invalid Phone or Password')}
            return true
        })

]

module.exports = adminLoginValidator