import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material/';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ShipListSearchNav from '../shipList/ShipListSearchNav';
import Ship from '../shipList/Ship';
import { shipList } from '../../apis/ship';
import ShipListContainer from '../../components/kakaoMap/ShipListContainer';
import { Routes, Route } from 'react-router-dom';
import ShipDetailIndex from './ShipDetailIndex';

const ShipList = () => {
  const [positions, setPositions] = useState([]);
  const [content, setContent] = useState('');
  const [inputs, setInputs] = useState({
    page: 0,
    sortBy: 'name',
    sortMethod: 'desc',
    searchRequirements: 'shipName',
  });

  const fetchShipList = async (content) => {
    const data = await shipList(inputs, content);
    console.log(inputs);
    setPositions(data.data);
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
      <Grid item xs={12}>
        <ShipListContainer positions={positions} />
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2}>
          <Pagination
            sx={{ display: 'flex', justifyContent: 'center' }}
            count={positions.length === 0 ? 0 : positions[0].totalPage}
            page={inputs.page}
            name='page'
            onChange={onChange}
          />
        </Stack>
      </Grid>
      <Grid container spacing={2}>
        {positions.length === 0 ? (
          <Grid item xs={12}>
            선박정보가 없습니다!
          </Grid>
        ) : (
          positions.map((data) => (
            <Grid item sm={6} xs={12}>
              <Ship key={data.id} item={data} />
            </Grid>
          ))
        )}
      </Grid>
      <Routes>
        <Route path='/:shipId/*' element={<ShipDetailIndex />} />
      </Routes>
    </>
  );
};

export default ShipList;
