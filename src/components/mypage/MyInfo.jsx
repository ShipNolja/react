import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MyPageNav from './MyPageNav';
import { userInfo } from '../../apis/users';

const MyPage = () => {
  const [userData, setUserData] = useState({});
  const { userid, name, phone, role } = userData;

  useEffect(() => {
    const getInfo = async () => {
      const data = await userInfo();
      setUserData(data);
    };
    getInfo();
  }, []);

  return (
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
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: userid,
            }}
            margin='dense'
          />
          <TextField
            style={{ width: '50%' }}
            id='outlined-read-only-input'
            label='이름'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: name,
            }}
            margin='dense'
          />
          <TextField
            style={{ width: '50%' }}
            id='outlined-read-only-input'
            label='전화번호'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: phone,
            }}
            margin='dense'
          />
          <TextField
            style={{ width: '50%' }}
            id='outlined-read-only-input'
            label='권한'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: role,
            }}
            margin='dense'
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyPage;
