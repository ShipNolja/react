import React, { useEffect } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  Grid,
  Box,
  Select,
  MenuItem,
  Container,
  InputLabel,
} from '@mui/material/';
import { getShipInfo } from '../../../apis/ship/shipInfo';

const ShipInfo = () => {
  const {
    area,
    bankName,
    bankNum,
    detailArea,
    image,
    name,
    port,
    registerNumber,
    shipId,
    streetAddress,
  } = JSON.parse(localStorage.getItem('ship'));

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: 'secondary.main',
            width: 100,
            height: 100,
            fontSize: 14,
            fontWeight: 'bold',
          }}
          className='img__box'
          style={{
            backgroundImage: `http://localhost:8081/url(${image})`,
            backgroundSize: 'cover',
          }}
        ></Avatar>
        <Box noValidate sx={{ mt: 3 }}>
          <FormControl component='fieldset' variant='standard'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type='text'
                  label='선박등록번호(13자리)'
                  value={registerNumber}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type='text'
                  label='선박 이름'
                  value={name}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label='은행명'
                  value={bankName}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label='계좌번호 (-제외)'
                  value={bankNum}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type='text'
                  label='지역'
                  value={area}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type='text'
                  label='세부지역'
                  value={detailArea}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type='text'
                  label='항구명'
                  value={port}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type='text'
                  name='streetAddress'
                  label='도로명주소'
                  value={streetAddress}
                />
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};

export default ShipInfo;
