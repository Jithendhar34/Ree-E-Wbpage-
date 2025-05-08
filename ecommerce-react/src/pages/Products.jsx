import React from 'react';
import productsData from '../data/productsData'; // Adjust path if needed
import './Products.css'; // Import custom CSS

function Products({ addToCart }) {
  return (
    <div className="container py-5 products-page"> {/* Add class for background */}
      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row">
        {productsData.map((product) => (
          <div key={product.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm product-card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
