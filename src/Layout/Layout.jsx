import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
