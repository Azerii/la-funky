import Breadcrumb from '../components/global/Breadcrumb';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import ProductDetails from '../components/productDetails/ProductDetails';
import RelatedProducts from '../components/productDetails/RelatedProducts';
import TabInfo from '../components/productDetails/TabInfo';

function Product(): JSX.Element {
  return (
    <>
      <Navbar />
      {/* <Breadcrumb /> */}
      <div className="section">
        <div className="container">
          <ProductDetails />
          {/* <div className="row">
            <div className="col-12">
              <div className="large_divider clearfix"></div>
            </div>
          </div> */}
          {/* <TabInfo /> */}
          <div className="row">
            <div className="col-12">
              <div className="small_divider"></div>
              <div className="divider"></div>
              <div className="medium_divider"></div>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
