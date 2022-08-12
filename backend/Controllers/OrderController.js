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

