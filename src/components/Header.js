import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../styles/Color'
import { CustomButton } from '../UI/StyleButton'

const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderWrap>
      <div>
        <div>로고자리</div>
      </div>
      <ButtonWrap>
        <CustomButton
          type='button'
          onClick={() => navigate('/login')}
          background={Colors.colorWhite}
          hoverbackground={Colors.colorDarkGrey}
          color={Colors.colorBlack}
        >
          로그인
        </CustomButton>
        <CustomButton
          type='button'
          onClick={() => navigate('/register')}
          background={Colors.primaryColor}
          hoverbackground={Colors.primaryDeepColor}
          color={Colors.colorWhite}
        >
          회원가입
        </CustomButton>
      </ButtonWrap>
    </HeaderWrap>
  )
}

export default Header

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 20px;
  max-width: 1140px;
  height: 50px;
  background-color: #fff;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const UlWrap = styled.ul`
  display: flex;
`
