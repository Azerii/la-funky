import CartItem from './CartItem';

function CartTable(): JSX.Element {
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
              <CartItem />
              <CartItem />
              <CartItem />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6} className="px-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
                      {/* <div className="coupon field_form input-group">
                        <input
                          type="text"
                          value=""
                          className="form-control form-control-sm"
                          placeholder="Enter Coupon Code.."
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-fill-out btn-sm"
                            type="submit"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-lg-8 col-md-6 text-start text-md-end">
                      <button
                        className="btn btn-line-fill btn-sm"
                        type="submit"
                      >
                        Update Cart
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
