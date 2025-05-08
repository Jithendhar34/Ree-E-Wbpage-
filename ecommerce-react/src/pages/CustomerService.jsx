import React from 'react';

function CustomerService() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Customer Service</h2>
      <p>If you need any help or have questions about your orders, feel free to contact us. We are here to assist you!</p>
      
      <h4>Contact Information</h4>
      <p>Email: support@shopzone.com</p>
      <p>Phone: +1 234 567 890</p>

      <h4>FAQs</h4>
      <ul>
        <li>How can I track my order?</li>
        <li>What is the return policy?</li>
        <li>Do you ship internationally?</li>
      </ul>
    </div>
  );
}

export default CustomerService;
