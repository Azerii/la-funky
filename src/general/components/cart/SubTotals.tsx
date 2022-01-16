function SubTotals(): JSX.Element {
  return (
    <div className="row">
      <div className="col-12">
        <div className="border p-3 p-md-4">
          <div className="heading_s1 mb-3">
            <h6>Cart Totals</h6>
          </div>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="cart_total_label">Cart Subtotal</td>
                  <td className="cart_total_amount">$349.00</td>
                </tr>
                <tr>
                  <td className="cart_total_label">Shipping</td>
                  <td className="cart_total_amount">Free Shipping</td>
                </tr>
                <tr>
                  <td className="cart_total_label">Total</td>
                  <td className="cart_total_amount">
                    <strong>$349.00</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="/checkout" className="btn btn-fill-out">
            Proceed To CheckOut
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubTotals;
