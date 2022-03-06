import { useEffect } from 'react';
import CartTable from '../components/cart/CartTable';
import SubTotals from '../components/cart/SubTotals';
import Layout from '../components/global/Layout';

const scriptUrls = [
  'assets/js/jquery-3.6.0.min.js',
  'assets/js/popper.min.js',
  'assets/bootstrap/js/bootstrap.min.js',
  'assets/owlcarousel/js/owl.carousel.min.js',
  'assets/js/magnific-popup.min.js',
  'assets/js/waypoints.min.js',
  'assets/js/parallax.js',
  'assets/js/jquery.countdown.min.js',
  'assets/js/imagesloaded.pkgd.min.js',
  'assets/js/isotope.min.js',
  'assets/js/jquery.dd.min.js',
  'assets/js/slick.min.js',
  'assets/js/jquery.elevatezoom.js',
  'assets/js/scripts.js'
];

const appendScript = (url: string): void => {
  const scriptTag = document.createElement('script');
  scriptTag.src = url;
  scriptTag.type = 'text/javascript';
  document.body.appendChild(scriptTag);
};

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
