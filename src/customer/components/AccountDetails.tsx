function AccountDetails(): JSX.Element {
  return (
    <div
      className="tab-pane fade active show"
      id="change-password"
      role="tabpanel"
      aria-labelledby="change-password-tab"
    >
      <div className="card">
        <div className="card-header">
          <h3>Account Details</h3>
        </div>
        <div className="card-body">
          <form method="post" name="enq">
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label>
                  First Name <span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label>
                  Last Name <span className="required">*</span>
                </label>
                <input className="form-control" name="phone" required />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label>
                  Display Name <span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  name="dname"
                  type="text"
                  required
                />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label>
                  Email Address <span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-fill-out"
                  name="submit"
                  value="Submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
