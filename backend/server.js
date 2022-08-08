const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products = require('./Routes/ProductsRoutes')





app.use('/api/shop/products',products)

app.listen(5000, ()=>{
    console.log('Server running at http://localhost:5000')
})