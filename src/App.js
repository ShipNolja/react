import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import { Login } from './pages/Login';
import { useEffect, useState } from 'react';
import Register from './pages/Register';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { INQUIRE_TOKEN } from './redux/Auth/auth';

function App() {
  const dispatch = useDispatch();
  const isToken = localStorage.getItem('accessToken');
  const expireTime = localStorage.getItem('expireTime');

  const [isLoginAuth, setIsLoginAuth] = useState(false);
  const isAuth = useSelector((state) => state.authToken.authenticated);

  useEffect(() => {
    setIsLoginAuth(isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (isToken) {
      setIsLoginAuth(true);
      dispatch(INQUIRE_TOKEN({ isToken, expireTime }));
    }
  }, []);

  return (
    <Grid container height='100vh' width='100%'>
      <BrowserRouter>
        <GlobalStyle />
        <Header isAuth={isLoginAuth} />
        <Routes>
          <Route idnex path='/' element={<Index />} />
          <Route path='/index' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Grid>
  );
}

export default App;
