import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tokenReducer from '../Auth/auth';
import userReducer from '../user/user';

const rootReducer = combineReducers({
  token: tokenReducer, // createReducer로 만든 리듀서 객체
  user: userReducer, // createSlice로 만든 slice 객체가 가진 reducer
});

export const store = configureStore({
  reducer: rootReducer,
});
