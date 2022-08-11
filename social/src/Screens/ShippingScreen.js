import React,{useState}from 'react'
// import {Link,useNavigate} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import FormContainer from '../Components/FormContainer'



const ShippingScreen = () => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const Submit = ()=>{
        
    }
  return (
    <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={Submit}>
        <Form.Group controlId='address'>
        <Form.Label>Address</Form.Label>

        <Form.Control type='text' placeholder='Your address' 
        value={address} onChange={e =>setAddress(e.target.value)}></Form.Control>

        </Form.Group>


        <Form.Group controlId='city'>
        <Form.Label>City</Form.Label>

        <Form.Control type='text' placeholder='Your city' 
        value={city} onChange={e =>setCity(e.target.value)}></Form.Control>

        </Form.Group>


        <Form.Group controlId='postalCode'>
        <Form.Label>Postal Code</Form.Label>

        <Form.Control type='text' placeholder='Your postalCode' 
        value={postalCode} onChange={e =>setPostalCode(e.target.value)}></Form.Control>

        </Form.Group>

        <Form.Group controlId='country'>
        <Form.Label>Country</Form.Label>

        <Form.Control type='text' placeholder='Your country' 
        value={country} onChange={e =>setCountry(e.target.value)}></Form.Control>

        </Form.Group>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen