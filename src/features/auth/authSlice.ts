import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
  isRegister: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  isRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      state.isLoggedIn = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    register(state, action: PayloadAction<LoginPayload>) {
      state.isRegister = true;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.isRegister = true;
      state.currentUser = action.payload;
    },
    registerFailed(state, action: PayloadAction<string>) {
      state.isRegister = false;
    },
  },
});

// Actions
export const authActions = authSlice.actions;
// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
export const selectCurrentUser = (state: any) => state.auth.currentUser;
export const selectIsRegister = (state: any) => state.auth.isRegister;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
