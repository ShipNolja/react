import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../Auth/auth';

export const store = configureStore({
  reducer: {
    authToken: tokenReducer,
  },
});
