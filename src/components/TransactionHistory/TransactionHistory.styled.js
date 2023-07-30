import styled from 'styled-components';

export const TransactionHistoryWrapper = styled.table`
  table-layout: fixed;
  width: 500px;
  border-collapse: collapse;
  box-shadow: 0px 4px 10px -1px rgba(128, 126, 128, 1);
  border-radius: 2px;
  overflow: hidden;
`;

export const TransactionHeader = styled.thead`
  background-color: rgb(28, 179, 230);
`;

export const TransactionData = styled.tbody`
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
`;

export const StyledTh = styled.th`
  padding: 20px;
  color: ${({ theme }) => theme.colors.$white};
`;

export const StyledTd = styled.td`
  padding: 20px;
  border-bottom: 1px solid silver;
  text-align: center;
`;
