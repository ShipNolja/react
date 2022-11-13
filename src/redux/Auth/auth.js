import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'authToken',
  initialState: {
    authenticated: false,
    accessToken: null,
    expireTime: null,
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload.token;
      state.expireTime = action.payload.expireTime;
    },
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    },
    INQUIRE_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload.token;
      state.expireTime = action.payload.expireTime;
    },
  },
});

// createSlice 를 이용하여 간단하게 redux 액션 생성자와 전체 슬라이스에 대한 reducer를 선언하여 사용할 수 있다.

// authenticated : 현재 로그인 여부를 간단히 확인하기 위해 선언.

// accessToken : Access Token 저장.

// expireTime : Access Token 의 만료 시간

// SET_TOKEN : Access Token 정보를 저장한다.

// DELETE_TOKEN : 값을 모두 초기화함으로써 Access Token에 대한 정보도 삭제한다.

export const { SET_TOKEN, DELETE_TOKEN, INQUIRE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;
