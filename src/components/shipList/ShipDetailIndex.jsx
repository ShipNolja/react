import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box, Grid, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ShipInfo from './ShipInfo';
import FishingInfo from './FishingInfo';
import Board from './Board';
import Review from './Review';

const ShipDetailIndex = () => {
  const [value, setValue] = useState(0);
  const params = useParams();

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(params);
  return (
    <Box sx={{}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='fullWidth'
        sx={{
          width: '100%',
        }}
      >
        <Tab label='선박정보' onClick={() => navigate('info')} />
        <Tab label='출조정보' onClick={() => navigate('fishingInfo')} />
        <Tab label='조황정보' onClick={() => navigate('board')} />
        <Tab label='후기' onClick={() => navigate('review')} />
      </Tabs>

      <Routes>
        <Route path='info' element={<ShipInfo />} />
        <Route path='fishingInfo' element={<FishingInfo />} />
        <Route path='board' element={<Board />} />
        <Route path='review' element={<Review />} />
      </Routes>
    </Box>
  );
};

export default ShipDetailIndex;
