import React, { useState, useEffect } from 'react';
import ReservationNav from './ReservationNav';
import { Grid } from '@mui/material';
import ShipReservation from '../../reservation/ShipReservation';
import { shipReservationList } from '../../../apis/ship';

const ShipReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [content, setContent] = useState('');
  const [inputs, setInputs] = useState({
    page: 0,
    searchBy: '예약상태',
    sortMethod: 'desc',
  });

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const fetchReservationList = async () => {
    const data = await shipReservationList(inputs, content);
    console.log(data);
    setReservations(data.data);
  };

  //출조리스트 가져와서 뿌리는 곳
  useEffect(() => {
    fetchReservationList();
  }, [inputs, content]);

  return (
    <Grid container spacing={2}>
      <ReservationNav
        searchValue={inputs}
        onChangeInput={onChange}
        setContent={setContent}
      />
      {reservations.map((item) => (
        <Grid item sm={6} xs={12}>
          <ShipReservation key={item.reservationId} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ShipReservationList;
