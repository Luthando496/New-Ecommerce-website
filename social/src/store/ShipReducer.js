import {createSlice} from '@reduxjs/toolkit'


const shipToken = localStorage.getItem('ship') ? JSON.parse(localStorage.getItem('ship')): {}
const payToken = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')): {}


const ShipSlice = createSlice({
    name:'Ship',
    initialState:{shippingAddress:shipToken,payment:payToken,order:null,loading:false,success:false,err:null,orderDetails:null,orderLoad:true,orderError:null,orderList:[],orderListLoading:false,orderListErr:null},
    reducers:{
        AddShipping(state, action){
            state.shippingAddress = action.payload
        },
        paymentSave(state,action){
            state.payment = action.payload
        },
        OrderCreateSuccess(state,action){
            state.order = action.payload
            state.success = true
            state.loading = false
        },
        OrderCreateFail(state,action){
            state.err = action.payload
            state.loading = false
        },
        OrderCreateRequest(state,action){
            state.loading = true
        },
        OrderDetailsSuccess(state,action){
            state.orderDetails = action.payload
            state.orderLoad = false
        },
        OrderDetailsFail(state,action){
            state.orderError = action.payload
            state.orderLoad = false
        },
        OrderDetailsRequest(state,action){
            state.orderLoad = true
        },
        OrderListSuccess(state,action){
            state.orderList = action.payload
            state.orderListLoading = false
        },
        OrderListFail(state,action){
            state.orderListErr = action.payload
            state.orderListLoading = false
        },
        OrderListRequest(state,action){
            state.orderListLoading = true
        }

}
})


export const shippingAction = ShipSlice.actions
export const ShipReducer = ShipSlice.reducer