import Header from "./header"
import Footer from "./footer"

const Layout = ({children}, props) => {
  return (
    <>
    <Header />
        {children}
    <Footer />
    </>
  )
}

export default Layout