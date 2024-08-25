import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';

const Logo = styled('img')({
  height: '100px',
  marginRight: 'auto',
});

const Header = () => {
  const navigate = useNavigate();
  const { account, setAccount } = useContext(DataContext);

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    setAccount({ username: '', name: '' });
    navigate('/auth');
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo src="https://static.theprint.in/wp-content/uploads/2023/06/ANI-20230622084446.jpg?compress=true&quality=80&w=800&dpr=1" alt="Logo" />
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          {account.username ? (
            <>
              <Typography sx={{ marginRight: 2 }}>{account.name}</Typography>
              <Button color="inherit" sx={{ marginRight: 2 }} onClick={() => navigate('/create')}>
                Create Blog
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" sx={{ marginRight: 1 }} onClick={() => navigate('/auth')}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
