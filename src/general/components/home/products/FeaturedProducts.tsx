import TabSlider from './TabSlider';

function FeaturedProducts(): JSX.Element {
  return (
    <div className="section small_pb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_tab_header">
              <div className="heading_s2">
                <h2>Best Selling</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TabSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
