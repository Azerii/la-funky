import product_img1 from '../../../assets/images/product_img1.jpg';

interface Props {
  shopClassNames?: string;
}

function ProductItem(props: Props): JSX.Element {
  const { shopClassNames } = props;

  return (
    <div className={`item ${shopClassNames}`}>
      <div className="product">
        <div className="product_img">
          <a href="/product-details">
            <img src={product_img1} alt="product_img1" />
          </a>
          {/* <div className="product_action_box">
              <ul className="list_none pr_action_btn">
                  <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                  <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                  <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                  <li><a href="#"><i className="icon-heart"></i></a></li>
              </ul>
          </div> */}
        </div>
        <div className="product_info">
          <h6 className="product_title">
            <a href="/product-details">Blue Dress For Woman</a>
          </h6>
          <div className="product_price">
            <span className="price">$45.00</span>
            <del>$55.25</del>
            <div className="on_sale">
              <span>35% Off</span>
            </div>
          </div>
          <div className="rating_wrap">
            <div className="rating">
              <div className="product_rate" style={{ width: '80%' }}></div>
            </div>
            <span className="rating_num">(21)</span>
          </div>
          <div className="pr_desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc id varius nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
