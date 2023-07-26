import user from '../assets/user.json';
import data from '../assets/data.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div>
      <div>
        <Profile {...user} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
    </div>
  );
};
