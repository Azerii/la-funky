import banner1 from '../../../../assets/images/banner_img_one.jpeg';
import banner2 from '../../../../assets/images/banner_img_two.jpeg';
import CarouselItem from './CarouselItem';

function BannerSlider() {
  return (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              id="carouselExampleControls"
              className="carousel slide light_arrow"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <CarouselItem
                  background={banner1}
                  title="Home of fine things"
                  subtitle="Choice bags and shoes"
                  target="/shop"
                  active
                />
                <CarouselItem
                  background={banner2}
                  title="Choice bags and shoes"
                  subtitle="Home of fine things"
                  target="/shop"
                />
              </div>
              <ol className="carousel-indicators indicators_style1">
                <li
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide-to="1"
                ></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;
