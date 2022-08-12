import React,{useState}from 'react'
import {useNavigate} from 'react-router-dom'
import {Form,Button,Col} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import FormContainer from '../Components/FormContainer'
import CheckOutSteps from '../Components/CheckOutSteps'
import {savePaymentMethod} from '../store/actions/ShipAction'



const PaymentScreen = () => {
    const {shippingAddress} = useSelector(state => state.ship)
    const [paymentMethod, setPayment] = useState('Paypal')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    if(!shippingAddress){
        navigate('/shipping')
    }


    const Submit = ()=>{

        dispatch(savePaymentMethod(paymentMethod))
        navigate('/place-order')

    }
  return (
    <main>
    <FormContainer>
        <CheckOutSteps step1 step2 step3 />
        <h1>Shipping</h1>
        <Form onSubmit={Submit}>

        <Form.Group>
            <Form.Label as='legend'>Select Payment Method</Form.Label>
            <Col>
                <Form.Check type='radio' label='Paypal or Credit Card' id='Paypal' name='paymentMethod' value='Paypal' checked onChange={e => setPayment(e.target.value)}>

                </Form.Check>
            </Col>
        </Form.Group>
        <Button type='submit'variant='primary'>Continue</Button>
        </Form>
    </FormContainer>
    </main>
  )
}

export default PaymentScreen