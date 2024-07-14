import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    ...(isSignUp && {
      groupName: Yup.string().required('Group name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      groupName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{ display: 'flex', width: '100%', maxWidth: 900 }}
      >
        <Box
          sx={{
            flex: 1,
            background: `url('https://via.placeholder.com/400') no-repeat center center`,
            backgroundSize: 'cover',
          }}
        ></Box>
        <Box
          sx={{
            flex: 1,
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              marginBottom: 3,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setIsSignUp(false)}
              disabled={!isSignUp}
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              onClick={() => setIsSignUp(true)}
              disabled={isSignUp}
            >
              Sign Up
            </Button>
          </Box>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
            {isSignUp && (
              <>
                <TextField
                  fullWidth
                  id="groupName"
                  name="groupName"
                  label="Group Name"
                  value={formik.values.groupName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.groupName && Boolean(formik.errors.groupName)
                  }
                  helperText={
                    formik.touched.groupName && formik.errors.groupName
                  }
                />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </>
            )}
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
