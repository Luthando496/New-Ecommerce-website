import React,{useState,useEffect}from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Form,Row,Col,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../store/actions/authActions' 
import Message from '../Components/Message'
import Spinner from '../Components/Spinner';
import FormContainer from '../Components/FormContainer'



const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const {user,loading,error} = useSelector(state => state.auth)
    const navigate  = useNavigate()


  useEffect(()=>{
    if(user){
      navigate('/')
    }

  },[user,navigate])



    const Submit =(e) => {
      e.preventDefault()
      dispatch(login(email,password))
    }


  return (
    <FormContainer>
    <h1>Sign in</h1>
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Spinner />}
    <Form onSubmit={Submit}>
        <Form.Group controlId='email'>
        <Form.Label>Email Address</Form.Label>

        <Form.Control type='email' placeholder='Your email address' 
        value={email} onChange={e =>setEmail(e.target.value)}></Form.Control>

        </Form.Group>


        <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>

        <Form.Control type='password' placeholder='Your password' 
        value={password} onChange={e =>setPassword(e.target.value)}></Form.Control>

        </Form.Group>

        <Button type='submit' className='login-btn' variant='secondary' onClick={Submit} >Sign In</Button>
    </Form>

    <Row className='py-3'>

    <Col>
        New Customer ? <Link to='/register'>Register</Link>
    </Col>

    </Row>

    
    </FormContainer>
  )
}

export default LoginScreen