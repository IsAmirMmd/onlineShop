import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useCart } from "../../Context/CartContext";

const Navigation = () => {
  const { cart } = useCart();
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
        </ul>
        <p>IsAmirMmd</p>
      </nav>
    </header>
  );
};

export default Navigation;
