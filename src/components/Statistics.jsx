export const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(item => {
          const { id, label, percentage } = item;
          return (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
