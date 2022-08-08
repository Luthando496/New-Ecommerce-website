import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import axios from 'axios';



const ProductScreen = () => {
    
    // const product = products.find(pro => pro._id === id)
    // console.log(product.name)
    const [product, setProduct] = useState(null)

    const {id} = useParams()
    useEffect(()=>{


        const fetchProducts =async()=>{
            const {data}  = await axios.get(`/api/shop/products/${id}`)

            setProduct(data)
        }
        fetchProducts()
        

    },[])

    console.log(product)
  return (
    <main className='img-pro'>
    <Link className="btn btn-dark my-3" to='/'>
       Go Back
    </Link>
    {product &&(

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
                <ListGroup.Item>
                    <Button className='btn-block' type='button' disabled={product.countInStock === 0} >Add To Cart</Button>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
    )}
    </main>
  )
}

export default ProductScreen