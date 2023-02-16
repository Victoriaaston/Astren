import sendRequest from './send-request';
import axios from 'axios';

const stripe = window.Stripe('pk_test_51MbSmyCwSUDU3KMADYQydQ7EpvUpxuTK8UwVkGo98OUD0q2OXr6HaOwcnUIcTSdYdYNwtSiVZJMNmgcnxd6MVVuk00lsg2Tqwv'); // replace with your Stripe API key
const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addItemToCart(itemId, user=localStorage.getItem("id")) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST', {user});
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

//delete a specific item from the cart 
export function deleteItemFromCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'DELETE');
  }

//Checkout using stripe 
export async function checkout() {
  try {
    const response = await axios.post('/api/orders/cart/checkout', {user: localStorage.getItem("id")});
    const sessionId = response.data
    return sessionId
  }
  catch (error) {
    console.error(error);
  }
}

// export async function checkout() {
//   return sendRequest(`${BASE_URL}/cart/checkout`, 'POST')
// }
   
