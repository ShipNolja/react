import React, { useRef } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRefreshToken } from '../redux/Auth/cookie';
import { userLogin } from '../apis/users';
import { SET_TOKEN } from '../redux/Auth/auth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandleSubmit = async (event) => {
    event.preventDefault();
    const res = await userLogin(email.value, password.value);

    if (res.status === 404) {
      alert('로그인에 실패했습니다!');
      return;
    }

    alert('로그인 성공!');

    const { accessToken, accessTokenExpireDate, refreshToken } = res.data;

    setRefreshToken(refreshToken);
    dispatch(SET_TOKEN({ accessToken, accessTokenExpireDate }));
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expireTime', accessTokenExpireDate);
    navigate('/');

    // 만료시간 뒤에 지우기
    setTimeout(() => {
      localStorage.clear();
    }, accessTokenExpireDate);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
        <Typography component='h1' variant='h5'>
          로그인
        </Typography>
        <Box
          component='form'
          onSubmit={loginHandleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='이메일'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='비밀번호'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
