import style from './Profile.module.scss';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <section className="section">
      <div className="container">
        <div className={style.profile}>
          <div className={style.description}>
            <img className={style.avatar} src={avatar} alt="User avatar" />
            <p className={style.name}>{username}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
          </div>

          <ul className={style.stats}>
            <li className={style.statsItem}>
              <span className={style.label}>Followers</span>
              <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li className={style.statsItem}>
              <span className={style.label}>Views</span>
              <span className={style.quantity}>{stats.views}</span>
            </li>
            <li className={style.statsItem}>
              <span className={style.label}>Likes</span>
              <span className={style.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
