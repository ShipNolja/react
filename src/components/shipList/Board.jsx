import React from 'react';
import { Button, Box } from '@mui/material/';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const Ship = ({ item }) => {
  const navigate = useNavigate();
  const { date, file, fish, id, title, content } = item;

  return (
    <Box
      sx={{
        border: 'solid 2px #929191;',
        display: 'flex',
        height: 150,
        padding: '15px',
      }}
    >
      <Box
        component='div'
        sx={{ width: '40%', height: '100%', marginRight: '15px' }}
      >
        <img src={file} width='100%' height='100%' />
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
          <BoardTitle>{title}</BoardTitle>
        </div>
        <div>
          <BoardContent>{content?.slice(0, 50)}</BoardContent>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span>어종 : </span>
            <FishContent>{fish}</FishContent>
          </div>
          <div>
            <span>출조날짜 : </span>
            <SubContent>{date}</SubContent>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Ship;

const BoardTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 5px;
`;

const BoardContent = styled.div`
  font-size: 14px;
`;

const FishContent = styled.span`
  color: #33a3dc;
  font-size: 14px;
  font-weight: 400;
`;

const SubContent = styled.span`
  font-size: 13px;
  font-weight: 400;
`;
