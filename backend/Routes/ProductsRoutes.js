import express from 'express'
import {getAllProducts,getProductsId} from '../Controllers/ProductController.js'
const router = express.Router()


router.route('/').get(getAllProducts)
router.route('/:id').get(getProductsId)


export default router;