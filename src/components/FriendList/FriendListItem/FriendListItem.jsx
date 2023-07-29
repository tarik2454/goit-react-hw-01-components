// import PropTypes from 'prop-types';
import { from } from 'stylis';
import { Item, Name, Status, Online, Offline } from './FriendListItem';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Item key={id}>
      <Status>{isOnline ? <Online /> : <Offline />}</Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
