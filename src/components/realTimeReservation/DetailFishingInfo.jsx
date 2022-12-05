import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  Grid,
  Box,
} from '@mui/material/';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const DetailShip = ({ item }) => {
  const {
    fishingInfoId,
    shipInfoId,
    area,
    port,
    shipName,
    image,
    infoStartDate,
    infoMessage,
    infoNotice,
    infoStartTime,
    infoEndTime,
    target,
    infoCapacity,
  } = item;

  return (
    <Box
      sx={{
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.3)',
        display: 'flex',
        height: 200,
        padding: '15px',
      }}
    >
      <Box
        component='div'
        sx={{
          width: '30%',
          height: '100%',
          marginRight: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ textAlign: 'center' }}>
            <ShipName>{shipName}</ShipName>
            <ShipArea>{`( ${area}, ${port} )`}</ShipArea>
          </div>
          <div>
            <img src={image} width='100%' />
          </div>
        </div>
      </Box>
      <Box
        component='div'
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Notice>공지사항(필독) :</Notice>
          <NoticeContent>{infoNotice}</NoticeContent>
        </div>
        <div>
          <Title>준비물 :</Title>
          <SubContent>{infoMessage}</SubContent>
        </div>
        <div>
          <SubTitle>출항일시 :</SubTitle>
          <SubContent>
            {infoStartDate} {infoStartTime?.slice(-8, 5)} ~{' '}
            {infoEndTime?.slice(-8, 5)}
          </SubContent>
        </div>
        <div>
          <SubTitle>대상어종 : </SubTitle>
          <Target>{target}</Target>
        </div>
        <div>
          <SubTitle>수용인원 :</SubTitle>
          <SubContent>{infoCapacity}</SubContent>
        </div>
        <div style={{ width: '100%', textAlign: 'right' }}>
          <Button
            variant='contained'
            style={{ padding: '8px', marginRight: '10px' }}
            onClick={() =>
              window.open(
                `/reservation/${shipInfoId}/${fishingInfoId}`,
                '예약창',
                'width=700px,height=700px,scrollbars=yes',
              )
            }
          >
            예약하기
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default DetailShip;

const Title = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const Notice = styled.span`
  font-size: 20px;
  margin-right: 10px;
  color: #5550e4;
`;

const NoticeContent = styled.span`
  font-size: 16px;
  color: #5550e4;
`;

const Target = styled.span`
  color: #43aefa;
`;

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
  font-size: 16px;
  font-weight: 00;
  margin-right: 5px;
`;

const SubContent = styled.span`
  font-size: 13px;
  font-weight: 400;
  white-space: pre-wrap;
`;
