import CartTable from '../components/cart/CartTable';
import Layout from '../components/global/Layout';

function Cart(): JSX.Element {
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <CartTable />
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
