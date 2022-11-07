import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';

const Register = () => {
  //onBlur 이벤트가 발생할때마다 validation이 실행된다.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch('id')); // watch input value by passing the name of it

  return (
    <RegisterContainer>
      <RegisterBox>
        <TitleText>회원가입</TitleText>

        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <InputLabel id='id'>아이디</InputLabel>
          <RegisterInput
            id='id'
            type='text'
            {...register('id', {
              required: true,
              minLength: 6,
              pattern: /^[a-z0-9]+$/,
            })}
          />
          {errors.id && errors.id.type === 'required' && (
            <ErrorSpan>아이디를 입력해주세요!</ErrorSpan>
          )}
          {errors.id && errors.id.type === 'minLength' && (
            <ErrorSpan>최소 6자 이상의 아이디를 입력해주세요!</ErrorSpan>
          )}
          {errors.id && errors.id.type === 'pattern' && (
            <ErrorSpan>
              영문자로 시작하는 소문자 또는 숫자 6자 이상을 입력하세요!
            </ErrorSpan>
          )}

          <InputLabel htmlFor='password'>비밀번호</InputLabel>
          <RegisterInput
            id='password'
            type='password'
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 16,
              pattern:
                /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/i,
            })}
          />
          {errors.password && errors.password.type === 'required' && (
            <ErrorSpan>비밀번호를 입력해주세요!</ErrorSpan>
          )}
          {errors.password &&
            errors.password.type === 'minLength' &&
            errors.password.type === 'maxLength' && (
              <ErrorSpan>8~16자리의 비밀번호를 입력해주세요!</ErrorSpan>
            )}
          {errors.password && errors.password.type === 'pattern' && (
            <ErrorSpan>
              8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 사용해주세요!
            </ErrorSpan>
          )}

          <InputLabel htmlFor='passwordConfirm'>비밀번호 확인</InputLabel>
          <RegisterInput
            id='passwordConfirm'
            type='password'
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

          <InputLabel htmlFor='userEmail'>이메일</InputLabel>
          <RegisterInput
            id='userEmail'
            type='email'
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <ErrorSpan>이메일을 입력해주세요!</ErrorSpan>
          )}

          {errors.email && errors.email.type === 'pattern' && (
            <ErrorSpan>이메일형식이 올바르지 않습니다.</ErrorSpan>
          )}

          <CustomButton
            type='submit'
            color={Colors.colorWhite}
            background={Colors.primaryColor}
            hoverbackground={Colors.darkPrimaryColor}
            style={{ width: '100%', height: 50 }}
          >
            회원가입
          </CustomButton>
        </RegisterForm>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
`;

const RegisterBox = styled.article`
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

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

const RegisterInput = styled.input`
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

const ErrorSpan = styled.span`
  color: red;
  margin-bottom: 20px;
`;
