import { useAppSelector } from '../../../redux/hooks';
import CartEntry from './CartEntry';

function CartTable(): JSX.Element {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="row">
      <div className="col-12">
        <div className="table-responsive shop_cart_table">
          <table className="table">
            <thead>
              <tr>
                <th className="product-thumbnail">&nbsp;</th>
                <th className="product-name">Product</th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-subtotal">Total</th>
                <th className="product-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item, index) => (
                <CartEntry key={index} data={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
