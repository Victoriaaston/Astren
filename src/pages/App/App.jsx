import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import PaymentSuccessPage from '../PaymentSuccessPage/PaymentSuccessPage';
import HomePage from "../HomePage/HomePage"
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import {getUser} from "../../utilities/users-service"
import NavBar from '../../components/NavBar/NavBar';
import CartPage from "../CartPage/CartPage"
import {getCart} from "../../utilities/orders-api"

export default function App() {

  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(getCart());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage cart={cart} setCart={setCart} />} />
            <Route path="/" element={<NewOrderPage cart={cart} setCart={setCart} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />}  />
            <Route path="/orders/success" element={<PaymentSuccessPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}