import { Link } from 'react-router-dom';
import cart_thamb1 from '../../../assets/images/cart_thamb1.jpg';
import { CartItem, removeItem } from '../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { formatNumber } from '../../../utils/utils';

interface Props {
  cartItems: CartItem[];
}

function CartPreview(props: Props) {
  const { cartItems } = props;

  const cartSubTotal = useAppSelector((state) => state.cart.subTotal);
  const dispatch = useAppDispatch();

  return (
    <>
      <ul className="cart_list">
        {cartItems?.map((item, index) => (
          <li key={index}>
            <span
              className="item_remove"
              onClick={() => dispatch(removeItem(item.id))}
            >
              <i className="ion-close"></i>
            </span>
            <Link to={`/product-details?id=${item.id}`}>
              <img src={item.image || cart_thamb1} alt="cart_thumb1" />
              {item.name}
            </Link>
            <span className="cart_quantity">
              {' '}
              {item.quantity} x{' '}
              <span className="cart_amount">
                {' '}
                <span className="price_symbole">
                  <del>N</del>
                </span>
              </span>
              {formatNumber(item.price.toFixed(2))}
            </span>
          </li>
        ))}
      </ul>
      <div className="cart_footer">
        <p className="cart_total">
          <strong>Subtotal:</strong>{' '}
          <span className="cart_price">
            {' '}
            <span className="price_symbole">
              <del>N</del>
            </span>
          </span>
          {formatNumber(cartSubTotal)}
        </p>
        <p className="cart_buttons">
          <a href="/cart" className="btn btn-fill-line view-cart">
            View Cart
          </a>
          <a href="/checkout" className="btn btn-fill-out checkout">
            Checkout
          </a>
        </p>
      </div>
    </>
  );
}

export default CartPreview;
