import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { push } from 'connected-react-router';
import { User } from 'models/user';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    const response: User = yield call(authApi.login, payload);
    localStorage.setItem('token', response.token);
    yield put(authActions.loginSuccess(response));
    // redirect to admin page
    yield put(push('/'));
  } catch (error: any) {
    console.log(error);
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleRegister(payload: LoginPayload) {
  try {
    const response: User = yield call(authApi.register, payload);
    localStorage.setItem('token', response.token);
    yield put(authActions.registerSuccess(response));
    // redirect to admin page
    yield put(push('/'));
  } catch (error: any) {
    console.log(error);
    yield put(authActions.registerFailed(error.message));
  }
}

function* handleLogout() {
  // yield delay(500);
  localStorage.removeItem('token');
  yield put(push('/'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggined = Boolean(localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    if (!isLoggined) {
      const action: PayloadAction<any> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    if (token) {
      yield put(push('/'));
    } else {
      const action: PayloadAction<any> = yield take(authActions.register.type);
      yield fork(handleRegister, action.payload);
    }
    
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
