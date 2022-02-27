import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../general/components/global/Layout';
import { base_url } from '../../utils/utils';

const Wrapper = styled.div`
  width: 100vw;
  padding: 72px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .subHeading {
    width: 58.3rem;
  }
`;

const VerifyAccountSuccess = () => {
  const { search } = useLocation();
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  const checkConfirmation = async () => {
    const confirmation = new URLSearchParams(search).get('confirmation');

    try {
      await axios.get(
        `${base_url}/auth/email-confirmation?confirmation=${confirmation}`
      );

      setConfirmed(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    checkConfirmation();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      {!loading && !confirmed && (
        <Wrapper className="flexColumn justifyCenter alignCenter">
          <p>Invalid confirmation token</p>
        </Wrapper>
      )}
      {loading ? (
        <Wrapper className="flexColumn justifyCenter alignCenter">
          <p>Checking...</p>
        </Wrapper>
      ) : confirmed ? (
        <Wrapper className="flexColumn justifyCenter alignCenter">
          <h3 className="heading textCenter mt-4 mb-4">
            Your email has been verified!
          </h3>
          <a
            href="/login"
            className="l1-large subHeading textCenter colorSecondary"
          >
            Login
          </a>
        </Wrapper>
      ) : null}
    </Layout>
  );
};

export default VerifyAccountSuccess;
