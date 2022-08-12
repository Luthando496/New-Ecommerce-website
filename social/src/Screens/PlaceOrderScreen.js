import React,{useState}from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {Button,Col,Row,ListGroup,Image,Card} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import Message from '../Components/Message'
import CheckOutSteps from '../Components/CheckOutSteps'
import {newOrder} from '../store/actions/ShipAction'




const PlaceOrderScreen = () => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cart)
    const {shippingAddress,payment} = useSelector(state => state.ship)
    const itemsPrice = cartItems.reduce((acc,curr)=> acc+curr.price * curr.qty,0)
    const shippingPrice = 120;
    const TaxPrice = Number((0.15 * itemsPrice).toFixed(2));
    const totalPrice = (Number(itemsPrice +shippingPrice+TaxPrice )).toFixed(2)

    const placeOrder =()=>{
        dispatch(newOrder({
            orderItems:cartItems,
            shippingAddress,
            paymentMethod:payment,
            itemsPrice,
            shippingPrice,
            taxPrice:TaxPrice,
            totalPrice
        }))


    }

  return (
    <>
        <CheckOutSteps step1 step2 step3 step4 />

        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>Address:<strong>{shippingAddress.address},{shippingAddress.city},{shippingAddress.postalCode},{shippingAddress.country}</strong></p>
                    </ListGroup.Item>


                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method: </strong>{payment}
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <h2>order Items</h2>
                        {cartItems.length === 0 ? <Message variant='danger'>You Cart is empty</Message>:(
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
                                <Col>${itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping</Col>
                                <Col>${shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Tax</Col>
                                <Col>${TaxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Total</Col>
                                <Col>${totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block'
                            onClick={placeOrder} disabled={cartItems.length === 0}>Place Order</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default PlaceOrderScreen