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

const SignUp = () => {
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
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
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