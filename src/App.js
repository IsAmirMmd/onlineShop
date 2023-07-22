import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CartPage from "./pages/cartPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" Component={CartPage} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
