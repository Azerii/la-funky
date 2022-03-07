import styled from 'styled-components';

const DataTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.25rem;

  td {
    border: 1px solid var(--bs-gray-200);
    padding: 18px;
    color: var(--gray);
    font-size: 14px;
    line-height: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100px;
  }

  tr {
    transition: all 0.2s ease-out;
    position: relative;
  }

  tr.header {
    cursor: default;
  }

  th {
    padding: 18px;
    text-align: left;
    color: var(--gray);
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
  }
`;

export default DataTable;
