import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Form,Button} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import {productDetails} from '../store/actions/ProductsActions';
import Spinner from '../Components/Spinner';
import Message from '../Components/Message'
import {useNavigate} from 'react-router-dom'
import { Tocart } from '../store/actions/cartActions';


const ProductScreen = () => {
    
    const [qty,setQty] = useState(1)
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {product,error,loading} = useSelector(state => state.det)
    useEffect(()=>{

        dispatch(productDetails(id))
        
        
    },[dispatch,id])

    const addToCart =()=>{
        dispatch(Tocart(id,qty,product))
        // setQty(1)
        navigate(`/cart`)

    }

  return (
    <main className='img-pro'>
    <Link className="btn btn-dark my-3" to='/'>
       Go Back
    </Link>
    {loading ? <Spinner /> :error ? <Message variant='danger'>{error}</Message> :(

    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
            <ListGroup.Item>
                <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
                {/* <h2>{product.name}</h2> */}
                <h5>Rating</h5>
            </ListGroup.Item>
            <ListGroup.Item>
                Price ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description:  {product.description}
            </ListGroup.Item>

            </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Price:
                        </Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Status:
                        </Col>
                        <Col>
                            <strong>{product.countInStock > 0 ? 'In Stock': 'Out Of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>QTY</Col>
                            <Col>
                                <Form.Control as='select' value={qty} onChange={(e)=> setQty(Number(e.target.value))}>
                                {[...Array(product.countInStock).keys()].map((x)=>(
                                    <option key={x +1} value={x+1}>{x+1}</option>
                                ))}
                                </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <ListGroup.Item>
                    <Button className='btn-block' 
                    type='button' onClick={addToCart}
                    disabled={product.countInStock === 0} >Add To Cart</Button>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
    )}
    </main>
  )
}

export default ProductScreen