import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <header>Navigation</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
