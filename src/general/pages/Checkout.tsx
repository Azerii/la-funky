import BillingDetails from '../components/checkout/BillingDetails';
import OrderSummary from '../components/checkout/OrderSummary';
import Breadcrumb from '../components/global/Breadcrumb';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';

function Checkout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="medium_divider"></div>
              <div className="divider center_icon">
                <i className="linearicons-credit-card"></i>
              </div>
              <div className="medium_divider"></div>
            </div>
          </div>

          <div className="row">
            <BillingDetails />
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
