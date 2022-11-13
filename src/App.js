import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import { Login } from './pages/Login';
import styled from 'styled-components';
import { useEffect } from 'react';
import Register from './pages/Register';
import Container from '@material-ui/core/Container';

function App() {
  const test = async () => {
    const res = await fetch('/welcome');
    console.log(res);
  };
  useEffect(() => {
    test();
  });

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route idnex path='/' element={<Index />} />
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
