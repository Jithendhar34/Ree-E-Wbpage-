import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        {/* ShopZone logo */}
        <Link className="navbar-brand" to="/">ShopZone</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto d-flex justify-content-center"> {/* Center buttons using flexbox */}
            {/* Home Button */}
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-light mx-3">Home</Link>
            </li>
            {/* Products Button */}
            <li className="nav-item">
              <Link to="/products" className="btn btn-outline-light mx-3">Products</Link>
            </li>
            {/* Orders Button */}
            <li className="nav-item">
              <Link to="/orders" className="btn btn-outline-light mx-3">Orders</Link>
            </li>
            {/* Customer Service Button */}
            <li className="nav-item">
              <Link to="/customer-service" className="btn btn-outline-light mx-3">Customer Service</Link>
            </li>
            {/* Payment Methods Button */}
            <li className="nav-item">
              <Link to="/payment-method" className="btn btn-outline-light mx-3">Payment Methods</Link>
            </li>

            {/* About Us Button */}
            <li className="nav-item">
              <Link to="/about-us" className="btn btn-outline-light mx-3">About Us</Link>
            </li>
          </ul>

          {/* Auth Buttons (Sign In / Sign Up) */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-light mx-1">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-outline-warning mx-1">Sign Up</Link>
            </li>
          </ul>

          {/* Cart Button */}
          <Link to="/cart" className="btn btn-primary mx-2">
            <i className="fas fa-shopping-cart"></i> ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
