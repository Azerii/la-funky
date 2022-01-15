import product_img1 from '../../../assets/images/product_img1.jpg';
import product_zoom_img1 from '../../../assets/images/product_zoom_img1.jpg';
import product_small_img1 from '../../../assets/images/product_small_img1.jpg';

function ProductDetails(): JSX.Element {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
        <div className="product-image">
          <div className="product_img_box">
            <img
              id="product_img"
              src={product_img1}
              data-zoom-image={product_zoom_img1}
              alt="product_img1"
            />
            <a href="#" className="product_img_zoom" title="Zoom">
              <span className="linearicons-zoom-in"></span>
            </a>
          </div>
          <div
            id="pr_item_gallery"
            className="product_gallery_item slick_slider"
            data-slides-to-show="4"
            data-slides-to-scroll="1"
            data-infinite="false"
          >
            <div className="item">
              <a
                href="#"
                className="product_gallery_item active"
                data-image={product_img1}
                data-zoom-image={product_zoom_img1}
              >
                <img src={product_small_img1} alt="product_small_img1" />
              </a>
            </div>
            <div className="item">
              <a
                href="#"
                className="product_gallery_item"
                data-image={product_img1}
                data-zoom-image={product_zoom_img1}
              >
                <img src={product_small_img1} alt="product_small_img1" />
              </a>
            </div>
            <div className="item">
              <a
                href="#"
                className="product_gallery_item"
                data-image={product_img1}
                data-zoom-image={product_zoom_img1}
              >
                <img src={product_small_img1} alt="product_small_img1" />
              </a>
            </div>
            <div className="item">
              <a
                href="#"
                className="product_gallery_item"
                data-image={product_img1}
                data-zoom-image={product_zoom_img1}
              >
                <img src={product_small_img1} alt="product_small_img1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="pr_detail">
          <div className="product_description">
            <h4 className="product_title">
              <a href="#">Blue Dress For Woman</a>
            </h4>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
            <div className="product_sort_info">
              <ul>
                <li>
                  <i className="linearicons-shield-check"></i> 1 Year AL Jazeera
                  Brand Warranty
                </li>
                <li>
                  <i className="linearicons-sync"></i> 30 Day Return Policy
                </li>
                <li>
                  <i className="linearicons-bag-dollar"></i> Cash on Delivery
                  available
                </li>
              </ul>
            </div>
            <div className="pr_switch_wrap">
              <span className="switch_lable">Color</span>
              <div className="product_color_switch">
                <span className="active" data-color="#87554B"></span>
                <span data-color="#333333"></span>
                <span data-color="#DA323F"></span>
              </div>
            </div>
            <div className="pr_switch_wrap">
              <span className="switch_lable">Size</span>
              <div className="product_size_switch">
                <span>xs</span>
                <span>s</span>
                <span>m</span>
                <span>l</span>
                <span>xl</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="cart_extra">
            <div className="cart-product-quantity">
              <div className="quantity">
                <input type="button" value="-" className="minus" />
                <input
                  type="text"
                  name="quantity"
                  value="1"
                  title="Qty"
                  className="qty"
                  size={4}
                />
                <input type="button" value="+" className="plus" />
              </div>
            </div>
            <div className="cart_btn">
              <button className="btn btn-fill-out btn-addtocart" type="button">
                <i className="icon-basket-loaded"></i> Add to cart
              </button>
              <a className="add_compare" href="#">
                <i className="icon-shuffle"></i>
              </a>
              <a className="add_wishlist" href="#">
                <i className="icon-heart"></i>
              </a>
            </div>
          </div>
          <hr />
          <ul className="product-meta">
            <li>
              SKU: <a href="#">BE45VGRT</a>
            </li>
            <li>
              Category: <a href="#">Clothing</a>
            </li>
            <li>
              Tags:{' '}
              <a href="#" rel="tag">
                Cloth
              </a>
              ,{' '}
              <a href="#" rel="tag">
                printed
              </a>{' '}
            </li>
          </ul>

          <div className="product_share">
            <span>Share:</span>
            <ul className="social_icons">
              <li>
                <a href="#">
                  <i className="ion-social-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-googleplus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-youtube-outline"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-instagram-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
