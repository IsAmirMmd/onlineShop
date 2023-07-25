import { useCart, useCartAction } from "../Context/CartContext";
import Layout from "../Layout/Layout";
import trashImage from "../assets/images/trash.svg";

const CartPage = () => {
  // items in cart
  const { cart } = useCart();
  const { total } = useCart();
  const { off } = useCart();
  const dispatch = useCartAction();

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const decrementHandler = (cartItem) => {
    dispatch({ type: "DECREMENT_AMOUNT", payload: cartItem });
  };

  // cart page visibility
  function renderCartItem() {
    if (!cart.length)
      return (
        <main>
          <h2>No product In Cart !</h2>
        </main>
      );
    else {
      return cart.map((item) => (
        <div className="cart-box__item" key={item.id}>
          <div className="cart-box__item--image">
            <img src={item.image} alt="" />
          </div>
          <div className="cart-box--pc--info">
            <p className="cart-box--pc--info__name">{item.name}</p>
          </div>
          <div className="cart-about">
            <div className="cart-box__item--amount">
              <span className="cart--plus" onClick={() => incHandler(item)}>
                +
              </span>
              <span className="cart--item-amount">{item.quantity}</span>
              <span
                className="cart--trash"
                onClick={() => decrementHandler(item)}
              >
                <img src={trashImage} alt="trash green" />
              </span>
            </div>
            <div className="cart-box--pc__price--final price-unit">
              {item.offPrice * item.quantity}
            </div>
          </div>
        </div>
      ));
    }
  }
  // return
  return (
    <Layout>
      <div className="cart-container">
        <div className="cart-box">
          <div className="cart-box__list">{renderCartItem()}</div>
          {cart.length ? (
            <div className="cart-box__price">
              <div className="cart-box__amount only-desktop">
                <div>
                  <span className="cart-name">Cart</span>
                  <span className="cart-count">({cart.length})</span>
                </div>
                <div>
                  <img src={trashImage} alt="" />
                </div>
              </div>
              <div className="cart-box__price--discout">
                <p> off sale</p>
                <span className="price-unit">{off}</span>
              </div>
              <div className="cart-box__price--post">
                <div>
                  <p>delivery price</p>
                  <span className="price-unit">۰</span>
                </div>
                <div>
                  <img src="../src/data/warning-2.svg" alt="" />
                  the price is based on your location that will be calculated
                  after adding address.
                </div>
              </div>
              <div className="cart-box__price--all">
                <p>total Price </p>
                <span className="price-unit">{total}</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
