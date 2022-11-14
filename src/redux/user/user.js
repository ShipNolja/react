import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userid: '',
    name: '',
    phone: '',
    role: '',
  },
  reducers: {
    SET_USER: (state, action) => {
      state.userid = action.payload.userid;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
    },
    DELETE_USER: (state) => {
      state.userid = '';
      state.name = '';
      state.phone = '';
      state.role = '';
    },
  },
});

export const { SET_USER, DELETE_USER } = userSlice.actions;

export default userSlice.reducer;
