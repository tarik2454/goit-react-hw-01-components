import clsx from 'clsx';
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
