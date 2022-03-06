import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import ProductDetails from '../components/productDetails/ProductDetails';

function ViewProduct(): JSX.Element {
  return (
    <>
      <Navbar />
      <ProductDetails />
      <Footer />
    </>
  );
}

export default ViewProduct;
