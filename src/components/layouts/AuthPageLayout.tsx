import React from 'react';
import { Box, Grid, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Login: React.FC = () => {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
    // <div>
    //   <h2>Login Page</h2>
    //   <button onClick={handleLogin}>Login</button>
    // </div>
  );
};

export default Login;
