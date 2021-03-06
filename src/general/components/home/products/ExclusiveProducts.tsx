import ProductSlider from './ProductSider';
import TabSlider from './TabSlider';

function ExclusiveProducts(): JSX.Element {
  return (
    <div className="section small_pb">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading_tab_header">
              <div className="heading_s2">
                <h2>All Products</h2>
              </div>
              <div className="tab-style2">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#tabmenubar"
                  aria-expanded="false"
                >
                  <span className="ion-android-menu"></span>
                </button>
                <ul
                  className="nav nav-tabs justify-content-center justify-content-md-end"
                  id="tabmenubar"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="arrival-tab"
                      data-bs-toggle="tab"
                      href="#arrival"
                      role="tab"
                      aria-controls="arrival"
                      aria-selected="true"
                    >
                      Men
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="sellers-tab"
                      data-bs-toggle="tab"
                      href="#sellers"
                      role="tab"
                      aria-controls="sellers"
                      aria-selected="false"
                    >
                      Women
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="featured-tab"
                      data-bs-toggle="tab"
                      href="#featured"
                      role="tab"
                      aria-controls="featured"
                      aria-selected="false"
                    >
                      Sports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="special-tab"
                      data-bs-toggle="tab"
                      href="#special"
                      role="tab"
                      aria-controls="special"
                      aria-selected="false"
                    >
                      Vintage
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* <TabSlider /> */}
            <ProductSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveProducts;
