import React from 'react';
import './CartPage.css';
import * as ordersAPI from "../../utilities/orders-api"

export default function CartPage({ cart, setCart }) {

    /*--- Event Handlers --- */
    async function handleDeleteItem(itemId) {
        const cart = await ordersAPI.deleteItemFromCart(itemId)
        setCart(cart)
    }

    return (
        <div className="items-container">
            {cart ? (
                cart.lineItems.map((lineItem, index) => (
                    <div className="item-card" key={index}>
                        <img src={lineItem.item.photo} />
                        <p>{lineItem.item.name}: {lineItem.qty}</p>
                        <button onClick={() => handleDeleteItem(lineItem.item._id)}> Delete from cart</button>
                    </div>
                ))
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
}