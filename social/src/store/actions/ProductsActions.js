import {productAction,detailsAction} from '../store'
import axios from 'axios'


export const getProducts = () =>
    async dispatch =>{
        try{

            dispatch(productAction.allProductsRequest())

            const {data} = await axios.get('/api/shop/products')

            dispatch(productAction.ProductsSuccess(data))



        }catch(err){
            console.log(err)
            dispatch(productAction.ProductsFail(err || err.response || err.response.data))
        }
}




export const productDetails = (id) =>
    async dispatch =>{

        // dispatch(detailsAction.allProductsRequest())
        try{

            const {data} = await axios.get(`/api/shop/products/${id}`) 


            dispatch(detailsAction.ProductDetailsSuccess(data))



        }catch(err){
            console.log(err)
            dispatch(detailsAction.ProductsDetailsFail(err && err.response && err.response.data.message ? err.response.data.message: err.message))
        }
}







export const newProduct = (name,description,price,seller,category,filer)=>{
    return async (dispatch,useState)=>{



        console.log(name,description,price,seller,category,filer)



        const config ={
            headers:{
                'Content-Type': 'application/json',
            }
        }

        let image = []
        image.push(filer)



        try {

            const {data} = await axios.post('/v1/api',{name,description,price,seller,category,image},config)

            console.log(data)


            dispatch(productAction.newProduct(data))


        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(productAction.newProdFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }

    }
}
















