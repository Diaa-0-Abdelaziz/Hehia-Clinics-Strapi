import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const jwt = Cookies.get('jwt');
const userDataString = Cookies.get('user');
const userData = userDataString ? JSON.parse(userDataString) : {}; 
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    jwt: jwt || '',
    userData: userData || {}
  },
  reducers: {
    setJWT(state, action) {
      state.jwt = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    }
  }
});

export const { setJWT, setUserData } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;