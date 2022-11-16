import axios from 'axios';
import { getCookieToken, setRefreshToken } from '../redux/Auth/cookie';

const instance = axios.create({
  baseURL: '/api/',
  headers: {
    // 추
    'Access-Control-Allow-Origin': `http://localhost:3000`,
    'Access-Control-Allow-Credentials': 'true',
  },
});

// 요청을 보내기 전에 수행해야하는 곳
// 예 : 토큰이 만료되었나?
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage.getItem('accessToken'); // access 토큰을 가져오는 함수
    if (accessToken) {
      config.headers['X-AUTH-TOKEN'] = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// 응답이 왔을 때 수행해야하는 곳
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error);
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    // 인증 에러 발생시
    if (status === 401) {
      const refreshToken = getCookieToken('refreshToken');
      axios({
        method: 'POST',
        url: `/reissue`,
        data: { refreshToken },
      }).then((response) => {
        const { accessToken, accessTokenExpireDate, grantType, refreshToken } =
          response.data;

        setRefreshToken(refreshToken);
        originalRequest.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;

        return axios(originalRequest);
      });
    }

    return Promise.reject(error);
  },
);

export default instance;
