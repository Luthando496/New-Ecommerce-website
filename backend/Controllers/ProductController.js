const products = require('../Data/products')




exports.getAllProducts=(req,res,next)=>{

    res.json(products)
    
}
exports.getProductsId=(req,res,next)=>{
    const product = products.find(pro => pro._id === req.params.id)

    res.json(product)
    
}