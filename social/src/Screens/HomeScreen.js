import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from '../store/actions/ProductsActions'
import Spinner from '../Components/Spinner';
import Message from '../Components/Message'





const HomeScreen = () => {

  const dispatch = useDispatch()
  const {products,loading,error} = useSelector(state => state.prod)

  useEffect(()=>{

    dispatch(getProducts())
    

},[dispatch])
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
        {loading ? <Spinner /> :error ? <Message variant='danger'>{error}</Message> : products && products.map(pro =>(
            <Col key={pro._id} sm={12} md={6} lg={4} xl={3}>
            
            <Product product={pro} />

            </Col>
        ))}
        </Row>
    </>
  )
}

export default HomeScreen