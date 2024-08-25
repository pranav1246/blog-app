import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Link
} from '@mui/material';

import {API} from '../../service/api.js'


const AuthForm = () => {

  const signupInitalValues={
    name:'',
    username:'',
    password:''
  }
  const [isSignUp, setIsSignUp] = useState(false); 
  const [signup,setSignUp]=useState(signupInitalValues)
  const [error,setError]=useState('')

const  onInputChange=(e)=>{
setSignUp({...signup,[e.target.name]:e.target.value})
}

const handleAuthAction = async () => {
  try {
    if (isSignUp) {
      const response = await API.userSingup(signup);
      console.log("API response:", response);
      if (response.isSuccess) {
        setError('');
       setSignUp(signupInitalValues)
       setIsSignUp(false)
      } else {
        setError('Someting went wrong')
      }
    } else {
      console.log("Login function not implemented yet.");
    }
  } catch (error) {
    console.error("Error during authentication:", error.message || error);
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
            onChange={(e) =>onInputChange(e)}
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
          onChange={(e) =>onInputChange(e)}
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
          onChange={(e) =>onInputChange(e)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleAuthAction}
        >
        {error &&  <Typography>{error}</Typography> }
          {isSignUp ? 'Sign Up' : 'Login'}
        </Button>
        <Link
          component="button"
          variant="body2"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Container>
  );
};

export default AuthForm;
