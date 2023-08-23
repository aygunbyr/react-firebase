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

import { changeName, changeEmail, changePassword } from '../redux/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const handleNameChange = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };

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
            Sign Up
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            required
            autoComplete="name"
            autoFocus
            onChange={handleNameChange}
            value={name}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
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
            Sign Up
          </Button>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <Link>Already have an account? Sign in</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
