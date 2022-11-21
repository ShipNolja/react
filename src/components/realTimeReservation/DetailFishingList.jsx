import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailFishingList } from '../../apis/ship';
import DetailFishingInfo from './DetailFishingInfo';

const DetailFishingList = () => {
  const [shipList, setShipList] = useState([]);
  const [page, setPage] = useState(0);
  const params = useParams();

  const fetchFishingList = async () => {
    const data = await detailFishingList(params.shipId, page);
    console.log(data.data);
    setShipList(data.data);
  };

  useEffect(() => {
    fetchFishingList();
  }, [page]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
          출조정보 상세목록
        </Typography>
      </Grid>
      {shipList.map((item) => (
        <Grid item xs={12}>
          <DetailFishingInfo key={item.id} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DetailFishingList;
