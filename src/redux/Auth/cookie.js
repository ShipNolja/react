import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set('refreshToken', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies.get('refreshToken');
};

export const removeCookieToken = () => {
  return cookies.remove('refreshToken', { sameSite: 'strict', path: '/' });
};

// setRefreshToken : Refresh Token을 Cookie에 저장하기 위한 함수
// getCookieToken : Cookie에 저장된 Refresh Token 값을 갖고 오기 위한 함수.
// removeCookieToken : Cookie 삭제를 위한 함수. 로그아웃 시 사용할 예정이다.
