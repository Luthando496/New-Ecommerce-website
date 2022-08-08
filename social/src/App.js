import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Container} from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
    <main>
    <Container>
    <Routes>
    <Route path='/' element={<HomeScreen />} />
    <Route path='/product/:id' element={<ProductScreen />} />
    </Routes>

    </Container>
    </main>
      <Footer />
    </Router>
  );
}

export default App;