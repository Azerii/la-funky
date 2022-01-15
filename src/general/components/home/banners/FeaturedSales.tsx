import SingleBannerInfo from "./SingleBannerInfo";


function FeaturedSales(): JSX.Element {
  return (
    <div className="section pb_20 small_pt">
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                <SingleBannerInfo />
              </div>
              <div className="col-md-6">
                <SingleBannerInfo />
              </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedSales
