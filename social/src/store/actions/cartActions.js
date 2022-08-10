import {cartAction} from '../CartReducer'
import axios from 'axios'

export const Tocart =(id,qty,data)=>{
    return async(dispatch,getState) =>{

        // const {data} = await axios.get(`api/shop/products/${id}`)

        const product = {...data,qty}
        console.log(product)


        dispatch(cartAction.addToCart(product))
        // console.log(getState().cart.items)
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    }
}


export const removeItem =(id)=>{
    return async(dispatch,getState) =>{

        // const {data} = await axios.get(`api/shop/products/${id}`)




        dispatch(cartAction.removeItem(id))
        // console.log(getState().cart.items)
    }
}