import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Footer from './components/Footer';
import Header from './components/Header';
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyPage from './pages/MyPage';
import MyInfo from './components/mypage/MyInfo';
import ShipRegister from './components/ShipRegister';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { INQUIRE_TOKEN } from './redux/Auth/auth';
import { getUserInfo } from './apis/user/users';

function App() {
  const dispatch = useDispatch();
  const isToken = localStorage.getItem('accessToken');
  const expireTime = localStorage.getItem('expireTime');

  const [isLoginAuth, setIsLoginAuth] = useState(false);
  const isAuth = useSelector((state) => state.token.authenticated);

  // ! 유저 정보 localStroage 담아주기
  const refreshUserInfoHandler = async () => {
    const data = await getUserInfo()();
    const { userid, name, phone, role } = data.data;
    localStorage.setItem('user', JSON.stringify({ userid, name, phone, role }));
  };

  useEffect(() => {
    setIsLoginAuth(isAuth);
    refreshUserInfoHandler();
  }, [isAuth]);

  useEffect(() => {
    if (isToken) {
      setIsLoginAuth(true);
      dispatch(INQUIRE_TOKEN({ isToken, expireTime }));
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header isAuth={isLoginAuth} />
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Routes>
          <Route idnex path='/' element={<Index />} />
          <Route path='/index' element={<Index />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/mypage/*' element={<MyPage />} />
          <Route path='*' element={<Index />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
