import { useState, useEffect } from 'react';
import * as itemsAPI from "../../utilities/items-api"
import './NewOrderPage.css'

export default function NewOrderPage() {
    const [items, setItems] = useState([])

    useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
          setItems(items);
        }
        getItems();
      }, []);

      return (
        <>
          <h1>Shop All</h1>
          <div className="items-container">
            {items.map(item => (
              <div className="item-card" key={item._id}>
                <img src={item.photo}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button> Add to Cart </button>
              </div>
            ))}
          </div>
        </>
      )
}
