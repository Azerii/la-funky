import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  0% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-1.2rem);
  }

  60% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 48px;
  background-color: transparent;
  margin: auto;

  .dot {
    height: 12px;
    width: 12px;
    background-color: #e60a8e;
    border-radius: 50%;
    animation: ${jump} 1.5s ease infinite;

    &:first-child {
      animation-delay: 100ms;
    }

    &:nth-child(2) {
      animation-delay: 300ms;
    }

    &:last-child {
      animation-delay: 500ms;
    }
  }
`;

const Loader = ({ className }: { className?: string }): JSX.Element => {
  return (
    <Wrapper className={className}>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </Wrapper>
  );
};

export default Loader;
