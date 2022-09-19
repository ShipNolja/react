import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import Index from './pages/Index'
import { Login } from './pages/Login'
import styled from 'styled-components'
import Search from './components/Search'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <ContainerWrap>
          <Content>
            <Routes>
              <Route idnex path='/' element={<Index />} />
              <Route path='/' element={<Index />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Content>
        </ContainerWrap>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
const ContainerWrap = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: -99;
`

const Content = styled.section`
  width: 100%;
  height: 100vh;
`
