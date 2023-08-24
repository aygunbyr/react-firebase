import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Link, TextField, Typography } from '@mui/material';

import { changeEmail, forgotPassword } from '../redux/authSlice';

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.auth.email);

  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Forgot Password
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

      <Button
        disabled={isLoading}
        fullWidth
        sx={{ mt: 2 }}
        type="submit"
        variant="contained"
      >
        {isLoading ? 'Loading...' : 'Send Reset Password Email'}
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
          Back to Sign in
        </Link>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
