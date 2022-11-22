import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box, Grid, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ShipInfo from './ShipInfo';
import FishingInfo from './FishingInfo';
import BoardList from './BoardList';
import Review from './Review';

const ShipDetailIndex = () => {
  const [value, setValue] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const id = params.shipId;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ paddingBottom: '30px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='fullWidth'
        sx={{
          width: '100%',
          marginBottom: '30px',
        }}
      >
        <Tab label='선박정보' onClick={() => navigate(`info/${id}`)} />
        <Tab label='출조정보' onClick={() => navigate(`fishingInfo/${id}`)} />
        <Tab label='조황정보' onClick={() => navigate(`board/${id}`)} />
        <Tab label='후기' onClick={() => navigate(`review/${id}`)} />
      </Tabs>

      <Routes>
        <Route path='info/:shipId' element={<ShipInfo />} />
        <Route path='fishingInfo/:shipId' element={<FishingInfo />} />
        <Route path='board/:shipId' element={<BoardList />} />
        <Route path='review/:shipId' element={<Review />} />
      </Routes>
    </Box>
  );
};

export default ShipDetailIndex;
