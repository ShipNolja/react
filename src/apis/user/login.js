import axios from 'axios';

// accessToken: ~~~
// accessTokenExpireDate: 3600000
// grantType: "Bearer"
// refreshToken: ~~~

export const userLogin = (userId, password) => {
  return async () => {
    const res = await axios
      .post('/api/login', {
        userId,
        password,
      })
      .catch((error) => error.response);

    return res;
  };
};
