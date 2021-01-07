const Product = require('../models/Product')

exports.searchController = async(req, res, next) => {
    let term = req.params.term
    // let currentPage = parseInt(req.query.page) || 1
    // let itemPerPage = 10  
    console.log(term)
    // res.status(200).json(term)


    try {
        let products = await Product.find({
                name: {
                    $regex: term
                }
        })
        
        // .skip((itemPerPage * currentPage) - itemPerPage)
        // .limit(itemPerPage)

        // let totalPost = await Post.countDocuments({
        //     $text: {
        //         $search: term
        //     }
        // })

        // let totalPage = totalPost / itemPerPage
        // console.log(products)
        res.status(200).json(Array.isArray(products)  ? products : [])


    } catch(e) {
        console.log(e)
        next(e)
    }
}
