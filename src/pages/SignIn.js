import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { changeEmail, changePassword } from '../redux/authSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box component="form" sx={{ mt: 4 }}>
          <Avatar sx={{ mx: 'auto', bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Sign In
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button fullWidth sx={{ mt: 2 }} type="submit" variant="contained">
            Sign In
          </Button>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <Link>Forgot password?</Link>
            <Link>Don't have an account? Sign up</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
