const express = require('express')
const products = require('../Controllers/ProductController')
const router = express.Router()


router.route('/').get(products.getAllProducts)
router.route('/:id').get(products.getProductsId)


module.exports = router;