import Header from "./Header/header";
import Footer from "./Footer/footer";

function DefaultLayout({ children }) {
  return ( 
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
}

export default DefaultLayout;