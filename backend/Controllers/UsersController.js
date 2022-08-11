import User from '../Models/User.js'
import jwt from 'jsonwebtoken'
import byt from 'bcryptjs'


export const getAllUsers= async(req,res,next) =>{
    try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({error: "Users not found"})
        }

        return res.json(users);
    } catch (err) {
        res.status(500).json({error: err})
        next(err);
    }

}

export const registerUser =  async (req, res, next)=>{

    try{
        const {name,password,email} = req.body;

        const existUser = await User.findOne({email})

        if(existUser){
            return res.status(401).json({message: 'User Already exist'})
        }
        

    const user = await User.create({
        name,
        password,
        email,

    })

    if(!user){
        return res.status(401).json({message: 'No User Created'})
    }

    const token = jwt.sign({_id:user.id},process.env.SCT,{
        expiresIn:process.env.EXP
    })
    

    return res.status(201).json({user,token})

}catch(err) {
    return res.status(500).json({message: err})
    next()
}


}



export const Login =async (req, res, next)=>{


       try{

    const {password,email} = req.body;
    
    if(!password || !email){
        return res.status(400).json({message: 'Please Type Email And Password'})
}


const user = await User.findOne({email}).select('+password')

if(!user){
    return res.status(401).json({message: 'Invalid Email Or Password'})

}



const match = await byt.compare(password,user.password)
console.log(user.id,match)

if(match === false){
    return res.status(401).json({message: 'Invalid Password'})
}





const token = await jwt.sign({_id:user.id},process.env.SCT,{
    expiresIn:process.env.EXP
    
})


return res.status(200).json({id:user._id,name:user.name,email:user.email,isAdmin:user.isAdmin,token})

       }catch (err) {
        console.log(err)
        return res.status(500).json({message: err})
        next()
       }




}




export const protect= async (req, res, next)=>{

    try{
        // console.log(req.headers)
        let token;
    
        if(req.headers && req.headers.authorization){
            token = req.headers.authorization.split(' ')[1]
            // console.log(token)
        }else{
            return res.status(404).json({message:'PLEASE REGISTER OR LOGIN AGAIN'})
        }
    
                // console.log(token)
                const decoded = await jwt.verify(token,process.env.SCT)
    
    
                // 3. Check If USER Still exists
                // console.log(decoded)
                const freshUser = await User.findById(decoded._id).select('-password')
               
                // console.log(freshUser)
                
                
                if (!freshUser) {
                    return res.status(401).json({message:'The user belonging to this token does no longer exist.'})
                }
                
                // 4.Check If USER Changed password after the token was issued
                // freshUser.changedPasswordAfter(decoded.iat)
                
                req.user = await freshUser
    
    
    }catch(err){
       return res.status(500).json({message:err})
    }
    
    next()
    }