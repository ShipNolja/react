import axios from 'axios';

// {
// 	  `data`는 서버가 제공한 응답(데이터) 입니다.
//     data: {},

//     status`는 서버 응답의 HTTP 상태 코드입니다.
//     status: 200,

//     statusText`는 서버 응답으로 부터의 HTTP 상태 메시지입니다.
//     statusText: 'OK',

//    `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공됩니다.
//     headers {},

//     `config`는 요청에 대해 `axios`에 설정된 구성(config) 입니다.
//     config: {},

export const userRegister = (userid, password, name, phone) => {
  return async () => {
    const res = await axios.post('/api/sign-up', {
      name,
      password,
      phone,
      userid,
    });

    return res;
  };
};

export const validateUserId = async (id) => {
  return await axios.get(`/api/userId/${id}`);
};

export const validatePhone = async (phone) => {
  return await axios.get(`/api/phone/${phone}`);
};
