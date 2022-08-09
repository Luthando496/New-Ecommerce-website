import mongoose from 'mongoose';



export const connectDB = async()=>{
    try{
       const conn =  await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        }
        );
    
    console.log(`DB CONNECTED: ${conn.connection.host}`.brightMagenta.italic)

    }catch(err){
        console.error(`${err.message}`.red)
        process.exit(1)
    }
}