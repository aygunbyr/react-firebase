import { Outlet, Navigate } from 'react-router-dom';
import { useIsLoggedIn } from '../config/hooks';

const Layout = () => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (isLoggedIn === false) {
    return <Navigate replace to="/sign-in" />;
  }

  console.log('is logged in = ' + isLoggedIn);

  return <Outlet />;
};

export default Layout;
