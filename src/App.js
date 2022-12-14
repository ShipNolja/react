import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyPage from './pages/MyPage';

import { Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { INQUIRE_TOKEN } from './redux/Auth/auth';
import { userInfo } from './apis/users';
import { setLocalStoarge } from './utils/setLocalStoarge';
import { shipInfo } from './apis/ship';
import ShipListIndex from './pages/ShipListIndex';
import AddReservation from './components/reservation/AddReservation';
import DetailFishinglist from './components/realTimeReservation/DetailFishingList';

function App() {
  const dispatch = useDispatch();
  const isToken = localStorage.getItem('accessToken');
  const expireTime = localStorage.getItem('expireTime');

  const [isLoginAuth, setIsLoginAuth] = useState(false);
  const isAuth = useSelector((state) => state.token.authenticated);

  const fetchUserData = async () => {
    const data = await userInfo();
    setLocalStoarge('user', data);
    const shipdata = await shipInfo();
    setLocalStoarge('ship', shipdata);
  };

  useEffect(() => {
    setIsLoginAuth(isAuth);

    if (isToken) {
      setIsLoginAuth(true);
      dispatch(INQUIRE_TOKEN({ isToken, expireTime }));
    }
    fetchUserData();
  }, [isAuth]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header isAuth={isLoginAuth} />
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Container component='main' maxWidth='md'>
          <Routes>
            <Route idnex path='/' element={<Index />} />
            <Route path='/index' element={<Index />} />
            <Route path='/fishinglist' element={<Index />} />
            <Route
              path='/reservation/:shipId/:fishingInfo'
              element={<AddReservation />}
            />
            <Route
              path='/detailFishinglist/:shipId'
              element={<DetailFishinglist />}
            />
            <Route path='/shipList/*' element={<ShipListIndex />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/mypage/*' element={<MyPage />} />
            <Route path='*' element={<Index />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
