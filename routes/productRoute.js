const router = require('express').Router()
const productAddValidator = require('../validators/productAddValidator')
const productEditValidator = require('../validators/productEditValidator')
const upload = require('../middlewares/multer')


const { allProducts,
        getProductById,
        getProductBySlug,
        addProduct,
        editProduct,
        deleteProduct,
        getProductsByCategory,
        getProductsBySubCategory,
        getSearchProductByText
    } = require('../controllers/productController')

router.get('/get-all-products-list', allProducts) // http://localhost:8080/api/product/get-all-products-list
router.get('/get-single-product-by-id/:productId', getProductById) // http://localhost:8080/api/product/get-single-product-by-id/:productId
router.get('/get-single-product-by-slug/:slug', getProductBySlug); // http://localhost:3000/api/product/get-product-by-slug/:slug
router.get('/get-product-list-by-category/:slug', getProductsByCategory) // http://localhost:8080/api/product/get-product-list-by-category/:slug
router.get('/get-product-list-by-sub-category/:slug', getProductsBySubCategory) // http://localhost:8080/api/product/get-product-list-by-sub-category/:slug

// Search
router.get('/get-products-by-text-search', getSearchProductByText); // http://localhost:3000/api/product/get-product-by-id/:id

// router.get('/tag/:tag', productsByTag) // http://localhost:8080/api/product/:tag
// router.get('/department/:department', productsByDepartment) // http://localhost:8080/api/product/:productsByDepartment
// router.get('/type/:type', productsByType) // http://localhost:8080/api/product/:type

router.post('/add-product', upload.array('files', 5), addProduct) // http://localhost:8080/api/product/add-product
router.put('/edit-product',productEditValidator, editProduct) //http://localhost:8080/api/product/edit-product
router.post('/delete-product', deleteProduct) //http://localhost:8080/api/product//delete-product


module.exports = router