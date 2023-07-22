import { products } from "../data/data";
import Layout from "../Layout/Layout";

const HomePage = () => {
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
              <button className="btn">add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
