import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../Components/Message'
import { Tocart } from '../store/actions/cartActions'
import {Link,useParams,useNavigate} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Form,Button,Card} from 'react-bootstrap'
import {removeItem} from '../store/actions/cartActions'


const CartScreen = () => {
    const {id} = useParams()
    const dispatch= useDispatch()
    const cart = useSelector(state=>state.cart) 
    const {cartItems} =cart
    const navigate = useNavigate()


    const removeCartItem = (id) => {
        dispatch(removeItem(id))
    }


    const checkOut= ()=>{
    navigate('/shipping')

    }


  return (
    <Row>
    <Col md={8}>
    <h1>Shopping Cart</h1>
    {cartItems.length === 0 ? <Message variant='danger'>Your Cart Is Empty <Link to='/'>Go back</Link></Message>:<ListGroup variant='flush'>
    {cartItems.map(item =>(
    <ListGroup.Item key={item.id}>
    <Row>
        <Col md={2}>
            <Image src={item.image} alt={item.name} className='cart-img' rounded/>
        </Col>
        <Col md={3}>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
        </Col>
        <Col md={2}>
            ${item.price}
        </Col>
        <Col md={3} className='cart-btn-container'>
        <Button type='button'>
        <i className="fa-solid fa-arrow-left"></i>
        </Button>
         {item.qty}
         <Button type='button'>
        <i className="fa-solid fa-arrow-right"></i>
        </Button>
        </Col>
        <Col md={2}>
            <Button type='button' variant='light' onClick={()=>removeCartItem(item.product)}>
                <i className="fas fa-trash"></i>
            </Button>
        </Col>
    </Row>

    </ListGroup.Item>

    ))}


    </ListGroup> }
    </Col>
    <Col md={4}>
        <Card className='mt-5'>
            <ListGroup variant='flush'>
            <ListGroup.Item>
                <h2>SubTotal ({cartItems.reduce((curr,acc)=> curr + acc.qty,0)})</h2>
                ${cartItems.reduce((curr,acc)=> curr + acc.qty * acc.price,0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
                <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkOut}>
                    Proceed To CheckOut
                </Button>
            </ListGroup.Item>
            </ListGroup>
        </Card>
    </Col>


    </Row>
  )
}

export default CartScreen