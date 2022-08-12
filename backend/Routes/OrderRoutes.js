import express from 'express'
import {addOrderItems} from '../Controllers/OrderController.js'
import {protect} from '../Controllers/UsersController.js'
const router = express.Router()


router.route('/new/order').post(protect,addOrderItems)
// router.route('/:id').get(getProductsId)


export default router;