import { BrowserRouter, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="mainNav">
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeclassname="activeLink" exact="true">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeclassname="activeLink">
                cart
              </NavLink>
            </li>
          </ul>
          <p>IsAmirMmd</p>
        </nav>
      </header>
    </BrowserRouter>
  );
};

export default Navigation;
