import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="mainNav">
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
};

export default Navigation;
