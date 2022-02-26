import { Link } from 'react-router-dom';
import Layout from '../../general/components/global/Layout';

function Register(): JSX.Element {
  return (
    <Layout>
      <div className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>Create an Account</h3>
                  </div>
                  <form method="post">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                    <div className="login_footer form-group mb-3">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox2"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox2"
                          >
                            <span>I agree to terms &amp; Policy.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="register"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="form-note text-center">
                    Already have an account? <Link to="/login">Log in</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
