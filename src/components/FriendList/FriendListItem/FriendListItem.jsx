import PropTypes from 'prop-types';
import { Item, Name, Status, Online, Offline } from './FriendListItem';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>{isOnline ? <Online /> : <Offline />}</Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
