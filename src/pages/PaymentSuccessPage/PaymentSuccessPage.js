import React from 'react';
import "./PaymentSuccessPage.css"
import { Link } from 'react-router-dom';

export default function PaymentSuccessPage() {
  return (
    <div className="container">
      <h1 className="title">Congratulations!</h1>
      <h3 className="message">Your payment was successful!</h3>
      <Link to="/orders/new" className="back-link">Back to shop</Link>
    </div>
  );
}

