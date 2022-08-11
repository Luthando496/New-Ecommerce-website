import axios from 'axios'
import {authAction} from '../userReducder'



export const login = (email,password)=>{
    return async dispatch=>{


        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        }
        try {

            const {data} = await axios.post(`/api/shop/users/login`,{email,password},config)

            console.log(data)
            localStorage.setItem('token',JSON.stringify(data.token))
            localStorage.setItem('user',JSON.stringify(data))

            dispatch(authAction.userLogin(data))
            

        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(authAction.userFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }

    }
}





export const register = (name,email,password)=>{
    return async dispatch=>{



        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        }
        try {

            const {data} = await axios.post(`/api/shop/users/reg`,{name,email,password},config)

            console.log(data)

            localStorage.setItem('token',JSON.stringify(data.token))
            localStorage.setItem('user',JSON.stringify(data))

            dispatch(authAction.userRegister(data))


        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(authAction.userFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }

    }
}







export const logout = ()=>{
    return async (dispatch)=>{

        try{

            dispatch(authAction.userLogout())
            localStorage.removeItem('token')
            localStorage.removeItem('user')

        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(authAction.userFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }

    }
}


export const getMe = ()=>{
    return async (dispatch,useState)=>{

       const token = JSON.parse(localStorage.getItem('token'))


        console.log(token)



        const config ={
            headers:{
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : ''
            }
        }



        try {

            const {data} = await axios.get(`/v1/api/amazona/users/profile`,config)

            // localStorage.setItem('token',JSON.stringify(data.token))


            dispatch(authAction.loadUser(data))


        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(authAction.loadUserFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }

    }
}












