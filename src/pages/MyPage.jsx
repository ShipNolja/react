import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyInfo from '../components/mypage/MyInfo';
import MyPageNav from '../components/mypage/MyPageNav';
import ShipRegister from '../components/mypage/user/ShipRegister';
import Reservation from '../components/mypage/user/Reservation';

const MyPage = () => {
  const { role } = JSON.parse(localStorage.getItem('user'));
  let isUser;
  if (role === 'ROLE_USER') {
    isUser = <MyPageNav isUser={true} />;
  } else {
    isUser = <MyPageNav isUser={false} />;
  }
  return (
    <>
      {isUser}
      <Routes>
        <Route path='profile' element={<MyInfo />}></Route>
        <Route path='reservation' element={<Reservation />}></Route>
        <Route path='shopRegister' element={<ShipRegister />}></Route>
      </Routes>
    </>
  );
};

export default MyPage;
