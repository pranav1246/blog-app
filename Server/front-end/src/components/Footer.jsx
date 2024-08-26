import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: '20px 0',
        marginTop: 'auto',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="textSecondary">
          Built with passion and dedication by Pranav N. | © 2024 All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
