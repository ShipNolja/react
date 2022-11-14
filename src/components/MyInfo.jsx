import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

const MyPage = ({ refreshUserInfoHandler }) => {
  const { userid, name, phone, role } = useSelector((state) => state.user);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            p={2}
          >
            <h1>마이페이지</h1>
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
