import Layout from "../../Layout/Layout";
import image from "../../assets/images/hand-drawn-404-error_23-2147737389.png";

const NotFound = () => {
  return (
    <Layout>
      <div>
        <h1> Page Not Found</h1>
        <img src={image} alt="404" />
      </div>
    </Layout>
  );
};

export default NotFound;
