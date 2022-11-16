import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  Grid,
  Box,
  Select,
  MenuItem,
  Container,
  InputLabel,
} from '@mui/material/';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { KakaoMapScript } from '../../utils/kakaoMap';
import MapContainer from '../kakaoMap/MapContainer';

/*
  registerNumber : 선박등록번호
  image: 배 대표 이미지
  name: 배 이름
  bankName: 은행명
  bankNum: 계좌번호
  area: 지역 (강원도)
  detailArea: 세부지역 (고성군)
  port: 항구 ( 거진항 )
  streetAddress: 도로명 주소 (다른 주소))

*/
const ShipRegister = () => {
  const [file, setFiles] = useState('');
  const [kakaoIsOpen, setKakaoIsOpen] = useState(false);
  const [bankName, setBankName] = useState('하나');
  const [address, setAddress] = useState({
    area: '',
    detailArea: '',
    streetAddress: '',
  });

  const { area, detailArea, streetAddress } = address; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setAddress({
      ...address, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const bankNameOnChange = (event) => {
    setBankName(event.target.value);
  };

  const kakaoMapOpenHandler = () => {
    setKakaoIsOpen((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  useEffect(() => {
    preview();

    return () => preview();
  }, [file]);

  //이미지 미리보기 구현
  const preview = () => {
    if (!file) return false;

    const $img = document.querySelector('.img__box');
    const $text = document.querySelector('.img__text');
    const reader = new FileReader();

    reader.onload = () =>
      ($img.style.backgroundImage = `url(${reader.result})`);

    $text.style.display = 'none';

    reader.readAsDataURL(file[0]);
  };

  const onSubmit = (data) => {
    const {
      shipNum: registerNumber,
      shipName: name,
      bankName,
      bankNum,
      area,
      detailArea,
      port,
      streetAddress,
    } = data;

    const formValue = {
      registerNumber,
      name,
      bankName,
      bankNum,
      area,
      detailArea,
      port,
      streetAddress,
    };

    console.log(formValue);
    const blob = new Blob([JSON.stringify(formValue)], {
      type: 'application/json',
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
        <Avatar
          sx={{
            m: 1,
            bgcolor: 'secondary.main',
            width: 100,
            height: 100,
            fontSize: 14,
            fontWeight: 'bold',
          }}
          className='img__box'
          style={{ backgroundSize: 'cover' }}
        >
          <div className='img__text'>이미지등록(필수)</div>
        </Avatar>
        <Button variant='outlined' component='label'>
          이미지 업로드
          <input hidden accept='image/*' type='file' onChange={onLoadFile} />
        </Button>
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
                  type='text'
                  minLength='13'
                  maxLength='13'
                  label='선박등록번호(13자리)'
                  {...register('shipNum', {
                    required: true,
                    pattern: /[0-9]{13}/gi,
                  })}
                />
                {errors.shipNum && errors.shipNum.type === 'required' && (
                  <ErrorSpan>선박번호를 입력해주세요!(숫자만)</ErrorSpan>
                )}
                {errors.shipNum && errors.shipNum.type === 'pattern' && (
                  <ErrorSpan>올바른 선박번호를 입력해주세요!(숫자만)</ErrorSpan>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='선박 이름'
                  {...register('shipName', {
                    required: true,
                    pattern: /[a-zA-z가-힣0-9]{2,20}/gi,
                  })}
                />
                {errors.shipNum && errors.shipNum.type === 'required' && (
                  <ErrorSpan>선박이름을 입력해주세요!(특수문자 제외)</ErrorSpan>
                )}
                {errors.shipName && errors.shipName.type === 'pattern' && (
                  <ErrorSpan>
                    올바른 선박이름을 입력해주세요!(특수문제제외)
                  </ErrorSpan>
                )}
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>은행명</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    value={bankName}
                    label='은행명'
                    style={{ width: '100%', height: '100%' }}
                    onChange={bankNameOnChange}
                  >
                    <MenuItem value='하나'>하나은행</MenuItem>
                    <MenuItem value='신한'>신한은행</MenuItem>
                    <MenuItem value='농협'>농협은행</MenuItem>
                    <MenuItem value='국민'>국민은행</MenuItem>
                    <MenuItem value='기업'>기업은행</MenuItem>
                    <MenuItem value='카카오'>카카오뱅크</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  label='계좌번호 (-제외)'
                  {...register('bankNum', {
                    required: true,
                    pattern: /[0-9]/gi,
                  })}
                />
                {errors.bankNum && errors.bankNum.type === 'required' && (
                  <ErrorSpan>계좌번호를 입력해주세요!(-제외)</ErrorSpan>
                )}
                {errors.bankNum && errors.bankNum.type === 'pattern' && (
                  <ErrorSpan>올바른 계좌번호를 입력해주세요!(-제외)</ErrorSpan>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant='contained'
                  onClick={kakaoMapOpenHandler}
                >
                  위치찾기
                </Button>
                {kakaoIsOpen && (
                  <MapContainer
                    setKakaoIsOpen={setKakaoIsOpen}
                    setAddress={setAddress}
                  />
                )}
                {errors.area && errors.area.type === 'required' && (
                  <ErrorSpan>위치 찾기로 지역 정보를 등록해주세요!</ErrorSpan>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='지역(위치찾기 이용)'
                  value={area}
                  InputProps={{
                    readOnly: true,
                  }}
                  {...register('area', {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='세부지역(위치찾기 이용)'
                  value={detailArea}
                  InputProps={{
                    readOnly: true,
                  }}
                  {...register('detailArea', {
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='항구명'
                  {...register('port', {
                    required: true,
                  })}
                />
                {errors.port && errors.port.type === 'required' && (
                  <ErrorSpan>항구명을 입력해주세요!</ErrorSpan>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  name='streetAddress'
                  value={streetAddress}
                  label='도로명주소'
                  {...register('streetAddress', {
                    required: true,
                    onChange: onChange,
                  })}
                />
                {errors.streetAddress &&
                  errors.streetAddress.type === 'required' && (
                    <ErrorSpan>도로명주소를 입력해주세요!</ErrorSpan>
                  )}
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

const ErrorSpan = styled.span`
  color: red;
  margin-bottom: 20px;
`;
