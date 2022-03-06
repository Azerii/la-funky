import { Link } from 'react-router-dom';
import product_img1 from '../../../assets/images/product_img1.jpg';
import {
  CartItem,
  decrementQuantity,
  incrementQuantity,
  removeItem
} from '../../../features/cart/cartSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { formatNumber } from '../../../utils/utils';

interface Props {
  data: CartItem;
}

function CartEntry(props: Props): JSX.Element {
  const { data } = props;

  const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="product-thumbnail">
        <a href="#">
          <img src={data.image ?? product_img1} alt="product1" />
        </a>
      </td>
      <td className="product-name" data-title="Product">
        <Link to={`/product-details?id=${data.id}`}>{data.name}</Link>
      </td>
      <td className="product-price" data-title="Price">
        <del>N</del>
        {formatNumber(data.price)}
      </td>
      <td className="product-quantity" data-title="Quantity">
        <div className="quantity">
          <button
            type="button"
            className="minus"
            onClick={() => dispatch(decrementQuantity(data.id))}
          >
            -
          </button>
          <input
            type="text"
            name="quantity"
            value={data.quantity}
            title="Qty"
            className="qty"
            size={4}
            readOnly
          />
          <button
            type="button"
            className="plus"
            onClick={() => dispatch(incrementQuantity(data.id))}
          >
            +
          </button>
        </div>
      </td>
      <td className="product-subtotal" data-title="Total">
        <del>N</del>
        {formatNumber(data.total.toFixed(2))}
      </td>
      <td className="product-remove" data-title="Remove">
        <span onClick={() => dispatch(removeItem(data.id))}>
          <i className="ti-close"></i>
        </span>
      </td>
    </tr>
  );
}

export default CartEntry;
