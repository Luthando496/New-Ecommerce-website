import React from 'react'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../store/actions/authActions'


const Header = props => {
  const dispatch = useDispatch()

  const {user,isAuth} = useSelector(state => state.auth)

  const logoutHandler=()=>{
    dispatch(logout())
  }


  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid>
        <Link to="/" className='easy'>EasyShop</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft:'auto' }}
            navbarScroll
          >
            <Link to="/" className='head-btn'>Home</Link>
            <Link to="/cart" className='head-btn'><i className="fas fa-shopping-cart"></i> Cart</Link>
            {user ? (
              <div className="dropdown head-btn" style={{marginTop: '0.7rem'}}>
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
              <li><button className="dropdown-item" onClick={logoutHandler}>Logout</button></li>
            </ul>
          </div>
            ) :(<Link to="/login"><i className="fas fa-user"></i>SignIn</Link>)}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </header>
  )
}


export default Header