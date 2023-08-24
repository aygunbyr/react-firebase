import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Link, TextField, Typography } from '@mui/material';

import {
  changeName,
  changeEmail,
  changePassword,
  register,
} from '../redux/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleNameChange = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Sign Up
      </Typography>

      {error && (
        <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
          {error}
        </Typography>
      )}

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

      <Button
        disabled={isLoading}
        fullWidth
        sx={{ mt: 2 }}
        type="submit"
        variant="contained"
      >
        {isLoading ? 'Loading...' : 'Sign Up'}
      </Button>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Link component={RouterLink} to="/sign-in">
          Already have an account? Sign in
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
