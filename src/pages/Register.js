import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import { userRegister, validateUserId, validatePhone } from '../api/register';

const Register = () => {
  const navigate = useNavigate();

  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //onBlur 이벤트가 발생할때마다 validation이 실행된다.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
    const res = await userRegister(email, password, name, phone)();

    //회원가입에 실패했을 때
    if (res.data.id === -1) {
      alert('회원가입 실패');
      console.log('회원가입 실패', res);
      return;
    }

    alert('회원가입 성공!');
    navigate('/login');
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <TitleText>회원가입</TitleText>

        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor='userEmail'>이메일</InputLabel>
          <RegisterInput
            id='userEmail'
            type='email'
            placeholder='이메일을 입력해주세요'
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

          <InputLabel htmlFor='password'>비밀번호</InputLabel>
          <RegisterInput
            id='password'
            type='password'
            placeholder='8~16자리의 비밀번호를 입력해주세요!'
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: '8~16자리의 비밀번호를 입력해주세요!',
              },
              maxLength: {
                value: 16,
                message: '8~16자리의 비밀번호를 입력해주세요!',
              },
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
            placeholder='비밀번호 확인'
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

          <InputLabel id='name'>이름</InputLabel>
          <RegisterInput
            id='name'
            type='text'
            placeholder='홍길동'
            {...register('name', {
              required: true,
              minLength: 1,
              maxLength: 10,
              pattern: /^[가-힣]+$/,
            })}
          />
          {errors.name && errors.name.type === 'required' && (
            <ErrorSpan>이름을 입력해주세요!</ErrorSpan>
          )}
          {errors.name && errors.name.type === ('minLength' || 'maxLength') && (
            <ErrorSpan>최소 1~10자 이상의 이름을 입력해주세요!</ErrorSpan>
          )}

          <InputLabel id='phone'>핸드폰번호</InputLabel>
          <RegisterInput
            id='phone'
            type='text'
            minLength='10'
            maxLength='11'
            placeholder='01012345678'
            {...register('phone', {
              required: true,
              minLength: {
                value: 10,
                message: '올바른 핸드폰 번호를 입력해주세요!',
              },
              maxLength: {
                value: 11,
                message: '올바른 핸드폰 번호를 입력해주세요!',
              },
              pattern: /^[0-9]{10,11}$/,
              onChange: (e) => setPhone(e.target.value),
              onBlur: checkPhoneOnBlur,
              validate: () => phoneValid,
            })}
          />
          {errors.phone && errors.phone.type === 'required' && (
            <ErrorSpan>핸드폰번호 입력해주세요!</ErrorSpan>
          )}
          {errors.phone &&
            errors.phone.type ===
              'pattern'(
                <ErrorSpan>올바른 핸드폰 번호를 입력해주세요!</ErrorSpan>,
              )}

          {!phoneValid && <ErrorSpan>사용중인 번호입니다.</ErrorSpan>}

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
  height: 100%;
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
  padding: 40px 0;
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
