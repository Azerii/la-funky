import React from 'react';

function Orders(): JSX.Element {
  return (
    <div
      className="tab-pane fade active show"
      id="orders"
      role="tabpanel"
      aria-labelledby="orders-tab"
    >
      <div className="card">
        <div className="card-header">
          <h3>Orders</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1234</td>
                  <td>March 15, 2020</td>
                  <td>Processing</td>
                  <td>$78.00 for 1 item</td>
                  <td>
                    <a href="#" className="btn btn-fill-out btn-sm">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#2366</td>
                  <td>June 20, 2020</td>
                  <td>Completed</td>
                  <td>$81.00 for 1 item</td>
                  <td>
                    <a href="#" className="btn btn-fill-out btn-sm">
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
