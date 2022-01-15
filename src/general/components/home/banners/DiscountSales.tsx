import SaleBanner from './SaleBanner'

function DiscountSales(): JSX.Element {
  return (
    <div className="section pb_20 small_pt">
      <div className="container-fluid px-2">
          <div className="row g-0">
              <div className="col-md-4">
                <SaleBanner />
              </div>
              <div className="col-md-4">
                <SaleBanner />
              </div>
              <div className="col-md-4">
                <SaleBanner />
              </div>
          </div>
      </div>
    </div>
  )
}

export default DiscountSales
