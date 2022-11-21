import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material/';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IndexSearchNav from '../components/realTimeReservation/IndexSearchNav';
import SimpleFishingInfo from '../components/realTimeReservation/SimpleFishingInfo';
import { fishingList } from '../apis/ship';

const TIME_ZONE = 3240 * 10000;

const Index = () => {
  const [shipList, setShipList] = useState([]);
  const [content, setContent] = useState('');
  const [startDate, setStartDate] = useState(
    new Date(+new Date() + TIME_ZONE).toISOString().split('T')[0],
  );
  const [inputs, setInputs] = useState({
    page: 0,
    sortBy: 'infoStartDate',
    sortMethod: 'desc',
    searchBy: '',
    target: '전체',
    infoStartDate: startDate,
  });

  const fetchShipList = async (content) => {
    const data = await fishingList(inputs, content);
    console.log(inputs);
    console.log('심플리스트', data);
    setShipList(data.data);
  };

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  // 출조리스트 가져와서 뿌리는 곳
  useEffect(() => {
    fetchShipList(content);
  }, [inputs, content]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
            실시간 예약
          </Typography>
        </Grid>
        <IndexSearchNav
          searchValue={inputs}
          onChangeInput={onChange}
          setContent={setContent}
        />
      </Grid>
      <hr />
      <Grid container spacing={2}>
        {shipList.length === 0 ? (
          <Grid item xs={12}>
            실시간 출조 정보가 없습니다!
          </Grid>
        ) : (
          shipList.map((data) => (
            <Grid item sm={6} xs={12}>
              <SimpleFishingInfo key={data.id} item={data} />
            </Grid>
          ))
        )}
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2}>
          <Pagination
            sx={{ display: 'flex', justifyContent: 'center' }}
            count={shipList.length === 0 ? 0 : shipList[0].totalPage}
            page={inputs.page}
            name='page'
            onChange={onChange}
          />
        </Stack>
      </Grid>
    </>
  );
};

export default Index;
