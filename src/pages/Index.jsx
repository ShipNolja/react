import React, { useState } from 'react';
import Search from '../components/Search';
import { Typography, Grid } from '@mui/material/';
import IndexSearchNav from '../components/IndexSearchNav';
import Ship from '../components/Ship';

const SHIP_INFO = [
  {
    area: '강원도',
    detailArea: '강릉시',
    endTime: {
      hour: '17',
      minute: '00',
      nano: 0,
      second: 0,
    },
    id: 1,
    image: '이미지값~',
    infoCapacity: 5,
    infoReservationStatus: '예약상태',
    infoStartDate: '2022-11-18',
    port: '장호항',
    shipName: '써니호',
    startTime: {
      hour: 14,
      minute: 30,
      nano: 0,
      second: 0,
    },
    target: '광어/우럭',
    totalElement: 0,
    totalPage: 0,
  },
  {
    area: '충청도',
    detailArea: '떙떙시',
    endTime: {
      hour: '17',
      minute: '00',
      nano: 0,
      second: 0,
    },
    id: 1,
    image: '이미지값~',
    infoCapacity: 5,
    infoReservationStatus: '예약상태',
    infoStartDate: '2022-11-18',
    port: '장호항',
    shipName: '써니호',
    startTime: {
      hour: '14',
      minute: '30',
      nano: 0,
      second: 0,
    },
    target: '광어/우럭',
    totalElement: 0,
    totalPage: 0,
  },
  {
    area: '강원도',
    detailArea: '강릉시',
    endTime: {
      hour: '17',
      minute: '00',
      nano: 0,
      second: 0,
    },
    id: 1,
    image: '이미지값~',
    infoCapacity: 5,
    infoReservationStatus: '예약상태',
    infoStartDate: '2022-11-18',
    port: '장호항',
    shipName: '써니호',
    startTime: {
      hour: '14',
      minute: '30',
      nano: 0,
      second: 0,
    },
    target: '광어/우럭',
    totalElement: 0,
    totalPage: 0,
  },
];

const Index = () => {
  const [shipList, setShipList] = useState(SHIP_INFO);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
            실시간 예약
          </Typography>
        </Grid>
        <IndexSearchNav />
        <Search />
      </Grid>
      <hr />
      <Grid container spacing={2}>
        {shipList.map((data) => (
          <Grid item sm={6} xs={12}>
            <Ship key={data.id} item={data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Index;
