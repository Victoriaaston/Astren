import React from "react"
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function HandleLogOut() {
        userService.logOut();
        setUser(null);
    }
    
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/orders/new">Shop All</Link>
            <Link to="/cart">View Cart</Link>
            {user ? (
                <>
                    <span>Welcome, {user.name}!</span>
                    <Link to="" onClick={HandleLogOut}>Log Out</Link>
                </>
            ) : (
                <Link to="/login">Log In</Link>
            )}
        </nav>
    );
}