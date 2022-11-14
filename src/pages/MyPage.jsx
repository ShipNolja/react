import React from 'react';
import MyInfo from '../components/MyInfo';

const MyPage = (props) => {
  return <MyInfo refreshUserInfoHandler={props.refreshUserInfoHandler} />;
};

export default MyPage;
