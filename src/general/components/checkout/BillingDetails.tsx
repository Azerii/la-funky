import { Formik } from 'formik';
import FormGroup from '../global/FormGroup';
import SelectLocation from './SelectLocation';
import * as Yup from 'yup';
import styled from 'styled-components';

const Wrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
`;

function BillingDetails(): JSX.Element {
  const schema = Yup.object({
    firstName: Yup.string().required('Field required'),
    lastName: Yup.string().required('Field required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Field required'),
    phoneNumber: Yup.string().required('Field required'),
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
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          city: '',
          state: '',
          country: '',
          zipCode: ''
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
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default BillingDetails;
