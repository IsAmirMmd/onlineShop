import { products } from "../data/data";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="product-container">
        {products.map((p) => (
          <div className="product-item" key={p.id}>
            <img src={p.image} alt="item" style={{width:"250px"}} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
