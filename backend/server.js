import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './Routes/ProductsRoutes.js'
import morgan from 'morgan'
// import users from './Routes/Userjs'
import {err} from './Middlewares/errors.js'
import path from 'path'
import { resolve } from 'path'
import colors from 'colors'


const app = express()
dotenv.config()
app.use(express.json())
app.use(morgan('dev'))



app.use('/api/shop/products',products)


if(process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname,'../front/build')))

    app.get('*', (req,res)=>{
        res.sendFile(resolve(__dirname,'../front/build/index.html'))
    })
}



// MIDDLEWARE TO HANDLE MIDDLEWARES
app.use(err)

// if(process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({path:'../config.env'})




// console.log(process.env)
const connectDB = async()=>{
    try{
       const conn =  await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology:true}
        );
    
    console.log(`DB CONNECTED: ${conn.connection.host}`.brightMagenta.italic)

    }catch(err){
        console.error(`${err.message}`.red)
        process.exit(1)
    }
}

connectDB()


// UNHANDLED EXCEPTIONS

process.on('uncaughtException',err=>{
    console.log('uncaught Exception Server Shutting Down')
    console.log(`ERROR = ${err.stack}`)
    process.exit(1)

})




const server = app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is Running At ${process.env.PORT} In ${process.env.NODE_ENV}`.yellow.bold)
})



// unhandledRejection
process.on('unhandledRejection',err=>{
    console.log(`ERROR REJECTION  ${err.message}`)
    coonsole.log('SERVER SHUTTING DOWN')

    server.close(()=>{
        process.exit(1)
    })

})