import React from 'react';

function PaymentMethod() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Payment Methods</h2>
      <p>We offer a variety of secure payment options to make your shopping experience easier and more convenient. Choose your preferred payment method below:</p>

      <h4>Accepted Payment Methods:</h4>
      <div className="row text-center">
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100x60.png?text=Visa" alt="Visa" />
          <p>Visa</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100x60.png?text=MasterCard" alt="MasterCard" />
          <p>MasterCard</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100x60.png?text=PayPal" alt="PayPal" />
          <p>PayPal</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100x60.png?text=Stripe" alt="Stripe" />
          <p>Stripe</p>
        </div>
        <div className="col-md-4">
          <img src="https://via.placeholder.com/100x60.png?text=Apple+Pay" alt="Apple Pay" />
          <p>Apple Pay</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
