import axios from 'axios';
import instance from './instance';

// 유저 회원가입
export const userRegister = async (userid, password, name, phone) => {
  const res = await axios.post('/api/sign-up', {
    name,
    password,
    phone,
    userid,
  });

  return res;
};

// 아이디 중복 확인
export const validateUserId = async (id) => {
  return await axios.get(`/api/userId/${id}`);
};

// 전화번호 중복 확인
export const validatePhone = async (phone) => {
  return await axios.get(`/api/phone/${phone}`);
};

// --------------- 로그인 -----------------
// accessToken: ~~~
// accessTokenExpireDate: 3600000
// grantType: "Bearer"
// refreshToken: ~~~

export const userLogin = async (userId, password) => {
  const res = await axios
    .post('/api/login', {
      userId,
      password,
    })
    .catch((error) => error.response);

  return res;
};

// 유저 정보 가져오기
export const userInfo = async () => {
  try {
    const { data } = await instance.get('/user');

    return data;
  } catch (error) {
    console.log(error);
  }
};
