import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cartPage";
import CartProvider from "./Context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/checkoutPage";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/cart" Component={CartPage} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/signup" Component={SignUpPage} />
            <Route path="/checkout" Component={CheckoutPage} />
            <Route path="/" Component={HomePage} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
