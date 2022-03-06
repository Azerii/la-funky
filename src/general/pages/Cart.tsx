import { useEffect } from 'react';
import { appendScript, scriptUrls } from '../../utils/utils';
import CartTable from '../components/cart/CartTable';
import SubTotals from '../components/cart/SubTotals';
import Layout from '../components/global/Layout';

function Cart(): JSX.Element {
  useEffect(() => {
    scriptUrls.forEach((url) => appendScript(url));
  });

  return (
    <Layout>
      <div className="section">
        <div className="container">
          <CartTable />
          <SubTotals />
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
