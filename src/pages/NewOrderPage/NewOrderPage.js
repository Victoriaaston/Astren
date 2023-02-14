import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as itemsAPI from "../../utilities/items-api"
import * as ordersAPI from "../../utilities/orders-api"
import './NewOrderPage.css'

export default function NewOrderPage({ cart, setCart }) {
  const [items, setItems] = useState([])

   // Obtain a ref object
  const navigate = useNavigate([])

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setItems(items);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCart()
  }, []);


  /*--- Event Handlers --- */
  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId)
    setCart(cart)
  }

  async function handleCheckout() {
    await ordersAPI.checkout()
    navigate('/orders')
  }


  return (
    <>
      <h1>Shop All</h1>
      <div className="items-container">
        {items.map(item => (
          <div className="item-card" key={item._id}>
            <img src={item.photo} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => handleAddToOrder(item._id)}> Add to Cart </button>
          </div>
        ))}
      </div>
    </>
  )
}