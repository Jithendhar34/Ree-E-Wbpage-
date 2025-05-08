import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="container mt-5">

        {/* Hero Section */}
        <div className="jumbotron text-center hero-section py-5 rounded shadow">
          <h1 className="display-4">Welcome to <span className="text-primary">ShopZone</span> 🛍️</h1>
          <p className="lead">Your one-stop shop for the latest gadgets and accessories.</p>
          <hr className="my-4" />
          <p>Exclusive deals, fast delivery, and secure payment options await you.</p>
          <Link to="/products" className="btn btn-primary btn-lg mt-3 mx-2">Shop Now</Link>
          <Link to="/signup" className="btn btn-outline-light btn-lg mt-3 mx-2">Join Us</Link>
        </div>

        {/* Features Section */}
        <div className="row text-center mt-5">
          <div className="col-md-4">
            <i className="fas fa-truck fa-3x mb-3 text-info"></i>
            <h5>Fast Delivery</h5>
            <p>Get your products delivered quickly to your doorstep.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-shield-alt fa-3x mb-3 text-success"></i>
            <h5>Secure Payment</h5>
            <p>Safe and secure payment options with every order.</p>
            <Link to="/payment-method" className="btn btn-outline-success btn-sm mt-2">View Options</Link>
          </div>
          <div className="col-md-4">
            <i className="fas fa-headset fa-3x mb-3 text-warning"></i>
            <h5>Customer Service</h5>
            <p>Need help? We’re here 24/7.</p>
            <Link to="/customer-service" className="btn btn-outline-warning btn-sm mt-2">Get Support</Link>
          </div>
        </div>

        {/* Deals & Offers Section */}
        <div className="row mt-5 text-center">
          <div className="col-md-6">
            <div className="p-4 bg-light shadow-sm rounded mb-4">
              <h4 className="text-danger">🔥 Today's Deals</h4>
              <p>Flash sales & time-limited discounts!</p>
              <Link to="/deals" className="btn btn-danger">Grab Deals</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light shadow-sm rounded mb-4">
              <h4 className="text-success">💸 Member Offers</h4>
              <p>Extra perks for signed-in users.</p>
              <Link to="/signin" className="btn btn-success">Sign In</Link>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="row text-center mt-5 category-section">
          {[
            { name: 'Home Appliances', icon: 'fa-blender-phone', color: 'primary' },
            { name: 'Clothes', icon: 'fa-tshirt', color: 'info' },
            { name: 'Cars', icon: 'fa-car', color: 'danger' },
            { name: 'Books', icon: 'fa-book', color: 'success' },
            { name: 'Fashion', icon: 'fa-hat-cowboy-side', color: 'warning' },
            { name: 'Mobiles', icon: 'fa-mobile-alt', color: 'secondary' }
          ].map((cat, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className={`category-card p-4 rounded shadow text-${cat.color}`}>
                <i className={`fas ${cat.icon} fa-3x mb-3`}></i>
                <h5>{cat.name}</h5>
                <Link to={`/category/${cat.name.toLowerCase().replace(/\s/g, '-')}`} className={`btn btn-outline-${cat.color} btn-sm`}>
                  Explore {cat.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Location Checker */}
        <div className="location-section text-center mt-5 py-4 px-3 shadow-sm bg-white rounded">
          <h2 className="text-primary mb-3">📍 Check Delivery in Your Area</h2>
          <input type="text" className="form-control w-50 mx-auto mt-3" placeholder="Enter ZIP Code" />
        </div>
      </div>
    </div>
  );
}

export default Home;
