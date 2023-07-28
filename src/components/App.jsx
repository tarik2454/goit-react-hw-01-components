import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

import style from './App.module.scss';

export const App = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Profile {...user} />
      </div>
      <div className={style.container}>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className={style.container}>
        <FriendList friends={friends} />
      </div>
      <div className={style.container}>
        <TransactionHistory items={transactions} />
      </div>
    </main>
  );
};
