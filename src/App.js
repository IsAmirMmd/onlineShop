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
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./Provider/Auth/AuthProvider";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path="/cart" Component={CartPage} />
              <Route path="/profile" Component={ProfilePage} />
              <Route path="/login" Component={LoginPage} />
              <Route path="/signup" Component={SignUpPage} />
              <Route path="/checkout" Component={CheckoutPage} />
              <Route path="/" Component={HomePage} />
              <Route path="*" Component={NotFound} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
