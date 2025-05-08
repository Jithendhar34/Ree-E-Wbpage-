import React from 'react';

function Cart({ cart }) {
  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="list-group">
          {cart.map((product, index) => (
            <div key={index} className="list-group-item">
              <h5>{product.name}</h5>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
