import Breadcrumb from "../components/global/Breadcrumb";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import Listing from "../components/shop/Listing";


function Shop(): JSX.Element {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Listing />
      <Footer />
    </>
  )
}

export default Shop
