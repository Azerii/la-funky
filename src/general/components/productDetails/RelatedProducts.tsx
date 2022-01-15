import ProductItem from '../global/ProductItem';

function RelatedProducts(): JSX.Element {
  return (
    <div className="row">
      <div className="col-12">
        <div className="heading_s1">
          <h3>Releted Products</h3>
        </div>
        <div
          className="releted_product_slider carousel_slider owl-carousel owl-theme"
          data-margin="20"
          data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
        >
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
