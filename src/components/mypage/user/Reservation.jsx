import React from 'react';
import { Box, Button } from '@mui/material';

const Reservation = ({ item }) => {
  const {
    reservationDate,
    reservationName,
    reservationPhone,
    reservationStatus,
    userMessage,
  } = item;
  return (
    <Box
      sx={{
        border: 'solid 1px #7f7f7f;',
        display: 'flex',
        height: 150,
        padding: '15px',
      }}
    >
      <Box
        component='div'
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span>예약날짜: </span>
          <span>{reservationDate}</span>
        </div>
        <div>
          <span>예약자명: </span>
          <span>{reservationName}</span>
        </div>
        <div>
          <span>전화번호: </span>
          <span>{reservationPhone}</span>
        </div>
        <div>
          <span>요청사항: </span>
          <span>{userMessage}</span>
        </div>
        <div style={{ width: '100%', textAlign: 'right' }}>
          {reservationStatus === '예약완료' ? (
            <Button variant='contained' style={{ padding: '8px' }}>
              {reservationStatus}
            </Button>
          ) : (
            <Button variant='contained' style={{ padding: '8px' }}>
              {reservationStatus}
            </Button>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Reservation;
