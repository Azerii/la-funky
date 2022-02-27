import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../general/components/global/Layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import FormGroup from '../../general/components/global/FormGroup';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/hooks';
import { setUser, User } from '../../features/auth/authSlice';

const Wrapper = styled.div`
  .form-check-label {
    margin-left: 12px;
  }

  button:disabled {
    &::after,
    &::before {
      background-color: var(--bs-gray-500);
    }

    border: none;
  }
`;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}

function Register(): JSX.Element {
  const navigate = useNavigate();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const dispatch = useAppDispatch();

  const schema = Yup.object({
    firstName: Yup.string().required('Field required'),
    lastName: Yup.string().required('Field required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Field required'),
    phoneNumber: Yup.string().required('Field required'),
    password: Yup.string().required('Field required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Field required')
  });

  const handleRegister = async (data: FormValues) => {
    const temp: User = {
      id: Math.floor(Math.random() * 100),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber
    };
    dispatch(setUser(temp));

    navigate('/verify-email');
  };

  return (
    <Layout>
      <Wrapper className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>Create an Account</h3>
                  </div>
                  <Formik
                    initialValues={{
                      firstName: '',
                      lastName: '',
                      email: '',
                      phoneNumber: '',
                      password: '',
                      passwordConfirmation: ''
                    }}
                    validationSchema={schema}
                    onSubmit={async (values) => {
                      await handleRegister(values);
                    }}
                  >
                    {({ handleSubmit, isSubmitting, isValid, values }) => (
                      <form onSubmit={handleSubmit}>
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3"
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3"
                          type="number"
                          name="phoneNumber"
                          placeholder="Phone Number"
                        />
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3 password"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3 password"
                          type="password"
                          name="passwordConfirmation"
                          placeholder="Confirm Password"
                        />

                        <div className="login_footer form-group mb-3">
                          <div className="check-form">
                            <div className="custom-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox2"
                                onChange={(e: any) =>
                                  setAgreedToTerms(e.target.checked)
                                }
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
                            disabled={
                              isSubmitting ||
                              !isValid ||
                              !values.email ||
                              !values.password ||
                              !agreedToTerms
                            }
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                  <div className="form-note text-center">
                    Already have an account? <Link to="/login">Log in</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Register;
