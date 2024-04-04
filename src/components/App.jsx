import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from '../data/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload Stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
};

export default App;