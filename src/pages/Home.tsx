import FeaturedSales from '../components/home/banners/FeaturedSales'
import ExclusiveProducts from '../components/home/products/ExclusiveProducts'
import Footer from '../components/home/footer/Footer'
import BannerSlider from '../components/home/header/BannerSlider'
import Header from '../components/home/header/header'
import FeaturedProducts from '../components/home/products/FeaturedProducts'
import Brands from '../components/home/brands/Brands'

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <BannerSlider/>
      <div className="main_content">
        <ExclusiveProducts />
        <FeaturedSales />
        <FeaturedProducts />
        <Brands />
      </div>
      <Footer />
    </div>
  )
}

export default Home
