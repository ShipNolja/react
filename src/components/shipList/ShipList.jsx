import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material/';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ShipListSearchNav from '../shipList/ShipListSearchNav';
import Ship from '../realTimeReservation/Ship';
import { fishingList } from '../../apis/ship';

const ShipList = () => {
  const [shipList, setShipList] = useState([]);
  const [content, setContent] = useState('');
  const [inputs, setInputs] = useState({
    page: 0,
    sortBy: 'name',
    sortMethod: 'desc',
    searchBy: 'shipName',
  });

  const fetchShipList = async (content) => {
    // const data = await fishingList(inputs, content);
    // setShipList(data.data);
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
            선박검색
          </Typography>
        </Grid>
        <ShipListSearchNav
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
              <Ship key={data.id} item={data} />
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

export default ShipList;
