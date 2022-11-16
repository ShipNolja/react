import React, { useEffect, useState } from 'react';
import {
  Avatar,
  CssBaseline,
  TextField,
  FormControl,
  Grid,
  Box,
  Container,
} from '@mui/material/';
import { shipInfo } from '../../../apis/ship';

const ShipInfo = () => {
  const [shipData, setShipData] = useState({});
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
  } = shipData;

  useEffect(() => {
    const getInfo = async () => {
      const data = await shipInfo();
      setShipData(data);
    };
    getInfo();
  }, []);

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
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type='text'
                  label='항구명'
                  value={port}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
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
