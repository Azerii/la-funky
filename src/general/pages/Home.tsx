import Footer from '../components/global/Footer';
import BannerSlider from '../components/home/header/BannerSlider';
import Header from '../components/home/header/Header';
import NewArrivals from '../components/home/products/NewArrivals';
import DiscountedProducts from '../components/home/products/DiscountedProducts';
import BestSelling from '../components/home/products/BestSelling';
import Brands from '../components/home/brands/Brands';

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <BannerSlider />
      <div className="main_content">
        <NewArrivals />
        <BestSelling />
        <DiscountedProducts />
        <Brands />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
