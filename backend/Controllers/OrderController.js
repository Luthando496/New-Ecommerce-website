import Order from '../Models/Orders.js'




export const addOrderItems =async(req,res,next)=>{
    try{

        const {orderItems,shippingAddress,paymentMethod,itemsPrice,shippingPrice,totalPrice,taxPrice} = req.body;

        if(orderItems && orderItems.length === 0){
           res.status(400).json({error: "No Order items to process"});
           return
        }
        const order =  await Order.create({orderItems,shippingAddress,paymentMethod,itemsPrice,shippingPrice,totalPrice,user:req.user._id,taxPrice});

        // if(!product){
        //     return res.status(404).json({error: "Products not found"})
        // }
        
        res.json(order)
        
    }catch(err){
        console.log(err)
        res.status(500).json({error: err})
        return
    }
    next()
    
}


export const getOrderId= async(req,res,next) =>{
    try{
        const order =  await Order.findById(req.params.id).populate('user','name,email');
        console.log(order)

        if(!order){
            return res.status(404).json({error: "Order not found"})
        }
        
        return res.json(order)
        
    }catch(err){
        console.log(err)
        res.status(500).json({error: err})

    }
    next()
    
}


export const getOrderUser= async(req,res,next) =>{
    try{
        const order =  await Order.find({user:req.user._id});
        
        return res.status(200).json(order)
        
    }catch(err){
        return res.status(500).json({error: err})

    }
    next()
    
}