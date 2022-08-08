import products from '../Data/products.js'




export const getAllProducts=(req,res,next)=>{

    res.json(products)
    
}


export const getProductsId=(req,res,next)=>{
    const product = products.find(pro => pro._id === req.params.id)

    res.json(product)
    
}