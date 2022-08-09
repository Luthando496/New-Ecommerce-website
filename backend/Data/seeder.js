import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './users.js'
import products from './products.js'
import userModel from '../Models/User.js'
import productModel from '../Models/Product.js'
import Order from '../Models/Orders.js'
import {connectDB} from '../Utils/DB.js'




dotenv.config()

connectDB()

const importData = async()=>{
    try {
        await Order.deleteMany()
        await userModel.deleteMany()
        await productModel.deleteMany()

        const createdUsers = await userModel.insertMany(users)
        const admin = createdUsers[0]._id

        const sampleProducts = products.map((pro)=>{
            return {...pro,user:admin}
        })

        await productModel.insertMany(sampleProducts)

        console.log(`data imported`.green.bold)
        
    } catch (error) {
        console.log(`${error}`.brightMagenta)
        process.exit(1)
    }

}


const destroyData = async()=>{
    try {
        // await Order.deleteMany()
        await userModel.deleteMany()
        await productModel.deleteMany()

        console.log(`data destroyed`.red.bold)
        
    } catch (error) {
        console.log(`${error}`.red)
        process.exit(1)
    }

}


if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()

}