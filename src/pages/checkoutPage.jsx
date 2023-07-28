import { useCart } from "../Context/CartContext";
import Layout from "../Layout/Layout";
import { useAuth } from "../Provider/Auth/AuthProvider";
import { Link } from "react-router-dom";
const CheckoutPage = () => {
  const userData = JSON.parse(useAuth());
  const { cart } = useCart();
  console.log(cart);
  let totalPrice = 0;
  return (
    <Layout>
      {userData ? (
        <div className="checkout-container">
          <div className="user-data">
            <p>{userData.name}</p>
            <p>{userData.email}</p>
          </div>
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <p>name : {item.name}</p>
                  <p>price after off : {item.offPrice}</p>
                  <p>amount : {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-price">
            {cart.length !== 0 ? (
              cart.reduce((acc, curr) => {
                totalPrice += curr.quantity * curr.offPrice;
              }, 0)
            ) : (
              <Link to="/">go shopping</Link>
            )}
            {totalPrice !== 0 ? <p>total price to pay : {totalPrice} </p> : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default CheckoutPage;
