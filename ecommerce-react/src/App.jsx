import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Orders from './pages/Orders';
import CustomerService from './pages/CustomerService';
import PaymentMethod from './pages/PaymentMethod';

// ✅ Import the new pages
import Deals from './pages/Deals.jsx';
import Clothes from './pages/Clothes.jsx';
import Books from './pages/Books.jsx';
import Fashion from './pages/Fashion.jsx';
import Mobiles from './pages/Mobiles.jsx';
import Cars from './pages/Cars.jsx';

// ✅ Import About Us page
import AboutUs from './pages/AboutUs.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/payment-method" element={<PaymentMethod />} />

        {/* ✅ New Category Routes */}
        <Route path="/deals" element={<Deals />} />
        <Route path="/category/clothes" element={<Clothes />} />
        <Route path="/category/books" element={<Books />} />
        <Route path="/category/fashion" element={<Fashion />} />
        <Route path="/category/mobiles" element={<Mobiles />} />
        <Route path="/category/cars" element={<Cars />} />

        {/* ✅ About Us Route */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
