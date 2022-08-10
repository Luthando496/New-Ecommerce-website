import {createSlice} from '@reduxjs/toolkit'

const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :[]


const cartSlice = createSlice({
    name:'cart',
    initialState:{cartItems:cartStore},
    reducers:{
        addToCart(state, action){
            const item = action.payload
            const exist = state.cartItems.find(p => p.id === item.id)

            if(!exist){
                state.cartItems.push({
                    product:item._id,
                    name:item.name,
                    price:item.price,
                    countInStock:item.countInStock,
                    image:item.image,
                    id:item.id,
                    qty:item.qty,
})
            }else{
                exist.countInStock--
                exist.qty++
            }

            // if(exist.stock === 0){
            //     exist.stock = 0

            // }


        },
        removeItem(state, action){
            const id = action.payload
            state.cartItems = state.cartItems.filter(p => p.id !== id)
            return localStorage.setItem('cart', JSON.stringify(state.cartItems))

          
        },
        removeQTY(state, action){
            const id = action.payload
            const exist = state.items.find(p => p.id === id)
            if(exist.qty === 1){
                state.items = state.items.filter(item => item.id !== id)

            }else{
                exist.qty--
            }
        },
        // addQty(state, action){}

    }
})


export const cartAction = cartSlice.actions
export const cartReducer = cartSlice.reducer


