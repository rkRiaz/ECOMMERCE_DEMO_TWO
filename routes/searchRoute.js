const router = require("express").Router()

const  { searchController }  = require('../controllers/searchController')



router.get("/:term" , searchController)


module.exports = router