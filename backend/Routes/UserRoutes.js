import express from 'express'
import {registerUser,getAllUsers,Login,protect} from '../Controllers/UsersController.js'
const router = express.Router()


router.route('/users').get(protect,getAllUsers)
router.route('/users/reg').post(registerUser)
router.route('/users/login').post(Login)


export default router;