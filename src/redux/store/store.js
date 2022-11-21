import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tokenReducer from '../Auth/auth';
import userReducer from '../user/user';

// createSlice로 만든 slice 객체가 가진 reducer
const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
