import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CartPage from "./pages/cartPage";
import Layout from "./Layout/Layout";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/cart" Component={CartPage} />
            <Route path="/" Component={HomePage} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
