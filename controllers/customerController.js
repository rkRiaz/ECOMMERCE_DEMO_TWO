
const bcrypt = require('bcrypt') 
const { validationResult } = require('express-validator')
const {errorFormatter} = require('../utils/errorFormatter')
const Customer = require('../models/Customer')
const Order = require('../models/Order')
const jwt = require('jsonwebtoken')


exports.allCustomers = async(req, res, next) => {
   try{
    let customers = await Customer.find()
    res.status(200).json(customers.reverse())
   }catch(e) {
       next(e)
   }
}

exports.registration = async (req, res, next) => {
    const { name, phone, email, address, password, confirmPassword } = req.body

    let errors = validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()) {
        return res.status(422).json(errors.mapped())
    }
    
    try{
        // let customer = await Customer.findOne({phone})
        let hashedPassword = await bcrypt.hash(password, 11)
        let match = await bcrypt.compare(confirmPassword, hashedPassword)
        if(match) {
            const customer = new Customer({
                name,
                phone,
                address,
                email,   
                password: hashedPassword 
            })
            let newCustomer = await customer.save() 
            res.status(200).json({
                message: "Successfully Registered",
                newCustomer
            })
        }

    }catch (e) {
        next(e)
    }

}

exports.login = async (req, res, next) => {
    const { loginPhone, loginPassword } = req.body
    let errors = validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()) {
        return res.status(422).json(errors.mapped())
    }
    
    try{
        let findCustomer = await Customer.findOne({phone: loginPhone})
        let match = await bcrypt.compare(loginPassword, findCustomer.password)
        if(!match) {
            return res.status(401).json({message: 'password is not correct'})
        } else {
            let token = jwt.sign({
                _id: findCustomer._id,
                name: findCustomer.name,
            }, 'SECRET', {expiresIn: '24h'})

            res.status(200).json({
                message: 'Login Success',
                token: token,
                expiresIn: 86400 
            })
  
        }
    }

    catch(e) {
        next(e)
    }
}

exports.getLoginCustomerInfo = async(req, res, next) => {
    // console.log(req.userData.userId)
    // User Shop ID from check-user-auth token..
    const loginCustomerId = req.userData.userId;
    try {
        let findCustomer = await Customer.findOne({_id: loginCustomerId})
        
        if(findCustomer) {
            res.status(200).json({
                customerInfo: findCustomer,
                message: 'Succesfully Get Customer info.'
            })
        } else {
            res.status(200).json({
                message: 'You are not registered customer'
            })
        }
    } catch(e) {
        next(e)
    }
    
}

exports.editInfo = async (req, res, next) => {
    const loginCustomerId = req.userData.userId;
    // const { name, phone, address } = req.body
    const { name, address } = req.body
    let errors = validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()) {
        return res.status(422).json(errors.mapped())
    }
    //using passport js login customer accessed globally
    // let customer = customer._id   
    try{
        const updateInfo = {
            name,
            // phone,
            address  
        }
        let findCustomer = await Customer.findOne({_id: loginCustomerId})
        // let findCustomer = await Customer.findOne({_id: customer._id})


      
        if(findCustomer) {
            let updatedCustomer = await Customer.findOneAndUpdate(
                // {_id: customer._id},
                {_id: loginCustomerId},
                {$set: updateInfo},
                {new: true}
            )
            return res.status(200).json({
                message: "Information updated successfully",
                updatedCustomer: updatedCustomer
            })
        } else{
            return res.status(200).json("You are not registered customer")
        }
         
    } catch (e) {
        next(e)
    }

}



exports.changepassword = async(req, res, next) => {
    let{ oldPassword, newPassword, confirmPassword } = req.body
    console.log(req.body)
    const loginCustomerId = req.userData.userId;

    try {
        let findCustomer = await Customer.findOne({_id: loginCustomerId})
        if(findCustomer) {
            if(newPassword !== confirmPassword) {
               return res.status(200).json({
                   message: "Confirm password does not match"
               })
            }
            if(oldPassword && newPassword && confirmPassword !== "" || null) {
                let match = await bcrypt.compare(oldPassword, findCustomer.password)
                if(match) {
                    let hash = await bcrypt.hash(newPassword, 11)
                    await Customer.findOneAndUpdate(
                        {_id: loginCustomerId},
                        {$set: {password: hash}},
                        {new: true},
                    )
                    return res.status(200).json({
                        message: "Successfully changed password"
                    }) 
                } else {
                    return res.status(200).json({
                        message: 'Old password does not match'
                    }) 
                }
             } else {
                 res.status(200).json({
                    message: "Must Fillup All Fields"
                })
             }
        }
    }catch(e) {
        next(e)
    }

}

exports.dashboard = async(req, res, next) => {
    let customerId = req.customer._id
    let customer = req.customer
    let orderedProducts = await Order.find({customerId})
    try{
        if(customer) {
             res.status(200).json({
                customer,
                orderedProducts: orderedProducts.reverse()
            })
        } else {
         res.status(400).json("error")
        }
    }catch(e) {
        next(e)
    }
     
}