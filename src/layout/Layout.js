import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useIsLoggedIn } from '../config/hooks';

const Layout = () => {
  const isLoggedIn = useIsLoggedIn();

  const [anchorEl, setAnchorEl] = useState(null);

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (isLoggedIn === false) {
    return <Navigate replace to="/sign-in" />;
  }

  return (
    <>
      <AppBar position="apsolute">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home
          </Typography>

          <IconButton
            color="inherit"
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
            size="large"
          >
            <AccountCircleIcon />
          </IconButton>

          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => {
              setAnchorEl(null);
            }}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Sign out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
