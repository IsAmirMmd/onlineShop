import { useCart, useCartAction } from "../Context/CartContext";
import { products } from "../data/data";
import Layout from "../Layout/Layout";
const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const addProductHandler = (e, product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Layout>
      <div className="product-container">
        {products.map((p) => (
          <div className="product-item" key={p.id}>
            <div className="product-image">
              <img src={p.image} alt={p.image} />
            </div>
            <div className="product-details">
              <p>{p.name}</p>
              <p className="product--price">{p.price}</p>
            </div>
            <div className="product-btn">
              <button className="btn" onClick={(e) => addProductHandler(e, p)}>
                {cart.find((item) => item.id === p.id)
                  ? "in cart"
                  : "add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
