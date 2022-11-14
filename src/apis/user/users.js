import axios from 'axios';
import instance from '../axios';

export const getUserInfo = () => {
  return async () => {
    const res = await instance.get('/user');

    return res;
  };
};
