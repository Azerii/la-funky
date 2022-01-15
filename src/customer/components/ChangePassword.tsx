function ChangePassword(): JSX.Element {
  return (
    <div
      className="tab-pane fade active show"
      id="account-detail"
      role="tabpanel"
      aria-labelledby="account-detail-tab"
    >
      <div className="card">
        <div className="card-header">
          <h3>Change Password</h3>
        </div>
        <div className="card-body">
          <form method="post" name="enq">
            <div className="row">
              <div className="form-group col-md-12 mb-3">
                <label>
                  Current Password <span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  required
                />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label>
                  New Password <span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  name="npassword"
                  type="password"
                  required
                />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label>
                  Confirm Password <span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  name="cpassword"
                  type="password"
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

export default ChangePassword;
