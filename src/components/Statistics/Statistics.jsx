import PropTypes from 'prop-types';

import { StatisticsWrapper, StatList, Item, Title } from './Statistics.styled';

import { getRandomHexColor } from '../../utills/getRandomHexColor';

export const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className="section statistics">
      <div className="container">
        <StatisticsWrapper>
          {title ? <Title>{title}</Title> : null}

          <StatList>
            {stats.map(item => {
              const { id, label, percentage } = item;

              return (
                <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
                  <span className="label">{label}</span>
                  <span className="percentage">{percentage}%</span>
                </Item>
              );
            })}
          </StatList>
        </StatisticsWrapper>
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
