import React from 'react';
import '../css/Nav.css';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../styles/Color';
import { CustomButton } from '../UI/StyleButton';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { DELETE_TOKEN } from '../redux/Auth/auth';
import instance from '../apis/axios';

const Header = ({ isAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(DELETE_TOKEN());
    navigate('/');
  };

  return (
    <Grid xs={12} item={true} sx={{ height: '60px' }}>
      <HeaderWrap>
        <div>
          <div>로고자리</div>
        </div>
        {!isAuth && (
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
        )}
        {isAuth && (
          <>
            <ButtonWrap>
              <NavLink
                to='/fishing'
                className='nav'
                style={{ margin: '0px 10px' }}
              >
                실시간예약
              </NavLink>
              <NavLink to='/shiplist' className='nav'>
                선상검색
              </NavLink>
            </ButtonWrap>

            <ButtonWrap>
              <CustomButton
                type='button'
                onClick={() => navigate('/mypage')}
                background={Colors.colorWhite}
                hoverbackground={Colors.primaryColor}
                color={Colors.colorBlack}
              >
                마이페이지
              </CustomButton>
              <CustomButton
                type='button'
                onClick={logoutHandler}
                background={Colors.colorWhite}
                hoverbackground={Colors.colorDarkGrey}
                color={Colors.colorBlack}
              >
                로그아웃
              </CustomButton>
            </ButtonWrap>
          </>
        )}
      </HeaderWrap>
    </Grid>
  );
};

export default Header;

const HeaderWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
