import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const Logo = styled('img')({
  height: '100px',
  marginRight: 'auto',
});

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo src="https://static.theprint.in/wp-content/uploads/2023/06/ANI-20230622084446.jpg?compress=true&quality=80&w=800&dpr=1" alt="Logo" /> 
        <Box sx={{ marginLeft: 'auto' }}>
          <Button color="inherit" sx={{ marginRight: 1 }}>
            Login
          </Button>
          <Button variant="contained" color="primary">
            Join Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
