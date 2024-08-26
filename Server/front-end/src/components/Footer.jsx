import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000',  // Set the background color to black
        color: '#fff',  // Set the text color to white
        padding: '20px 0',
        marginTop: 'auto',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Built with passion and dedication by Pranav N. | © 2024 All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
