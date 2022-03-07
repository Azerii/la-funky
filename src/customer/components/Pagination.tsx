import styled from 'styled-components';

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  .divider {
    height: 100%;
    width: 1px;
    background-color: var(--bs-gray-200);
  }

  .colItem {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .item {
    padding: 10px 16px;
  }

  .pageSize {
    span {
      margin-right: 16px;
    }
  }

  #pageIndex {
    padding: 0 16px;
  }

  button {
    width: max-content;
    background-color: var(--bs-primary);
    padding: 10px !important;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .icon {
      height: 20px;
    }
  }
`;

export default Pagination;
