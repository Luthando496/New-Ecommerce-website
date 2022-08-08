import axios from 'axios'



export const getProductById =(id)=>{
    return async dispatch=>{
        
        const {data}  = await axios.get(`http://localhost:5000/api/shop/products/${id}`)
    }
} 