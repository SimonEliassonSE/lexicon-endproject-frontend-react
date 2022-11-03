import '../App.css';
import { Link } from 'react-router-dom';
import Auth from '../Context/Auth';
import { useContext } from 'react';
import { logout } from '../services/AuthApi';



export const NavigationBar = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

const handleLogout = () =>{
   logout();
   setIsAuthenticated(false);
}



 

return(
    <nav className="navbar navbar-expand-lg bg-light">

      <img src={require('../Image/Logo.PNG')} alt="logo" width="60" height="50" />

        <ul className="navbar-nav">

          <li className="nav-item- m-1">
          <Link className="btn btn-light btn_outline-primary" to = "/">
            <i className="fa fa-home"></i> Home
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Products">
            <i class="fa fa-shopping-bag"></i> Products 
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Cart">
            <i class="fa fa-shopping-cart"></i> Cart
          </Link>
          {(!isAuthenticated && (
            <>
          <Link className="btn btn-light btn_outline-primary" to = "/Login">
            <i class="fa fa-user"></i> Login
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Signup">
            <i class="fa fa-user-plus"></i> Signup
          </Link>
          </>
          )) || (
            <>
          <button className="btn btn-light btn_outline-primary" onClick={handleLogout}>
          <i class="fa fa-"></i> Logout
        </button>

        </>
          )}
          </li>

         </ul>

     
      </nav>
    )
        }