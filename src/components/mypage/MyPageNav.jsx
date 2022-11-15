import React from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const MyPageNav = () => {
  const navigate = useNavigate();
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
          <Button variant='outlined' onClick={() => navigate('profile')}>
            내 정보
          </Button>
          <Button variant='outlined' onClick={() => navigate('reservation')}>
            예약정보
          </Button>
          <Button variant='outlined' onClick={() => navigate('shopRegister')}>
            사업자등록
          </Button>
        </Box>
      </Grid>
    </nav>
  );
};

export default MyPageNav;
