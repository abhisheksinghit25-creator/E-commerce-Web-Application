import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import ReturnPolicy from './pages/ReturnPolicy';
import Disclaimer from './pages/Disclaimer';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './styles/global.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/return-policy" element={<ReturnPolicy/>} />
        <Route path="/return" element={<ReturnPolicy/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />    
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App
