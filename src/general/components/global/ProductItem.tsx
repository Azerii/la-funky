import product_img1 from '../../../assets/images/product_img1.jpg';
import styled from 'styled-components';
import { useAppDispatch } from '../../../redux/hooks';
import { addItem } from '../../../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { setCurrentProduct } from '../../../features/shop/shopSlice';
import { formatNumber } from '../../../utils/utils';

const Wrapper = styled.div``;

interface Product {
  [x: string]: any;
}

interface Props {
  product?: Product;
  shopClassNames?: string;
}

function ProductItem(props: Props): JSX.Element {
  const { product, shopClassNames } = props;

  const dispatch = useAppDispatch();

  const handleAddToCart = (): void => {
    const cartItem = {
      id: product?.id,
      image: product?.media[0].url,
      name: product?.name,
      quantityAvailable: Number(product?.quantityAvailable),
      price: Number(product?.regularPrice),
      quantity: 1,
      total: Number(product?.regularPrice)
    };

    dispatch(addItem(cartItem));
  };

  return (
    <Wrapper className={`item ${shopClassNames}`}>
      <div className="product">
        <div className="product_img">
          <a href="/product-details">
            <img
              src={product?.media[0]?.url ?? product_img1}
              alt="product_img1"
            />
          </a>
          <div className="product_action_box">
            <ul className="list_none pr_action_btn">
              <li className="add-to-cart">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleAddToCart}
                >
                  <i className="icon-basket-loaded"></i> Add To Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="product_info">
          <h6 className="product_title">
            <a
              href="/product-details"
              onClick={() => product && dispatch(setCurrentProduct(product))}
            >
              {product?.name}
            </a>
          </h6>
          <div className="product_price">
            <span className="price">
              <del>N</del>
              {formatNumber(product?.regularPrice)}
            </span>
            {product?.discount && (
              <del>
                N
                {formatNumber(
                  Math.floor(
                    (product?.regularPrice * product?.discount?.rate) / 100
                  )
                )}
              </del>
            )}
            {product?.discount?.rate && (
              <div className="on_sale">
                <span>{product?.discount?.rate}% Off</span>
              </div>
            )}
          </div>
          <div className="pr_desc">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductItem;
