import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/all.min.css';
import './assets/css/ionicons.min.css';
import './assets/css/themify-icons.css';
import './assets/css/linearicons.css';
import './assets/css/flaticon.css';
import './assets/css/simple-line-icons.css';
import './assets/owlcarousel/css/owl.carousel.min.css';
import './assets/owlcarousel/css/owl.theme.css';
import './assets/owlcarousel/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './general/pages/Home';
import PageNotFound from './general/components/global/PageNotFound';
import Shop from './general/pages/Shop';
import Product from './general/pages/ViewProduct';
import Cart from './general/pages/Cart';
import Checkout from './general/pages/Checkout';
import MyAccount from './customer/pages/MyAccount';
import { useEffect } from 'react';
import Login from './customer/pages/Login';
import Register from './customer/pages/Register';
import OrderCompleted from './general/pages/OrderCompleted';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import VerifyEmail from './customer/pages/VerifyEmail';
import VerifyAccountSuccess from './customer/pages/VerifyAccountSuccess';

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

function App(): JSX.Element {
  const pathname = window.location.pathname;

  useEffect(() => {
    scriptUrls.forEach((url) => appendScript(url));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.querySelector('html')?.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-details" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-completed" element={<OrderCompleted />} />
            <Route path="/account/*" element={<MyAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route
              path="/email-confirmation"
              element={<VerifyAccountSuccess />}
            />

            {/* No match */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
