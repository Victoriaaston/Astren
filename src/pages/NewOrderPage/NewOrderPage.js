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

    return(
        <h1> New Order Page </h1>
    )
}