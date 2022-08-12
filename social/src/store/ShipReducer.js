import {createSlice} from '@reduxjs/toolkit'


const shipToken = localStorage.getItem('ship') ? JSON.parse(localStorage.getItem('ship')): {}
const payToken = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')): {}


const ShipSlice = createSlice({
    name:'Ship',
    initialState:{shippingAddress:shipToken,payment:payToken,order:null,loading:false,success:false,err:null},
    reducers:{
        AddShipping(state, action){
            state.shippingAddress = action.payload
        },
        paymentSave(state,action){
            state.payment = action.payload
        },
        OrderCreateSuccess(state,action){
            state.order = action.payload
            state.success = false
            state.loading = false
        },
        OrderCreateFail(state,action){
            state.err = action.payload
            state.loading = false
        },
        OrderCreateRequest(state,action){
            state.loading = true
        }

}
})


export const shippingAction = ShipSlice.actions
export const ShipReducer = ShipSlice.reducer