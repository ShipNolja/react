import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MyPageNav from './MyPageNav';

const MyPage = () => {
  const { userid, name, phone, role } = JSON.parse(
    localStorage.getItem('user'),
  );

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontSize: '20px' }}>내 정보</h1>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              style={{ width: '50%' }}
              id='outlined-read-only-input'
              label='이메일'
              defaultValue={userid}
              InputProps={{
                readOnly: true,
              }}
              margin='dense'
            />
            <TextField
              style={{ width: '50%' }}
              id='outlined-read-only-input'
              label='이름'
              defaultValue={name}
              InputProps={{
                readOnly: true,
              }}
              margin='dense'
            />
            <TextField
              style={{ width: '50%' }}
              id='outlined-read-only-input'
              label='전화번호'
              defaultValue={phone}
              InputProps={{
                readOnly: true,
              }}
              margin='dense'
            />
            <TextField
              style={{ width: '50%' }}
              id='outlined-read-only-input'
              label='권한'
              defaultValue={role}
              InputProps={{
                readOnly: true,
              }}
              margin='dense'
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MyPage;
