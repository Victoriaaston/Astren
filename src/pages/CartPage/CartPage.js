import React from 'react';
import './CartPage.css';
import * as ordersAPI from "../../utilities/orders-api"

export default function CartPage({ cart, setCart }) {

    /*--- Event Handlers --- */
    async function handleDeleteItem(itemId) {
        const cart = await ordersAPI.deleteItemFromCart(itemId)
        setCart(cart)
    }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
      }      

    return (
        <div className="items-container">
            {cart ? (
                cart.lineItems.map((lineItem, index) => (
                    <div className="item-card" key={index}>
                        <img src={lineItem.item.photo} />
                        <p>{lineItem.item.name}: {lineItem.qty}</p>
                        <button onClick={() => handleDeleteItem(lineItem.item._id)}> Delete from cart</button>
                        <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>-</button>
                        <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>+</button>
                    </div>
                ))
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
}