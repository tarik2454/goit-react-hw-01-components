import clsx from 'clsx';
import PropTypes from 'prop-types';
import style from './FriendList.module.scss';

export const FriendList = ({ friends }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="friend">
          <ul className={style.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
              <li key={id} className={style.item}>
                <span
                  // style={{ backgroundColor: isOnline ? s.online : s.ofline }}
                  className={clsx(style.status, {
                    [style.online]: isOnline,
                    [style.offline]: !isOnline,
                  })}
                ></span>
                <img
                  className="avatar"
                  src={avatar}
                  alt="User avatar"
                  width="48"
                />
                <p className={style.name}>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
