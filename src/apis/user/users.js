import axios from 'axios';
import instance from '../axios';

export const getUserInfo = async () => {
  const res = await instance.get('/user');

  const { userid, name, phone, role } = res.data;
  localStorage.removeItem('user');
  localStorage.setItem('user', JSON.stringify({ userid, name, phone, role }));

  return res;
};
