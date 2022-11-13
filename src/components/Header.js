import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import Grid from '@mui/material/Grid';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Grid xs={12} item={true}>
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
    </Grid>
  );
};

export default Header;

const HeaderWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UlWrap = styled.ul`
  display: flex;
`;
