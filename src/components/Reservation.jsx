import {
  Grid,
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { resvervationInfo } from '../apis/ship';
import { reservation } from '../apis/users';

const Reservation = () => {
  const params = useParams();
  const [capacity, setCapactiy] = useState(1);
  const [infoData, setInfoData] = useState({});
  const navigate = useNavigate();
  // 배아이디 : shipId
  // 출저정보 아이디 : fishingInfo
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const {
    shipName,
    target,
    port,
    area,
    detailArea,
    infoStartPoint,
    infoCapacity,
    infoStartDate,
    infoStartTime,
    infoEndTime,
    infoNotice,
    infoMessage,
  } = infoData;

  const startTime = infoStartTime?.slice(-8, 5);
  const endTime = infoEndTime?.slice(-8, 5);

  const capactiyOnChange = (event) => {
    if (event.target.value <= 0) {
      alert('올바른 인원 수를 입력해주세요!');
      return;
    }
    setCapactiy(event.target.value);
  };

  const fetchInfoData = async () => {
    const data = await resvervationInfo(params.fishingInfo);
    console.log(data);
    setInfoData(data.data);
  };

  const onSubmit = async (data) => {
    const { reservationName, reservationPhone, userMessage } = data;
    const reservationData = {
      reservationName,
      reservationPhone,
      reservationNum: capacity,
      userMessage,
    };

    const res = await reservation(
      params.shipId,
      params.fishingInfo,
      reservationData,
    );

    if (res.data.id <= 0) {
      alert(res.data.message);
      return;
    }

    alert(res.data.message);
    window.close();
    console.log(res);
  };

  useEffect(() => {
    fetchInfoData();
  }, []);

  return (
    <Grid>
      <Grid item xs={12}>
        <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
          예약정보
        </Typography>
      </Grid>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 200,
        }}
      >
        <div>
          <MainTitle>선박명: </MainTitle>
          <span>{shipName}</span>
          <span> ( {port} )</span>
        </div>
        <div>
          <MainTitle>위치: </MainTitle>
          <MainContent>{`${area} ${detailArea} ${infoStartPoint}`}</MainContent>
        </div>
        <div>
          <MainTitle>출조정보: </MainTitle>
          <MainContent>{`${infoStartDate} ${startTime}~${endTime}`}</MainContent>
        </div>
        <div>
          <MainTitle>수용인원: </MainTitle>
          <MainContent>{infoCapacity}</MainContent>
        </div>
        <div>
          <SubTitle>대상어종: </SubTitle>
          <SubContent>{target}</SubContent>
        </div>
        <div>
          <NoticeTitle>공지사항</NoticeTitle>
          <TextAreaContent>{infoNotice}</TextAreaContent>
        </div>
        <div>
          <MessageTitle>전달사항</MessageTitle>
          <TextAreaContent>{infoMessage}</TextAreaContent>
        </div>
      </div>
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
                label='예약자 이름'
                inputProps={{
                  minLength: '1',
                  maxLength: '10',
                }}
                {...register('reservationName', {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='핸드폰번호'
                inputProps={{
                  minLength: '10',
                  maxLength: '11',
                }}
                {...register('reservationPhone', {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='신청인원'
                type='number'
                value={capacity}
                onChange={capactiyOnChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='전달사항'
                multiline
                rows={4}
                {...register('userMessage', {})}
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
            예약하기
          </Button>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Reservation;

const MainTitle = styled.span`
  font-size: large;
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-weight: bold;
`;

const MainContent = styled.span``;

const SubContent = styled.span`
  color: #297dfb;
`;

const NoticeTitle = styled.span`
  font-size: large;
  font-weight: bold;
  color: red;
`;

const MessageTitle = styled.span`
  font-size: large;
  font-weight: bold;
  color: blue;
`;

const TextAreaContent = styled.div`
  white-space: pre-wrap;
`;
