import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  const { children, footerstatus } = props;
  return (
    <>
      {true ? (
        <div className="container">
          <Header />
          {children}
          {!footerstatus && <Footer />}
        </div>
      ) : (
        <div className="container">
          <Header />
          {children}
          {!footerstatus && <Footer />}
        </div>
      )}
    </>
  );
};

export default Layout;
