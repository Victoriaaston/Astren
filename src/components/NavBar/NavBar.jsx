import {Link} from 'react-router-dom'
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function HandleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <nav>
            <h1>Welcome {user.name} </h1>
            <Link to='/orders'> order history </Link>
            &nbsp; | &nbsp;
            <Link to='/orders/new'> New Order </Link>
            &nbsp;&nbsp;<Link to="" onClick={HandleLogOut}>Log Out</Link>
        </nav>
    )
}