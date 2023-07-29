import clsx from 'clsx';
import PropTypes from 'prop-types';
import { List, Item, Name, Status, Online, Offline } from './FriendList.styled';

console.dir(Status);

export const FriendList = ({ friends }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="friend">
          <List>
            {friends.map(({ avatar, name, isOnline, id }) => (
              <Item key={id}>
                <Status>{isOnline ? <Online /> : <Offline />}</Status>
                <img
                  className="avatar"
                  src={avatar}
                  alt="User avatar"
                  width="48"
                />
                <Name>{name}</Name>
              </Item>
            ))}
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
