import { useCart } from "../Context/CartContext";
import Layout from "../Layout/Layout";

let cartPageInnerHtml = "";

const CartPage = () => {
  // items in cart
  const { cart } = useCart();
  // cart page visibility
  function renderCartItem() {
    if (cart.length === 0)
      return (
        <main>
          <h2>No product In Cart !</h2>
        </main>
      );
    else {
      return cart.map((item) => (
        <div key={item.id} className="cart--item">
          <p>{item.name}</p>
        </div>
      ));
    }
  }
  // return
  return <Layout>{renderCartItem()}</Layout>;
};

export default CartPage;
