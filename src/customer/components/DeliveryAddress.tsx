import React from 'react';

function DeliveryAddress(): JSX.Element {
  return (
    <div
      className="tab-pane fade active show"
      id="address"
      role="tabpanel"
      aria-labelledby="address-tab"
    >
      <div className="row">
        <div className="col-12">
          <div className="card mb-3 mb-lg-0">
            <div className="card-header">
              <h3>Billing Address</h3>
            </div>
            <div className="card-body">
              <address>
                House #15
                <br />
                Road #1
                <br />
                Block #C <br />
                Angali <br /> Vedora <br />
                1212
              </address>
              <p>New York</p>
              <a href="#" className="btn btn-fill-out">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
