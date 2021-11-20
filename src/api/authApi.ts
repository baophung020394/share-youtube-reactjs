import { LoginPayload } from 'features/auth/authSlice';
import { ListResponse } from 'models';
import { User } from 'models/user';
import axiosClient from './axiosClient';

const authApi = {
  register(data: LoginPayload): Promise<ListResponse<User>> {
    const url = '/register';
    console.log('data', data)
    const { username, password } = data;
    return axiosClient.post(url, {
      username,
      password,
    });
  },

  login(data: LoginPayload): Promise<User> {
    console.log('data', data)
    const url = '/login';
    const { username, password } = data;
    return axiosClient.post(url, {
      username,
      password,
    });
  },
};

export default authApi;
