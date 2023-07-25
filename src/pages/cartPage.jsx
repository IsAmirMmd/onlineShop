import { useCart, useCartAction } from "../Context/CartContext";
import Layout from "../Layout/Layout";
import trashImage from "../assets/images/trash.svg";

const CartPage = () => {
  // items in cart
  const { cart } = useCart();
  const { total } = useCart();
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
        <div class="cart-box__item" key={item.id}>
          <div class="cart-box__item--image">
            <img src={item.image} alt="" />
          </div>
          <div class="cart-box--pc--info">
            <p class="cart-box--pc--info__name">{item.name}</p>
          </div>
          <div className="cart-about">
            <div class="cart-box__item--amount">
              <span class="cart--plus" onClick={() => incHandler(item)}>
                +
              </span>
              <span class="cart--item-amount">{item.quantity}</span>
              <span class="cart--trash" onClick={() => decrementHandler(item)}>
                <img src={trashImage} alt="trash green" />
              </span>
            </div>
            <div class="cart-box--pc__price--final price-unit">
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
          <div class="cart-box__list">{renderCartItem()}</div>
          {cart.length ? (
            <div class="cart-box__price">
              <div class="cart-box__amount only-desktop">
                <div>
                  <span class="cart-name">Cart</span>
                  <span class="cart-count">({cart.length})</span>
                </div>
                <div>
                  <img src={trashImage} alt="" />
                </div>
              </div>
              <div class="cart-box__price--discout">
                <p> off sale</p>
                <span class="price-unit">۶۳٬۰۰۰</span>
              </div>
              <div class="cart-box__price--post">
                <div>
                  <p>delivery price</p>
                  <span class="price-unit">۰</span>
                </div>
                <div>
                  <img src="../src/data/warning-2.svg" alt="" />
                  هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                  شما محاسبه و به این مبلغ اضافه خواهد شد.
                </div>
              </div>
              <div class="cart-box__price--all">
                <p>total Price </p>
                <span class="price-unit">{total}</span>
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
