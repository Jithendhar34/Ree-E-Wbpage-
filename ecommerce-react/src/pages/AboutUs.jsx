import React from "react";
import './AboutUs.css';  // Make sure to import the CSS file for custom styling

function AboutUs() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">About Us</h2>
      <p className="text-center">
        Welcome to <strong>ShopZone</strong> – your go-to destination for the latest gadgets, fashion, and more. Our goal is to bring you top-quality products at unbeatable prices, with fast delivery and secure payment options.
      </p>
      <h4 className="mt-4">Our Mission</h4>
      <p>
        We aim to provide an exceptional online shopping experience, offering a wide range of products in various categories, including electronics, fashion, home goods, and more. We strive to ensure that every customer has a smooth and hassle-free shopping experience.
      </p>
      <h4>Our Values</h4>
      <ul>
        <li>Quality Assurance: We only sell products that we believe in.</li>
        <li>Customer First: We value our customers and their feedback.</li>
        <li>Fast Delivery: We aim to get your orders to you as quickly as possible.</li>
        <li>Secure Payments: Your information is safe with us.</li>
      </ul>

      <h4>Connect with Us</h4>
      <p className="text-center">
        Follow us on LinkedIn and GitHub:
      </p>
      <div className="text-center">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin mx-3">
          LinkedIn
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-github mx-3">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
