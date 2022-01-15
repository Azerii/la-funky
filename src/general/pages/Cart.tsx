import CartTable from '../components/cart/CartTable';
import Breadcrumb from '../components/global/Breadcrumb';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';

function Cart(): JSX.Element {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <div className="section">
        <div className="container">
          <CartTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
