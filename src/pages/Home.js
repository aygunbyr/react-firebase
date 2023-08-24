import { useDispatch } from 'react-redux';
import { logOut } from '../redux/authSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Home;
