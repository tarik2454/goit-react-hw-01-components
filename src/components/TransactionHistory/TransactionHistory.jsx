import PropTypes from 'prop-types';
import style from './TransactionHistory.module.scss';

export const TransactionHistory = ({ transactions }) => {
  return (
    <section className="section">
      <div className="container">
        <table className={style.transactionHistory}>
          <thead className={style.transactionHeader}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody className={style.transactionData}>
            {transactions.map((transaction, index) => {
              const { id, type, amount, currency } = transaction;

              const rowStyle = {
                backgroundColor:
                  index % 2 !== 0 ? 'rgb(240, 240, 240)' : 'inherit',
              };

              return (
                <tr key={id} style={rowStyle}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
