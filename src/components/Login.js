import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import { userLogin } from '../apis/user/login';
import { setRefreshToken } from '../redux/Auth/cookie';
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from '../redux/Auth/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  const loginHandleSubmit = async (event) => {
    event.preventDefault();
    const res = await userLogin(idRef.current.value, pwRef.current.value)();

    const { accessToken, accessTokenExpireDate, grantType, refreshToken } =
      res.data;

    if (res.statusText !== 'OK') {
      alert('에러발생');
      return;
    }
    setRefreshToken(refreshToken);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expireTime', accessTokenExpireDate);
    dispatch(SET_TOKEN({ accessToken, accessTokenExpireDate }));
    navigate('/');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <TitleText>로그인</TitleText>

        <LoginForm onSubmit={loginHandleSubmit}>
          <InputLabel id='email'>아이디</InputLabel>
          <LoginInput id='email' type='email' ref={idRef} />
          <InputLabel id='password'>비밀번호</InputLabel>
          <LoginInput id='password' type='password' ref={pwRef} />
          <CustomButton
            type='submit'
            color={Colors.colorWhite}
            background={Colors.primaryColor}
            hoverbackground={Colors.darkPrimaryColor}
            style={{ width: '100%', height: 50 }}
          >
            로그인
          </CustomButton>
        </LoginForm>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
`;

const LoginBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  max-width: 800px;
  width: 100%;
  padding: 40px 0;
  border-radius: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

const LoginInput = styled.input`
  border: 1px solid ${Colors.colorWhiteGrey};
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 16px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;

const TitleText = styled.h1`
  font-size: 25px;
  margin-bottom: 40px;
`;
