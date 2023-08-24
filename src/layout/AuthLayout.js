import { Outlet, Navigate } from 'react-router-dom';
import { Avatar, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useIsLoggedIn } from '../config/hooks';

const AuthLayout = () => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (isLoggedIn === true) {
    return <Navigate replace to="/" />;
  }

  return (
    <Container maxWidth="xs" sx={{ pt: 4 }}>
      <Avatar sx={{ mx: 'auto', bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
