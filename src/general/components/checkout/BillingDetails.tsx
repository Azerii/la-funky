import SelectLocation from './SelectLocation';

function BillingDetails(): JSX.Element {
  return (
    <div className="col-md-6">
      <div className="heading_s1">
        <h4>Billing Details</h4>
      </div>
      <form method="post">
        <div className="form-group mb-3">
          <input
            type="text"
            required
            className="form-control"
            name="fname"
            placeholder="First name *"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            required
            className="form-control"
            name="lname"
            placeholder="Last name *"
          />
        </div>
        <div className="form-group mb-3">
          <SelectLocation />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="billing_address"
            required
            placeholder="Address *"
          />
        </div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            required
            type="text"
            name="city"
            placeholder="City / Town *"
          />
        </div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            required
            type="text"
            name="state"
            placeholder="State *"
          />
        </div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            required
            type="text"
            name="phone"
            placeholder="Phone *"
          />
        </div>
      </form>
    </div>
  );
}

export default BillingDetails;
