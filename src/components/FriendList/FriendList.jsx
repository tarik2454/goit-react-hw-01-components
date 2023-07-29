import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem/FriendListItem.jsx';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="friend">
          <List>
            {friends.map(({ avatar, name, isOnline, id }) => {
              return (
                <FriendListItem
                  avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                  id={id}
                />
              );
            })}
          </List>
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
