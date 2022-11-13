import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';

export const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const loginHandleSubmit = (event) => {
    event.preventDefault();
    console.log(idRef.current.value, pwRef.current.value);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <TitleText>로그인</TitleText>

        <LoginForm onSubmit={loginHandleSubmit}>
          <InputLabel id='id'>아이디</InputLabel>
          <LoginInput id='id' type='text' ref={idRef} />
          <InputLabel id='password'>비밀번호</InputLabel>
          <LoginInput id='password' type='password' ref={pwRef} />
          <CustomButton
            type='submit'
            color={Colors.colorWhite}
            background={Colors.primaryColor}
            hoverbackground={Colors.darkPrimaryColor}
            style={{ width: '100%', height: 50 }}
          >
            회원가입
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
  max-height: 600px;
  height: 100%;
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