import './CartPage.css';
import * as ordersAPI from "../../utilities/orders-api"
import { useNavigate } from 'react-router-dom';

export default function CartPage({ cart, setCart }) {

    const navigate = useNavigate([])

    /*--- Event Handlers --- */
    async function handleDeleteItem(itemId) {
        const cart = await ordersAPI.deleteItemFromCart(itemId)
        setCart(cart)
    }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        const checkout = await ordersAPI.checkout();
        window.location.href = `${checkout}`
    }

    return (
        <div>
            <div id="cart-items-container">
                {cart ? (
                    cart.lineItems.map((lineItem, index) => (
                        <div id={`item-card-${index}`} key={index}>
                            <img src={lineItem.item.photo} />
                            <p id={`item-name-${index}`}>{lineItem.item.name}: {lineItem.qty}</p>
                            <button id={`delete-item-${index}`} onClick={() => handleDeleteItem(lineItem.item._id)}> Delete from cart</button>
                            <div id={`qty-controls-${index}`} className="qty-controls">
                                <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>-</button>
                                <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>
            <button id="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
    );
}
