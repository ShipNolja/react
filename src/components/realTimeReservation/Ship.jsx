import React from 'react';
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
import styled from 'styled-components';

const Ship = ({ item }) => {
  const {
    id,
    area,
    port,
    shipName,
    infoStartDate,
    startTime,
    endTime,
    target,
    infoCapacity,
  } = item;

  const infoStartTime = startTime.slice(-8, 5); // 23:00:00
  const infoendTime = endTime.slice(-8, 5);

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
        sx={{ width: '40%', height: '100%', marginRight: '15px' }}
      >
        <img src='이미지' width='100%' height='100%' />
      </Box>
      <Box
        component='div'
        sx={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ShipName>{shipName}</ShipName>
          <ShipArea>{`( ${area}, ${port} )`}</ShipArea>
        </div>
        <div>
          <SubTitle>출항일시</SubTitle>
          <SubContent>
            ( {infoStartDate} {infoStartTime} ~ {infoendTime} )
          </SubContent>
        </div>
        <div>
          <SubTitle>대상어종</SubTitle>
          <SubContent>{target}</SubContent>
        </div>
        <div>
          <SubTitle>수용인원</SubTitle>
          <SubContent>{infoCapacity}</SubContent>
        </div>
        <div style={{ width: '100%', textAlign: 'right' }}>
          <Button variant='contained' style={{ padding: '8px' }}>
            예약하기
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Ship;

const ShipName = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 5px;
`;

const ShipArea = styled.span`
  color: #7f7f7f;
  font-size: 13px;
  font-weight: 400;
`;

const SubTitle = styled.span`
  color: #7f7f7f;
  font-size: 13px;
  font-weight: 00;
  margin-right: 5px;
`;

const SubContent = styled.span`
  font-size: 13px;
  font-weight: 400;
`;
