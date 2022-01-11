import ExclusiveProducts from '../components/home/exclusiveProducts/ExclusiveProducts'
import BannerSlider from '../components/home/header/BannerSlider'
import Header from '../components/home/header/header'

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <BannerSlider/>
      <div className="main_content">
        <ExclusiveProducts />
      </div>
    </div>
  )
}

export default Home
