import Products from '../Models/Product.js'




export const getAllProducts=async(req,res,next)=>{
    try{
        const products =  await Products.find();
        if(!products){
            return res.status(404).json({error: "Products not found"})
        }
        
        res.json(products)
        
    }catch(err){
        console.log(err)
        res.status(500).json({error: err})

    }
    next()
    
}


export const getProductsId= async(req,res,next) =>{
    try{
        const product =  await Products.findById(req.params.id);

        if(!product){
            return res.status(404).json({error: "Product not found"})
        }
        
        res.json(product)
        
    }catch(err){
        console.log(err)
        res.status(500).json({error: err})

    }
    next()
    
}