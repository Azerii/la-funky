
function OptionsHeader(): JSX.Element {
  return (
    <div className="row align-items-center mb-4 pb-1">
      <div className="col-12">
        <div className="product_header">
          <div className="product_header_left">
            <div className="custom_select">
              <select className="form-control form-control-sm">
                <option value="order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="date">Sort by newness</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="product_header_right">
            <div className="products_view">
              <a href="javascript:void(0);" className="shorting_icon grid active"><i className="ti-view-grid"></i></a>
              <a href="javascript:void(0);" className="shorting_icon list"><i className="ti-layout-list-thumb"></i></a>
            </div>
            <div className="custom_select">
              <select className="form-control form-control-sm">
                  <option value="">Showing</option>
                  <option value="9">9</option>
                  <option value="12">12</option>
                  <option value="18">18</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default OptionsHeader
