import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import { Login } from './pages/Login';
import { useEffect } from 'react';
import Register from './pages/Register';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container height='100vh' width='100%'>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
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
