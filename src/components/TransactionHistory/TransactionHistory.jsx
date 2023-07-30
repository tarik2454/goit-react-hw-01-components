import PropTypes from 'prop-types';

import {
  TransactionHistoryWrapper,
  TransactionHeader,
  TransactionData,
  StyledTh,
  StyledTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <section className="section">
      <div className="container">
        <TransactionHistoryWrapper>
          <TransactionHeader>
            <tr>
              <StyledTh>Type</StyledTh>
              <StyledTh>Amount</StyledTh>
              <StyledTh>Currency</StyledTh>
            </tr>
          </TransactionHeader>

          <TransactionData>
            {transactions.map((transaction, index) => {
              const { id, type, amount, currency } = transaction;

              const rowStyle = {
                backgroundColor:
                  index % 2 !== 0 ? 'rgb(240, 240, 240)' : 'inherit',
              };

              return (
                <tr key={id} style={rowStyle}>
                  <StyledTd>{type}</StyledTd>
                  <StyledTd>{amount}</StyledTd>
                  <StyledTd>{currency}</StyledTd>
                </tr>
              );
            })}
          </TransactionData>
        </TransactionHistoryWrapper>
      </div>
    </section>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
