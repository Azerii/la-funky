import ProductItem from "./ProductItem";

const tabPanes = [
  {
    id: "arrival",
    tabName: "New Arrival"
  },
  {
    id: "sellers",
    tabName: "Best Sellers"
  },
  {
    id: "featured",
    tabName: "Featured"
  },
  {
    id: "special",
    tabName: "Special Offer"
  },
]

function TabSlider(): JSX.Element {
  return (
    <div className="tab_slider">
      {tabPanes?.map((pane, index) => (
        <div key={pane.id} className={`tab-pane fade${index === 0 ? " active show" : ""}`} id={pane.id} role="tabpanel" aria-labelledby={`${pane.id}-tab`}>
          <div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TabSlider
