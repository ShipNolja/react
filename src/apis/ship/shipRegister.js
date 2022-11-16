import axios from 'axios';
import instance from '../axios';

export const shipRegister = async (data) => {
  const res = await instance.post('/user', data, {
    headers: {
      'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
    },
  });

  return res;
};
