import ProductSlider from './ProductSider'

function FeaturedProducts(): JSX.Element {
  return (
    <div className="section small_pb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_tab_header">
                <div className="heading_s2">
                  <h2>Featured Products</h2>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductSlider />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default FeaturedProducts
