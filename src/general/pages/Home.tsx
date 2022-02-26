import FeaturedSales from '../components/home/banners/FeaturedSales';
import Footer from '../components/global/Footer';
import BannerSlider from '../components/home/header/BannerSlider';
import Header from '../components/home/header/Header';
import FeaturedProducts from '../components/home/products/FeaturedProducts';
import Brands from '../components/home/brands/Brands';
import NewArrivals from '../components/home/products/NewArrivals';
import DiscountedProducts from '../components/home/products/DiscountedProducts';

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <BannerSlider />
      <div className="main_content">
        <NewArrivals />
        <FeaturedSales />
        <DiscountedProducts />
        <Brands />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
