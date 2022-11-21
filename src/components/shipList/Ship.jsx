import React from 'react';
import { Button, Box } from '@mui/material/';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const Ship = ({ item }) => {
  const navigate = useNavigate();
  const {
    id,
    area,
    detailArea,
    port,
    name,
    streetAddress,
    shipRatingAvg,
    wishCount,
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
          <ShipName>{name}</ShipName>
          <ShipArea>{`( ${area}, ${port} )`}</ShipArea>
        </div>
        <div>
          <SubTitle>세부지역</SubTitle>
          <SubContent>{detailArea}</SubContent>
        </div>
        <div>
          <SubTitle>주소</SubTitle>
          <SubContent>{streetAddress}</SubContent>
        </div>
        <div>
          <SubTitle>평점</SubTitle>
          <SubContent>{shipRatingAvg}점</SubContent>
        </div>
        <div>
          <SubTitle>찜</SubTitle>
          <SubContent>{wishCount}</SubContent>
        </div>
        <div style={{ width: '100%', textAlign: 'right' }}>
          <Button
            variant='contained'
            style={{ padding: '8px' }}
            onClick={() => navigate(`${id}`)}
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
