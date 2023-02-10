import {Link} from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({user, setUser}) {
    function HandleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <nav>
            <Link to="/home">Home</Link>
            {/* <Link to='/orders'> Order History </Link> */}
            <Link to='/orders/new'> Shop All </Link>
            <Link to="/cart" >View Cart</Link>
            <Link to="" onClick={HandleLogOut}>Log Out</Link>
        </nav>
    )
}