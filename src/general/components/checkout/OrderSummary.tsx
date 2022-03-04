import { useState } from 'react';
import { CartItem } from '../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { formatNumber } from '../../../utils/utils';

function OrderSummary(): JSX.Element {
  const [shippingCost, setShippingCost] = useState(500);
  const cartItems = useAppSelector((state) => state.cart.items);

  const cartSubTotal = useAppSelector((state) => state.cart.subTotal);
  const dispatch = useAppDispatch();

  return (
    <div className="col-md-6">
      <div className="order_review">
        <div className="heading_s1">
          <h4>Your Order</h4>
        </div>
        <div className="table-responsive order_table">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item, index) => (
                <tr>
                  <td>
                    {item.name}{' '}
                    <span className="product-qty">x {item.quantity}</span>
                  </td>
                  <td>
                    <del>N</del>
                    {formatNumber(item.total)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>SubTotal</th>
                <td className="product-subtotal">
                  <del>N</del>
                  {formatNumber(cartSubTotal)}
                </td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>
                  <del>N</del>
                  {formatNumber(shippingCost)}
                </td>
              </tr>
              <tr>
                <th>Total</th>
                <td className="product-subtotal">
                  <del>N</del>
                  {formatNumber(cartSubTotal + shippingCost)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* <div className="payment_method">
          <div className="heading_s1">
            <h4>Payment</h4>
          </div>
          <div className="payment_option">
            <div className="custome-radio">
              <input
                className="form-check-input"
                type="radio"
                name="payment_option"
                id="exampleRadios3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="exampleRadios3">
                Direct Bank Transfer
              </label>
              <p data-method="option3" className="payment-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.{' '}
              </p>
            </div>
            <div className="custome-radio">
              <input
                className="form-check-input"
                type="radio"
                name="payment_option"
                id="exampleRadios4"
                value="option4"
              />
              <label className="form-check-label" htmlFor="exampleRadios4">
                Check Payment
              </label>
              <p data-method="option4" className="payment-text">
                Please send your cheque to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
            <div className="custome-radio">
              <input
                className="form-check-input"
                type="radio"
                name="payment_option"
                id="exampleRadios5"
                value="option5"
              />
              <label className="form-check-label" htmlFor="exampleRadios5">
                Paypal
              </label>
              <p data-method="option5" className="payment-text">
                Pay via PayPal; you can pay with your credit card if you don't
                have a PayPal account.
              </p>
            </div>
          </div>
        </div> */}
        <div className="medium_divider"></div>
        <button className="btn btn-fill-out btn-block">Place Order</button>
      </div>
    </div>
  );
}

export default OrderSummary;
