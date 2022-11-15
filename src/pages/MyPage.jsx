import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyInfo from '../components/mypage/MyInfo';
import MyPageNav from '../components/mypage/MyPageNav';
import ShipRegister from '../components/ShipRegister';
import Reservation from '../components/mypage/Reservation';

const MyPage = () => {
  return (
    <>
      <MyPageNav />
      <Routes>
        <Route path='profile' element={<MyInfo />}></Route>
        <Route path='reservation' element={<Reservation />}></Route>
        <Route path='shopRegister' element={<ShipRegister />}></Route>
      </Routes>
    </>
  );
};

export default MyPage;
