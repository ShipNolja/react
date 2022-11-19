import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import styled from 'styled-components';
import { userRegister, validateUserId, validatePhone } from '../../apis/users';

const Register = () => {
  const navigate = useNavigate();

  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //onBlur 이벤트가 발생할때마다 validation이 실행된다.

  const checkPhoneOnBlur = async (event) => {
    const res = await validatePhone(phone);
    console.log(res);
    if (res.data.id !== 1) {
      setPhoneValid(false);
      return;
    }

    //핸드폰 사용 가능일 때
    setPhoneValid(true);
  };

  const checkEmailOnBlur = async (event) => {
    const res = await validateUserId(email);
    console.log(res);
    if (res.data.id !== 1) {
      setEmailValid(false);
      return;
    }

    // 이메일 사용 가능일 때
    setEmailValid(true);
  };

  const onSubmit = async ({ email, password, name, phone }) => {
    const res = await userRegister(email, password, name, phone);

    if (res.data.id === -1) {
      alert('회원가입 실패');
      console.log('회원가입 실패', res);
      return;
    }

    alert('회원가입 성공!');
    navigate('/login');
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
          회원가입
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <FormControl component='fieldset' variant='standard'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type='email'
                  id='email'
                  label='이메일 주소'
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                    onChange: (e) => setEmail(e.target.value),
                    onBlur: checkEmailOnBlur,
                    validate: () => emailValid,
                  })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <ErrorSpan>이메일을 입력해주세요!</ErrorSpan>
                )}

                {errors.email && errors.email.type === 'pattern' && (
                  <ErrorSpan>이메일형식이 올바르지 않습니다.</ErrorSpan>
                )}

                {!emailValid && <ErrorSpan>사용중인 이메일입니다</ErrorSpan>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='password'
                  id='password'
                  label='비밀번호 (숫자+영문자+특수문자 8자리 이상 16자리 이하)'
                  inputProps={{
                    minLength: 8,
                    maxLength: 16,
                  }}
                  {...register('password', {
                    required: true,
                    pattern:
                      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/i,
                  })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <ErrorSpan>비밀번호를 입력해주세요!</ErrorSpan>
                )}
                {errors.password && errors.password.type === 'pattern' && (
                  <ErrorSpan>
                    8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 사용해주세요!
                  </ErrorSpan>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='password'
                  id='passwordConfirm'
                  label='비밀번호 재입력'
                  {...register('passwordConfirm', {
                    required: true,
                    validate: (value) => {
                      if (watch('password') !== value) {
                        return '비밀번호가 일치하지 않습니다.';
                      }
                    },
                  })}
                />
                {errors.passwordConfirm && (
                  <ErrorSpan>비밀번호가 일치하지 않습니다.</ErrorSpan>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='name'
                  label='이름'
                  inputProps={{
                    minLength: 1,
                    maxLength: 10,
                  }}
                  {...register('name', {
                    required: true,
                    pattern: /^[가-힣]+$/,
                  })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <ErrorSpan>이름을 입력해주세요!</ErrorSpan>
                )}
                {errors.name &&
                  errors.name.type === ('minLength' || 'maxLength') && (
                    <ErrorSpan>
                      최소 1~10자 이상의 이름을 입력해주세요!
                    </ErrorSpan>
                  )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='phone'
                  label='핸드폰번호'
                  inputProps={{
                    minLength: '10',
                    maxLength: '11',
                  }}
                  {...register('phone', {
                    required: true,
                    pattern: /^[0-9]{10,11}$/,
                    onChange: (e) => setPhone(e.target.value),
                    onBlur: checkPhoneOnBlur,
                    validate: () => phoneValid,
                  })}
                />
                {errors.phone && errors.phone.type === 'required' && (
                  <ErrorSpan>핸드폰번호 입력해주세요!</ErrorSpan>
                )}
                {errors.phone && errors.phone.type === 'pattern' && (
                  <ErrorSpan>올바른 핸드폰 번호를 입력해주세요!</ErrorSpan>
                )}

                {!phoneValid && <ErrorSpan>사용중인 번호입니다.</ErrorSpan>}
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

export default Register;

const ErrorSpan = styled.span`
  color: red;
  margin-bottom: 20px;
`;
