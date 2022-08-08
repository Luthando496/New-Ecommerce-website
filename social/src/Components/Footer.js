import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-primary'>
        <Container>
            <Row>
                <Col className='text-center py-3 text-danger text' id='footer' >
                <h5>Copyright &copy; EasyShop</h5>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer