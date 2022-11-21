import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getShipInfo } from '../../apis/ship';

const ShipInfo = () => {
  const [shipData, setShipData] = useState({});
  const params = useParams();

  const {
    area,
    bankName,
    bankNum,
    detailArea,
    name,
    port,
    image,
    userName,
    streetAddress,
    userPhone,
    registerNumber,
    shipRatingAvg,
    wishCount,
  } = shipData;

  const shipId = params.shipId;

  const fetchShipInfo = async () => {
    const data = await getShipInfo(shipId);
    console.log(data);
    setShipData(data.data);
  };
  useEffect(() => {
    fetchShipInfo();
  }, []);
  return (
    <Box noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img src={image} width='100%' />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type='text'
            label='이름'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              readOnly: true,
              value: userName,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type='text'
            label='휴대폰번호'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              readOnly: true,
              value: userPhone,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type='text'
            label='평점'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              readOnly: true,
              value: shipRatingAvg,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type='text'
            label='찜수'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              readOnly: true,
              value: wishCount,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            type='text'
            label='등록번호'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              readOnly: true,
              value: registerNumber,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type='text'
            label='선박 이름'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              readOnly: true,
              value: name,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='은행명'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: bankName,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label='계좌번호'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: bankNum,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type='text'
            label='지역'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: area,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type='text'
            label='세부지역'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: detailArea,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='text'
            label='항구명'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: port,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='text'
            name='streetAddress'
            label='도로명주소'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
              value: streetAddress,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShipInfo;
