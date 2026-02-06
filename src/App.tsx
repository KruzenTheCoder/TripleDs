import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Specials from './pages/Specials';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Loyalty from './pages/Loyalty';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="/loyalty" element={<Loyalty />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
