import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import HomePage from "../HomePage/HomePage"
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import {getUser} from "../../utilities/users-service"
import NavBar from '../../components/NavBar/NavBar';
import CartPage from "../CartPage/CartPage"


export default function App() {

  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

