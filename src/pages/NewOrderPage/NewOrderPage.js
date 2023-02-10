import { useState, useEffect } from 'react';
import * as itemsAPI from "../../utilities/items-api"

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
          <h1>New Order Page</h1>
          {items.map(item => (
            <div key={item._id}>
              <img src={item.photo}/>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </>
      )
}