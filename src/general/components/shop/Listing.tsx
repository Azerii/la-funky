import ProductItem from '../global/ProductItem';
import Filters from './Filters';
import OptionsHeader from './OptionsHeader';

function Listing(): JSX.Element {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <OptionsHeader />
            <div
              className="row shop_container loadmore"
              data-item="8"
              data-item-show="4"
              data-finish-message="No More Item to Show"
              data-btn="Load More"
            >
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
              <ProductItem shopClassNames="col-lg-3 col-md-4 col-6" />
            </div>
          </div>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default Listing;
