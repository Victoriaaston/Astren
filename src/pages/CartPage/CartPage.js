import React from 'react';
import './CartPage.css';

export default function CartPage({ cart, setCart }) {
  console.log(cart + "This is the cart");

  return (
    <div className="items-container">
      {cart ? (
        cart.lineItems.map((lineItem, index) => (
          <div className="item-card" key={index}>
            <img src={lineItem.item.photo} />
            <p>{lineItem.item.name}: {lineItem.qty}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
}