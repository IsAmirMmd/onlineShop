import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Provider/Auth/AuthProvider";

const Navigation = () => {
  const { cart } = useCart();
  const AuthData = useAuth();

  return (
    <header className="mainNav">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="activeLink" exact="true">
              home
            </NavLink>
          </li>
          <li className="cart-holder">
            <NavLink to="/cart" activeclassname="activeLink">
              cart
            </NavLink>
            <span className="badge">{cart.length}</span>
          </li>
          <li>
            <NavLink
              to={AuthData ? "/profile" : "/login"}
              activeclassname="activeLink"
            >
              {AuthData ? "Profile" : "login/signup"}
            </NavLink>
          </li>
        </ul>
        <p>IsAmirMmd</p>
      </nav>
    </header>
  );
};

export default Navigation;
