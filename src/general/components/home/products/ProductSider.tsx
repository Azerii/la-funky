import Product from "./Product";

function ProductSlider(): JSX.Element {
  return (
    <div className="product_slider product_list carousel_slider owl-carousel owl-theme nav_style3" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "3"}}'>
      <div className="item"><Product /><Product /><Product /></div>
      <div className="item"><Product /><Product /><Product /></div>
      <div className="item"><Product /><Product /><Product /></div>
      <div className="item"><Product /><Product /><Product /></div>
      <div className="item"><Product /><Product /><Product /></div>
    </div>
  )
}

export default ProductSlider
