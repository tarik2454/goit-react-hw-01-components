import PropTypes from 'prop-types';
// import clsx from 'clsx';
import style from './Statistics.module.scss';
import { getRandomHexColor } from '../../services/getRandomHexColor';

export const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className="section statistics">
      <div className="container">
        <div className={style.statisticsWrapper}>
          {title ? <h2 className={style.title}>{title}</h2> : null}

          <ul className={style.statList}>
            {stats.map(item => {
              const { id, label, percentage } = item;

              return (
                <li
                  key={id}
                  className={style.item}
                  style={{ backgroundColor: getRandomHexColor() }}
                >
                  <span
                    className={style.label}
                    // className={clsx(style.label, style.success, {
                    //   [style.test]: true,
                    // })}
                  >
                    {label}
                  </span>
                  <span className="percentage">{percentage}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
