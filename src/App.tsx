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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './general/pages/Home';
import PageNotFound from './general/components/global/PageNotFound';
import Shop from './general/pages/Shop';
import Product from './general/pages/Product';
import Cart from './general/pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-details" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        {/* No match */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
