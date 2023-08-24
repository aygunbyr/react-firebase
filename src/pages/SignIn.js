import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Link, TextField, Typography } from '@mui/material';

import { changeEmail, changePassword, logIn } from '../redux/authSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Sign In
      </Typography>

      {error && (
        <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
          {error}
        </Typography>
      )}

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

      <Button
        disabled={isLoading}
        fullWidth
        sx={{ mt: 2 }}
        type="submit"
        variant="contained"
      >
        {isLoading ? 'Loading...' : 'Sign In'}
      </Button>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Link component={RouterLink} to="/forgot-password">
          Forgot password?
        </Link>
        <Link component={RouterLink} to="/sign-up">
          Don't have an account? Sign up
        </Link>
      </Box>
    </Box>
  );
};

export default SignIn;
