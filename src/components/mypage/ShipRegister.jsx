import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material/';
import { useForm } from 'react-hook-form';

const ShipRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSumbit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log({
      email: form.get('email'),
      password: form.get('password'),
    });
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component='h1' variant='h5'>
          선상등록
        </Typography>
        <Box component='form' noValidate onSubmit={handleSumbit} sx={{ mt: 3 }}>
          <FormControl component='fieldset' variant='standard'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type='email'
                  id='email'
                  name='email'
                  label='이메일 주소'
                  {...register('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='password'
                  id='password'
                  name='password'
                  label='비밀번호 (숫자+영문자+특수문자 8자리 이상)'
                  {...register('password')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='password'
                  id='rePassword'
                  name='rePassword'
                  label='비밀번호 재입력'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='name'
                  name='name'
                  label='이름'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              size='large'
            >
              회원가입
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};

export default ShipRegister;
