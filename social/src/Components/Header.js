import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Header = props => {
  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/">EasyShop</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft:'auto' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link>
            <Link to="/sign-in"><i className="fas fa-user"></i>SignIn</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </header>
  )
}


export default Header