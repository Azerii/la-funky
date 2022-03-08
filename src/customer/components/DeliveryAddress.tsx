import axios, { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import FormGroup from '../../general/components/global/FormGroup';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { base_url } from '../../utils/utils';
import * as Yup from 'yup';
import styled from 'styled-components';
import SelectLocation from '../../general/components/checkout/SelectLocation';
import Loader from '../../general/components/global/Loader';
import {
  DeliveryAddress,
  setDeliveryAddress
} from '../../features/shop/shopSlice';

const Wrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;

    .spanFull {
      grid-column: 1/ 3;
    }
  }
`;

function DeliveryAddress_(): JSX.Element {
  const token = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState<DeliveryAddress | undefined>();

  const getAddresses = async (): Promise<void> => {
    try {
      const res = await axios.get(`${base_url}/users/addresses`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.data.status === 'success') {
        setAddress(res.data.data[0]);

        dispatch(setDeliveryAddress(res.data.data[0]));
      }
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.log(e);
    }
  };

  const schema = Yup.object({
    firstName: Yup.string().required('Field required'),
    lastName: Yup.string().required('Field required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Field required'),
    phoneNumber: Yup.string().required('Field required'),
    city: Yup.string().required('Field required'),
    address: Yup.string().required('Field required'),
    deliveryLocationId: Yup.string().required('Field required'),
    state: Yup.string().required('Field required'),
    country: Yup.string().required('Field required'),
    zipCode: Yup.string().required('Field required')
  });

  const handleSave = async (data: DeliveryAddress) => {
    const temp = {
      ...data,
      phoneNumber: data.phoneNumber?.toString(),
      zipCode: data.zipCode?.toString(),
      deliveryLocationId: data.deliveryLocationId
        ? parseInt(data.deliveryLocationId)
        : null
    };

    try {
      let res: AxiosResponse;
      if (address) {
        res = await axios.put(
          `${base_url}/users/addresses/${address.id}`,
          temp,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
      } else {
        res = await axios.post(`${base_url}/users/addresses`, temp, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      if (res.data.status === 'success') {
        dispatch(setDeliveryAddress(res.data.data));
        alert('Details saved successfuly');
      }
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

  useEffect(() => {
    getAddresses();
    // eslint-dsiable-next-line
  }, []);

  return (
    <Wrapper
      className="tab-pane fade active show"
      id="address"
      role="tabpanel"
      aria-labelledby="address-tab"
    >
      <div className="row">
        <div className="col-12">
          <div className="card mb-3 mb-lg-0">
            <div className="card-header">
              <h3>Address Details</h3>
            </div>
            {loading && (
              <>
                <div className="medium_divider"></div>
                <Loader />
                <div className="medium_divider"></div>
              </>
            )}
            {(address || !loading) && (
              <div className="card-body">
                <Formik
                  initialValues={{
                    firstName: address?.firstName || user?.firstName,
                    lastName: address?.lastName || user?.lastName,
                    email: address?.email || user?.email,
                    phoneNumber: address?.phoneNumber || user?.phoneNumber,
                    address: address?.address || '',
                    deliveryLocationId: address?.deliveryLocationId || '',
                    city: address?.city || '',
                    state: address?.state || '',
                    country: address?.country || '',
                    zipCode: address?.zipCode || ''
                  }}
                  validationSchema={schema}
                  onSubmit={async (values) => {
                    await handleSave(values);
                  }}
                >
                  {({ handleSubmit, isSubmitting, isValid, values }) => (
                    <form onSubmit={handleSubmit}>
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        type="text"
                        name="email"
                        placeholder="Email Address"
                      />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                      />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        name="address"
                        placeholder="Address"
                      />
                      <SelectLocation name="deliveryLocationId" />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        name="city"
                        placeholder="City"
                      />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        name="state"
                        placeholder="State"
                      />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group"
                        name="country"
                        placeholder="Country"
                      />
                      <FormGroup
                        fieldStyle="shortText"
                        className="form-group mb-3"
                        type="number"
                        name="zipCode"
                        placeholder="Zip Code"
                      />
                      <div className="form-group mb-3">
                        <button
                          type="submit"
                          className="btn btn-fill-out btn-block"
                          disabled={isSubmitting || !isValid || !values.email}
                        >
                          Save Details
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default DeliveryAddress_;
