import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Enter Name Of The Product'],
        trim:true,
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required:true,
    },
    price:{
        type:Number,
        required:[true,'Please Enter Price Of The Product'],
        default:120
    },
    description:{
        type:String,
        required:[true,'Please Enter Description Of The Product'],
    },
    brand:String,
    rating:{
        type:Number,
        default:2.8,
        required:0
    },

    image:String,
    category:{
        type:String,
        required:[true,'Please Enter Category For This Product'],
        enum:{
            values:['Electronics','Furnisher','Beauty & Health','Audio & Media','Books','Fashion','Food']
        },
        message: 'Please enter Correct Category This Product'
    },

     countInStock:{
         type:Number,
         required:[true,'Please Enter Stock For This Product'],
         maxlength:[15,'Maximum for this Stock should be 15'],
         default:8
     },
     numReviews:{
        type:Number,
        default:0,
        required:true
     },

    //  reviews:[
    //      {
    //          name:{
    //              type:String
    //          },
    //          rating:{
    //              type:Number,
    //              default:3,
    //              maxlength:5
    //          },
    //          comment:{
    //             type:String,
    //          },
    //          user:{
    //             type:mongoose.SchemaTypes.ObjectId,
    //          ref:'User',
    //          required:true
    //         }
    //      },
    //  ],

     createdAt:{
         type:Date,
         default:Date.now()
     }
    

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})





const productModel = mongoose.model('Product',productSchema)

export default productModel;