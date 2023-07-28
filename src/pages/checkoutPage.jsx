import { useCart } from "../Context/CartContext";
import Layout from "../Layout/Layout";
import { useAuth } from "../Provider/Auth/AuthProvider";

const CheckoutPage = () => {
  const userData = JSON.parse(useAuth());
  const { cart } = useCart();
  let totalPrice = 0;
  return (
    <Layout>
      test
      {userData ? (
        <div className="checkout-container">
          <div className="user-data">
            <p>{userData.name}</p>
            <p>{userData.email}</p>
          </div>
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id}>
                {item.name}
                <p>{item.offPrice}</p>
              </div>
            ))}
          </div>
          <div className="checkout-price">
            {cart.reduce((acc, curr) => {
              totalPrice += curr.quantity * curr.offPrice;
            }, 0)}
            {totalPrice}
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default CheckoutPage;
