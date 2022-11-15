import { getUserInfo } from '../apis/user/users';

export const setUserInfo = async () => {
  const res = await getUserInfo()();

  return res.data;
};
