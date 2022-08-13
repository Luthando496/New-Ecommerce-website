import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Container} from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import ProfileScreen from './Screens/ProfileScreen';

function App() {
  return (
    <Router>
      <Header />
    <main>
    <Container>
    <Routes>
    <Route path='/' element={<HomeScreen />} />
    <Route path='/login' element={<LoginScreen />} />
    <Route path='/reg' element={<RegisterScreen />} />
    <Route path='/product/:id' element={<ProductScreen />} />
    <Route path='/cart' element={<CartScreen />} />
    <Route path='/shipping' element={<ShippingScreen />} />
    <Route path='/payment' element={<PaymentScreen />} />
    <Route path='/place-order' element={<PlaceOrderScreen />} />
    <Route path='/profile' element={<ProfileScreen />} />
    <Route path='/order/:id' element={<OrderScreen />} />
    {/* <Route path='/cart' element={<CartScreen />} /> */}
    </Routes>

    </Container>
    </main>
      <Footer />
    </Router>
  );
}

export default App;
