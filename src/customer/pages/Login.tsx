import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../general/components/global/Layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import FormGroup from '../../general/components/global/FormGroup';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/hooks';
import { setToken, setUser, User } from '../../features/auth/authSlice';
import axios from 'axios';
import { base_url } from '../../utils/utils';

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
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const schema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Field required'),
    password: Yup.string().required('Field required')
  });

  const handleLogin = async (data: FormValues) => {
    try {
      const res = await axios.post(`${base_url}/auth/login`, data);

      if (res.data.status === 'success') {
        dispatch(setUser(res.data.data.user));
        dispatch(setToken(res.data.data.accessToken));
        navigate('/account');
      }
    } catch (e: any) {
      alert(e.response.data.message);
    }
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
                    <h3>Login to your account</h3>
                  </div>
                  <div className="small_divider"></div>
                  <Formik
                    initialValues={{
                      email: '',
                      password: ''
                    }}
                    validationSchema={schema}
                    onSubmit={async (values) => {
                      await handleLogin(values);
                    }}
                  >
                    {({ handleSubmit, isSubmitting, isValid, values }) => (
                      <form onSubmit={handleSubmit}>
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3"
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                        <FormGroup
                          fieldStyle="shortText"
                          className="form-group mb-3 password"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />

                        <div className="form-group mb-3">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block"
                            disabled={
                              isSubmitting ||
                              !isValid ||
                              !values.email ||
                              !values.password
                            }
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                  <div className="form-note text-center">
                    Don't have an account? <Link to="/register">Register</Link>
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

export default Login;
