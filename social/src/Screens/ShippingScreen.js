import React,{useState}from 'react'
import {useNavigate} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import FormContainer from '../Components/FormContainer'
import CheckOutSteps from '../Components/CheckOutSteps'
import {addShipping} from '../store/actions/ShipAction'



const ShippingScreen = () => {
    const {shippingAddress} = useSelector(state => state.ship)
    console.log(shippingAddress)
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const Submit = ()=>{

        dispatch(addShipping(address,city,postalCode,country))
        navigate('/payment')

    }
  return (
    <main>
    <FormContainer>
        <CheckOutSteps step1 step2 />
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

        <Button type='submit'variant='primary'>Continue</Button>
        </Form>
    </FormContainer>
    </main>
  )
}

export default ShippingScreen