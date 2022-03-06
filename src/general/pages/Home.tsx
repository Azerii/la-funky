import Footer from '../components/global/Footer';
import BannerSlider from '../components/home/header/BannerSlider';
import Header from '../components/home/header/Header';
import NewArrivals from '../components/home/products/NewArrivals';
import DiscountedProducts from '../components/home/products/DiscountedProducts';
import BestSelling from '../components/home/products/BestSelling';
import { useEffect } from 'react';

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

function Home(): JSX.Element {
  useEffect(() => {
    scriptUrls.forEach((url) => appendScript(url));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <BannerSlider />
      <div className="main_content">
        <NewArrivals />
        <BestSelling />
        <DiscountedProducts />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
