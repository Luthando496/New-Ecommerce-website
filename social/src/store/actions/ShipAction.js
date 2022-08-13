import {shippingAction} from '../ShipReducer'
import axios from 'axios'
import { useDispatch } from 'react-redux'




export const addShipping =(address,city,postalCode,country) =>{
    return dispatch =>{
        const data = {address,city,postalCode,country}
        dispatch(shippingAction.AddShipping(data))

        localStorage.setItem('ship',JSON.stringify(data))
    }
}

export const savePaymentMethod =(payment) =>{
    return dispatch =>{
        
        dispatch(shippingAction.paymentSave(payment))

        localStorage.setItem('payment',JSON.stringify(payment))
    }
}





export const newOrder =(order) =>{
    return async (dispatch,useState) =>{
        try {
            dispatch(shippingAction.OrderCreateRequest())
        const token = JSON.parse(localStorage.getItem('token'))
        const config ={
            headers:{
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : ''
            }
        }
            const {data} = await axios.post('/api/shop/new/order', order,config)
            
                    
                    dispatch(shippingAction.OrderCreateSuccess(data))
            
        } catch (error) {
            dispatch(shippingAction.OrderCreateFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
    }
}
}




export const getOrderId =(id) =>{
    return async (dispatch,useState) =>{
        try {
            // dispatch(shippingAction.OrderDetailsRequest())
        const token = JSON.parse(localStorage.getItem('token'))
        const config ={
            headers:{
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : ''
            }
        }
            const {data} = await axios.get(`/api/shop/order/${id}`,config)
            
                    
            dispatch(shippingAction.OrderDetailsSuccess(data))
            
        } catch (err) {
            dispatch(shippingAction.OrderDetailsFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
    }
}
}




export const getOrderList =() =>{
    return async (dispatch,useState) =>{
        try {
            dispatch(shippingAction.OrderListRequest())
        const token = JSON.parse(localStorage.getItem('token'))
        const config ={
            headers:{
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : ''
            }
        }
            const {data} = await axios.get(`/api/shop/order/user/profile`,config)
            
                    
            dispatch(shippingAction.OrderListSuccess(data))
            
        } catch (err) {
            dispatch(shippingAction.OrderListFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
    }
}
}




// rating,comment,productId


export const newRev = (id,rating,comment)=>{
    return async(dispatch,useState) =>{

        const productId = id;


       const token = JSON.parse(localStorage.getItem('token'))

       const config ={
        headers:{
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : ''
        }
    }

    try{

        const {data} = await axios.put('/v1/api/amazona/products/reviews',{productId,rating,comment},config)
        

        dispatch(shippingAction.newReview(data))

    }catch(err){
        console.log(err.response && err.response.data.message
            ? err.response.data.message
            : err.message)
        dispatch(shippingAction.reviewFail(err.response && err.response.data.message
            ? err.response.data.message
            : err.message))
    }
    }
}