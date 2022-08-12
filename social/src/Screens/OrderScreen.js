import React,{useState,useEffect}from 'react'
import {useNavigate,Link,useParams} from 'react-router-dom'
import {Button,Col,Row,ListGroup,Image,Card} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import Message from '../Components/Message'
import Spinner from '../Components/Spinner'
import {getOrderId} from '../store/actions/ShipAction'




const OrderScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cartItems} = useSelector(state => state.cart)
    const {orderDetails,orderLoad,orderError} = useSelector(state => state.ship)
    const {id} = useParams()

    useEffect(()=>{
        if(orderDetails === null){
            dispatch(getOrderId(id))
        }
    },[dispatch,orderDetails])




  return (
    orderLoad ? <Spinner /> : orderDetails === null ? <Message variant='danger'>Order is null</Message>:  orderError ? <Message variant='danger'>{orderError}</Message>:(
        <>
            <h1>Order:{orderDetails._id}</h1>
            <Row>
            <Col md={8}>
                <ListGroup variant='flush'>


                    <ListGroup.Item>

                        {orderDetails.isDelivered ? <Message variant='success'>Delivered</Message>:<Message variant='danger'>Not Delivered</Message>}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method: </strong>{orderDetails.paymentMethod}
                        {orderDetails.isPaid ? <Message variant='success'>Paid on</Message>:<Message variant='primary'>Not Paid</Message>}
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <h2>order Items</h2>
                        {orderDetails.orderItems.length === 0 ? <Message variant='danger'>Order is empty</Message>:(
                            <ListGroup variant='flush'>
                                {cartItems.map((item, index)=>(
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col>
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.qty}x ${item.price} = ${item.qty * item.price}
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                        ))}
                                    </ListGroup>
                        )}

                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>Order Summary</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Items</Col>
                                <Col>${orderDetails.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping</Col>
                                <Col>${orderDetails.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Tax</Col>
                                <Col>${orderDetails.TaxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Total</Col>
                                <Col>${orderDetails.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        
                        
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
  )
}

export default OrderScreen