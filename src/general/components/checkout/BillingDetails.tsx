import { Formik } from 'formik';
import FormGroup from '../global/FormGroup';
import SelectLocation from './SelectLocation';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';

const Wrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    pointer-events: none;
  }
`;

function BillingDetails(): JSX.Element {
  const address = useAppSelector((state) => state.shop.deliveryAddress);

  const schema = Yup.object({
    firstName: Yup.string().required('Field required'),
    lastName: Yup.string().required('Field required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Field required'),
    phoneNumber: Yup.string().required('Field required'),
    address: Yup.string().required('Field required'),
    deliveryLocationId: Yup.string().required('Field required'),
    city: Yup.string().required('Field required'),
    state: Yup.string().required('Field required'),
    country: Yup.string().required('Field required'),
    zipCode: Yup.string().required('Field required')
  });

  return (
    <Wrapper className="col-md-6">
      <div className="heading_s1">
        <h4>Billing Details</h4>
      </div>
      <Formik
        initialValues={{
          firstName: address?.firstName || '',
          lastName: address?.lastName || '',
          email: address?.email || '',
          phoneNumber: address?.phoneNumber || '',
          address: address?.address || '',
          deliveryLocationId: address?.deliveryLocationId || '',
          city: address?.city || '',
          state: address?.state || '',
          country: address?.country || '',
          zipCode: address?.zipCode || ''
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          return values;
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
              readOnly
            />
            <FormGroup
              fieldStyle="shortText"
              className="form-group"
              type="text"
              name="lastName"
              placeholder="Last Name"
              readOnly
            />
            {/* <FormGroup
              fieldStyle="shortText"
              className="form-group"
              type="text"
              name="email"
              placeholder="Email Address"
              readOnly
            /> */}
            <FormGroup
              fieldStyle="shortText"
              className="form-group"
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              readOnly
            />
            <FormGroup
              fieldStyle="shortText"
              className="form-group"
              name="address"
              placeholder="Address"
              readOnly
            />
            <SelectLocation name="deliveryLocationId" readOnly />
            <FormGroup
              fieldStyle="shortText"
              className="form-group"
              name="city"
              placeholder="City"
              readOnly
            />
            <FormGroup
              fieldStyle="shortText"
              className="form-group"
              name="state"
              placeholder="State"
              readOnly
            />
            <FormGroup
              fieldStyle="shortText"
              className="form-group"
              name="country"
              placeholder="Country"
              readOnly
            />
            <FormGroup
              fieldStyle="shortText"
              className="form-group mb-3"
              type="number"
              name="zipCode"
              placeholder="Zip Code"
              readOnly
            />
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default BillingDetails;
