import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const MyPageNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <Grid item sm={12}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          sx={{
            margin: '30px 0px',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs'
          >
            <Tab label='내정보' onClick={() => navigate('profile')} />
            <Tab label='예약정보' onClick={() => navigate('reservation')} />
            <Tab label='사업자등록' onClick={() => navigate('shopRegister')} />
          </Tabs>
        </Box>
      </Grid>
    </nav>
  );
};

export default MyPageNav;
