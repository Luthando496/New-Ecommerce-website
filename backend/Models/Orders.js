import mongoose from 'mongoose';


const orderSchema = mongoose.Schema({
    shippingAddress: {
        address:{
            type:String,

        },
        city:{
            type:String,

        },
        phoneNumber:{
            type:Number,

        },
        postalCode:{
            type:String,

        },
        country:{
            type:String,

        },
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'User'
    },

    orderItems:[
        {
            name:{
                type:String,
                required:true
            },
            qty:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            product:{
                type:mongoose.SchemaTypes.ObjectId,
                required:true,
                ref:'Product'
            }
        }
    ],
    paymentResult:{
        id:{
            type:String,
        },
        status:{
            type:String,
        },
        update_time:{
            type:String,
        },
        email_address:{
            type:String,
        }
    },
    itemsPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    paidAt:{
            type:Date,
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false

    },
    orderStatus:{
        type:String,
        default:'Processing',
        required:true
    },
    deliveredAt:{
        type:Date,
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false,

    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    paymentMethod:{
        type:String,
        required:true
    }
    

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})


orderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});


const orderModel = mongoose.model('Order', orderSchema)
export default orderModel;