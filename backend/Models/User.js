import mongoose from 'mongoose'
import validator from 'validator'
import byt from 'bcrypt'



const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Type Your Name Here To'],
        maxLength:[40,'Your name must be at Maximum 40 characters long'],

    },
    email:{
        type:String,
        required:[true,'Please Type Your Email'],
        unique:[true,'This Email Has Been Taken'],
        validate:[validator.isEmail,'Please enter a valid email address']
    },
    password:{
        type:String,
        required:[true,'Please Type Your Password'],
        minlength:[5,'Your password must Longer than 5 characters'],
        select:false
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})


userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    } 

    this.password = await byt.hash(this.password,10)


})


userSchema.methods.comparePassword = async function(candidatePassword,userPassword){
    return await byt.compare(candidatePassword,userPassword);
}

const userModel = mongoose.model('user', userSchema)


export default userModel;