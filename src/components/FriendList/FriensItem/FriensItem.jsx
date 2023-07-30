import clsx from 'clsx';
import PropTypes from 'prop-types';
import style from './FriendItem.module.scss';

export const FriensItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        // style={{ backgroundColor: isOnline ? s.online : s.ofline }}
        className={clsx(style.status, {
          [style.online]: isOnline,
          [style.offline]: !isOnline,
        })}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriensItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
