import React from 'react';
import { Button, Box } from '@mui/material/';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const Ship = ({ item }) => {
  const navigate = useNavigate();
  const {
    fishingInfoId,
    shipInfoId,
    area,
    port,
    image,
    shipName,
    infoStartDate,
    infoStartTime,
    infoEndTime,
    target,
    infoCapacity,
  } = item;

  //
  const startTime = infoStartTime?.slice(-8, 5);
  const endTime = infoEndTime?.slice(-8, 5);

  return (
    <Box
      sx={{
        border: 'solid 2px #929191;',
        borderRadius: 5,
        display: 'flex',
        height: 150,
        padding: '15px',
      }}
    >
      <Box
        component='div'
        sx={{ width: '40%', height: '100%', marginRight: '15px' }}
      >
        <img src={image} width='100%' height='100%' />
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
            ( {infoStartDate} {startTime} ~ {endTime} )
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
            바로예약
          </Button>
          <Button
            variant='contained'
            style={{ padding: '8px' }}
            onClick={() => navigate(`/detailFishinglist/${shipInfoId}`)}
          >
            상세정보
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
