import { FriensItem } from './FriensItem/FriensItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.scss';

export const FriendList = ({ friends }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="friend">
          <ul className={style.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
              <FriensItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
              />
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
