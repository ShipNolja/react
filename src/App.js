import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { setUserInfo } from './utils/getUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { INQUIRE_TOKEN } from './redux/Auth/auth';
import { SET_USER } from './redux/user/user';
import RegisterPage from './pages/RegisterPage';
import MyPage from './pages/MyPage';

function App() {
  const dispatch = useDispatch();
  const isToken = localStorage.getItem('accessToken');
  const expireTime = localStorage.getItem('expireTime');

  const [isLoginAuth, setIsLoginAuth] = useState(false);
  const isAuth = useSelector((state) => state.token.authenticated);

  // ! 유저 정보 redux에 다시 담아주기(전역에서 사용 위해)
  const refreshUserInfoHandler = async () => {
    const data = await setUserInfo();
    const { userid, name, phone, role } = data;
    dispatch(SET_USER({ userid, name, phone, role }));

    return data;
  };

  useEffect(() => {
    setIsLoginAuth(isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (isToken) {
      setIsLoginAuth(true);
      dispatch(INQUIRE_TOKEN({ isToken, expireTime }));
      refreshUserInfoHandler();
    }
  }, []);

  return (
    <Container maxWidth='lg'>
      <BrowserRouter>
        <GlobalStyle />
        <Header isAuth={isLoginAuth} />
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Routes>
            <Route idnex path='/' element={<Index />} />
            <Route path='/index' element={<Index />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route
              path='/mypage'
              element={
                <MyPage refreshUserInfoHandler={refreshUserInfoHandler} />
              }
            />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
