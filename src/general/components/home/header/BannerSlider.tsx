import banner4 from "../../../../assets/images/banner4.jpg";
import banner5 from "../../../../assets/images/banner5.jpg";
import banner6 from "../../../../assets/images/banner6.jpg";
import CarouselItem from "./CarouselItem";

function BannerSlider() {
  return (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
      <div className="container">
          <div className="row">
              <div className="col-lg-9 offset-lg-3">
                    <div id="carouselExampleControls" className="carousel slide light_arrow" data-bs-ride="carousel">
                        <div className="carousel-inner">
                          <CarouselItem background={banner4} title="Get up to 50% off Today Only!" subtitle="Woman Fashion" target="/" active />
                          <CarouselItem background={banner5} title="50% off in all products!" subtitle="Man Fashion" target="/" />
                          <CarouselItem background={banner6} title="Taking your Viewing Experience to Next Level" subtitle="Summer Sale" target="/" />
                        </div>
                        <ol className="carousel-indicators indicators_style1">
                            <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSlider
