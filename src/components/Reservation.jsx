import React from 'react';
import { useParams } from 'react-router-dom';

const Reservation = () => {
  const params = useParams();

  // 배아이디
  console.log(params.shipId);

  return <div>예약창</div>;
};

export default Reservation;
