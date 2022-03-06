import { useEffect } from 'react';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import Listing from '../components/shop/Listing';

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

function Shop(): JSX.Element {
  useEffect(() => {
    scriptUrls.forEach((url) => appendScript(url));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      {/* <Breadcrumb /> */}
      <Listing />
      <Footer />
    </>
  );
}

export default Shop;
