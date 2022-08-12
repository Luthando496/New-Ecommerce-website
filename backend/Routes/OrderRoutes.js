import express from 'express'
import {addOrderItems,getOrderId,getOrderUser} from '../Controllers/OrderController.js'
import {protect} from '../Controllers/UsersController.js'
const router = express.Router()


router.route('/new/order').post(protect,addOrderItems)
router.route('/order/:id').get(protect,getOrderId)
router.route('/order/user').get(protect,getOrderUser)
// router.route('/:id').get(getProductsId)


export default router;