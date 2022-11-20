import {
  Grid,
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { reservation } from '../apis/users';

const Reservation = () => {
  const params = useParams();
  const [capacity, setCapactiy] = useState(1);
  const navigate = useNavigate();
  // 배아이디 : shipId
  // 출저정보 아이디 : fishingInfo
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const capactiyOnChange = (event) => {
    if (event.target.value <= 0) {
      alert('올바른 인원 수를 입력해주세요!');
      return;
    }
    setCapactiy(event.target.value);
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

  return (
    <Grid>
      <Grid item xs={12}>
        <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
          예약정보
        </Typography>
      </Grid>
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
