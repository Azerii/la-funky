import product_img1 from '../../../assets/images/product_img1.jpg';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import styled from 'styled-components';
import { Product, setCurrentProduct } from '../../../features/shop/shopSlice';
import {
  // appendScript,
  base_url,
  formatNumber
  // scriptUrls
} from '../../../utils/utils';
import { useState } from 'react';
import { addItem, CartItem } from '../../../features/cart/cartSlice';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Loader from '../global/Loader';
import RelatedProducts from './RelatedProducts';
import TabInfo from './TabInfo';

const ProductImage = styled.div`
  .product_img_box {
    img {
      width: 100%;
    }
  }

  .img_wrapper {
    img {
      width: 100%;
    }
  }
`;

const ImgGallery = styled.div`
  display: flex;
  gap: 12px;

  .item {
    width: 129px;
  }
`;

function ProductDetails(): JSX.Element {
  const { search } = useLocation();
  const productId = new URLSearchParams(search).get('id');

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);
  const product: Product = useAppSelector((state) => state.shop.currentProduct);
  const dispatch = useAppDispatch();

  const handleAddToCart = (): void => {
    const cartItem: CartItem = {
      id: product?.id,
      image: product?.media[0].url,
      name: product?.name,
      quantityAvailable: Number(product?.quantityAvailable),
      price: Number(product?.regularPrice),
      quantity,
      total: Number(product?.regularPrice) * quantity
    };

    if (color) {
      cartItem.variants = {
        ...cartItem.variants,
        color
      };
    }

    if (size) {
      cartItem.variants = {
        ...cartItem.variants,
        size
      };
    }

    if (
      !color &&
      !size &&
      (product.variants?.color?.length || product.variants?.size?.length)
    ) {
      alert('Please select a variant option');
      return;
    }

    dispatch(addItem(cartItem));
  };

  const getProduct = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/shop/products/${productId}`);

      if (res?.data.status === 'success') {
        dispatch(setCurrentProduct(res.data.data));
      }

      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.log(e);
    }
  };

  // useEffect(() => {
  //   if (!loading) {
  //     scriptUrls.forEach((url) => appendScript(url));
  //   }
  //   // eslint-disable-next-line
  // }, [loading]);

  useEffect(() => {
    if (productId) {
      getProduct();
    }

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <>
        <div className="medium_divider"></div>
        <Loader />
        <div className="medium_divider"></div>
      </>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <ProductImage className="product-image">
              <div className="product_img_box">
                <img
                  id="product_img"
                  src={product.media[0]?.url ?? product_img1}
                  data-zoom-image={product.media[0].url ?? product_img1}
                  alt="product_img1"
                />
                <a href="#" className="product_img_zoom" title="Zoom">
                  <span className="linearicons-zoom-in"></span>
                </a>
              </div>
              <ImgGallery
                id="pr_item_gallery"
                className="product_gallery_item slick_slider"
                data-slides-to-show="4"
                data-slides-to-scroll="1"
                data-infinite="false"
              >
                {product.media?.map((item: any, index: number) => (
                  <div key={index} className="item">
                    <div
                      className={`img_wrapper product_gallery_item${
                        index === 0 ? ' active' : ''
                      }`}
                      data-image={item.url}
                      data-zoom-image={item.url}
                    >
                      <img src={item.url} alt="product_small_img1" />
                    </div>
                  </div>
                ))}
              </ImgGallery>
            </ProductImage>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="pr_detail">
              <div className="product_description">
                <h4 className="product_title">
                  <a href="#">{product?.name}</a>
                </h4>
                <div className="">
                  <span className="price">
                    <del>N</del>
                    {formatNumber(product?.regularPrice)}
                  </span>{' '}
                  {product?.discount && (
                    <del>
                      N
                      {formatNumber(
                        Math.floor(
                          (product?.regularPrice * product?.discount?.rate) /
                            100
                        )
                      )}
                    </del>
                  )}{' '}
                  {product?.discount?.rate && (
                    <div className="on_sale">
                      <span>{product?.discount?.rate}% Off</span>
                    </div>
                  )}
                </div>
                {/* <div className="rating_wrap">
              <div className="rating">
                <div className="product_rate" style={{ width: '80%' }}></div>
              </div>
              <span className="rating_num">(21)</span>
            </div> */}
                <div className="pr_desc">
                  <p>{product?.description}</p>
                </div>
                <div className="product_sort_info">
                  <ul>
                    <li>
                      <i className="linearicons-shield-check"></i> 1 Year Brand
                      Warranty
                    </li>
                    <li>
                      <i className="linearicons-sync"></i> 30 Day Return Policy
                    </li>
                    <li>
                      <i className="linearicons-bag-dollar"></i> Card or Bank
                      transfer
                    </li>
                  </ul>
                </div>
                {product?.variants?.color &&
                  Boolean(product?.variants?.color.length) && (
                    <div className="pr_switch_wrap">
                      <span className="switch_lable">Color</span>
                      <div className="product_color_switch">
                        {product?.variants?.color?.map(
                          (color: string, index: number) => (
                            <span
                              key={index}
                              className={`color${index === 0 ? ' active' : ''}`}
                              data-color={color}
                              onClick={() => setColor(color)}
                            ></span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                {product?.variants?.size &&
                  Boolean(product?.variants?.size.length) && (
                    <div className="pr_switch_wrap">
                      <span className="switch_lable">Size</span>
                      <div className="product_size_switch">
                        {product?.variants?.size?.map(
                          (size: string, index: number) => (
                            <span
                              key={index}
                              className={`size`}
                              data-size={size}
                              onClick={() => setSize(size)}
                            >
                              {size}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
              <hr />
              <div className="cart_extra">
                <div className="cart-product-quantity">
                  <div className="quantity">
                    <button
                      type="button"
                      className="minus"
                      disabled={quantity === 1}
                      onClick={() => setQuantity((prev) => prev - 1)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="quantity"
                      value={quantity}
                      title="Qty"
                      className="qty"
                      size={4}
                      readOnly
                    />
                    <button
                      type="button"
                      className="plus"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart_btn">
                  <button
                    className="btn btn-fill-out btn-addtocart"
                    type="button"
                    onClick={handleAddToCart}
                  >
                    <i className="icon-basket-loaded"></i> Add to cart
                  </button>
                  {/* <a className="add_compare" href="#">
                <i className="icon-shuffle"></i>
              </a>
              <a className="add_wishlist" href="#">
                <i className="icon-heart"></i>
              </a> */}
                </div>
              </div>
              <hr />
              <ul className="product-meta">
                {/* <li>
              SKU: <a href="#">BE45VGRT</a>
            </li> */}
                <li>
                  Category:{' '}
                  <a href={`/shop?category=${product?.category.name}`}>
                    {product?.category.name}
                  </a>
                </li>
                <li>
                  Tags:{' '}
                  {product?.tags?.map((tag: any, index: number) => (
                    <a key={index} href="#" rel="tag">
                      {tag.name}
                      {index > 0 && index < product.tags.length ? ',' : ''}{' '}
                    </a>
                  ))}
                </li>
              </ul>

              {/* <div className="product_share">
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
          </div> */}
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <div className="large_divider clearfix"></div>
          </div>
        </div>
        <TabInfo /> */}
        <div className="row">
          <div className="col-12">
            <div className="small_divider"></div>
            <div className="divider"></div>
            <div className="medium_divider"></div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
}

export default ProductDetails;
