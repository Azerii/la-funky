
interface Props {
  background: string
  title: string
  subtitle: string
  target: string
  active?: boolean
}

function CarouselItem(props: Props): JSX.Element {
  const {background, title, subtitle, target, active} = props;

  return (
    <div className={`carousel-item background_bg${active ? " active" : ""}`} data-img-src={background} style={{backgroundImage: `url("${background}")`}}>
      <div className="banner_slide_content banner_content_inner">
          <div className="col-lg-8 col-10">
              <div className="banner_content overflow-hidden">
                  <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">{title}</h5>
                  <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">{subtitle}</h2>
                  <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href={target} data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
              </div>
          </div>
      </div>
  </div>
  )
}

export default CarouselItem
