import styled from 'styled-components';
import Layout from '../../general/components/global/Layout';
import { useAppSelector } from '../../redux/hooks';

const Wrapper = styled.div`
  width: 100vw;
  padding: 72px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .subHeading {
    color: var(--body_text);
    width: 58.3rem;
  }
`;

const VerifyEmail = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Layout>
      <Wrapper className="flexColumn justifyCenter alignCenter">
        <h3 className="heading textCenter">
          You're almost done! Please verify your email
        </h3>
        <p className="l1-large subHeading textCenter mt-4">
          An email has been sent to <b>{user?.email || 'you'}</b> with a link to
          verify your account. <br />
          If you don't see this mail in your inbox, please check your spam.
        </p>
      </Wrapper>
    </Layout>
  );
};

export default VerifyEmail;
