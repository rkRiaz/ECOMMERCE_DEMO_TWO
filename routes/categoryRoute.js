const router = require('express').Router()
const upload = require('../middlewares/multer')
let {allCategory, addCategoryOrPushSubCategoryIntoCategory, findSubCategoriesByCategorySlug, category} = require('../controllers/categoryController')

router.get("/get-all-category", allCategory)    //http://localhost:8080/api/category/get-all-category
router.get("/get-category/:subCategorySlug", category)    //http://localhost:8080/api/category/get-category/subCategorySlug

router.get("/find-sub-categories-by-category-slug/:categorySlug", findSubCategoriesByCategorySlug)    //http://localhost:8080/api/category/find-sub-categories-by-category-slug/:categorySlug
router.put("/add-category-or-push-sub-category-into-category",upload.array('categoryImages', 2), addCategoryOrPushSubCategoryIntoCategory)    //http://localhost:8080/api/category/add-category-or-push-sub-category-into-category


module.exports = router

