import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flight Reservation System
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
