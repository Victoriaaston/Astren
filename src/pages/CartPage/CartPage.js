import React from 'react';

export default function CartPage({ cart }) {


    return (
      <div>
        <h1>This is where you will view the cart</h1>
        {cart ? (
          <div>
            <p>Cart items:</p>
            {cart.lineItems.map((lineItem, index) => (
              <div key={index}>
                <p>
                  {lineItem.item.name}: {lineItem.qty}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    );
  }