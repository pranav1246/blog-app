import React, { useState, useContext } from 'react';
import { Button, TextField, Typography, Container, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';

const AuthForm = () => {
  const initialValues = {
    name: '',
    username: '',
    password: ''
  };

  const [isSignUp, setIsSignUp] = useState(false);
  const [signup, setSignUp] = useState(initialValues);
  const [error, setError] = useState('');

  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const handleAuthAction = async () => {
    try {
      if (isSignUp) {
        const response = await API.userSingup(signup);
        console.log("API response:", response);
        if (response.isSuccess) {
          setError('');
          setSignUp(initialValues);
          setIsSignUp(false);
        } else {
          setError('Something went wrong');
        }
      } else {
        const response = await API.userLogin(signup);
        if (response.isSuccess) {
          setError(' ');
          sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
          sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
          
          setAccount({ username: response.data.username, name: response.data.name });
          navigate('/');
        } else {
          setError("Something went wrong");
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error.message || error);
      setError('An error occurred');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          {isSignUp ? 'Sign Up' : 'Login'}
        </Typography>

        {isSignUp && (
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={onInputChange}
            value={signup.name}
          />
        )}

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus={!isSignUp}
          onChange={onInputChange}
          value={signup.username}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onInputChange}
          value={signup.password}
        />

        {error && <Typography color="error">{error}</Typography>}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleAuthAction}
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </Button>

        <Link
          component="button"
          variant="body2"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError(''); // Reset error on form switch
            setSignUp(initialValues); // Reset form fields on form switch
          }}
        >
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Container>
  );
};

export default AuthForm;
