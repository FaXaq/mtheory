import axios, { AxiosResponse } from 'axios';
import path from 'path';

const API_URL = process.env.VUE_APP_API_URL || '';

export const $http = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export async function ping() {
  try {
    return $http
      .get(API_URL);
  } catch (err) {
    throw new Error(err);
  }
}

export interface ILoginParams {
  username: string,
  password: string
}

export async function login(params: ILoginParams) {
  try {
    return await $http.post('login', {
      ...params
    });
  } catch (err) {
    throw err;
  }
}

export interface ISignupParams {
  username: string,
  password: string,
  passwordConfirmation: string,
  email: string,
  emailConfirmation: string
}

export async function signup(params: ISignupParams): Promise<AxiosResponse> {
  try {
    return await $http.post('users', {
      ...params
    });
  } catch (err) {
    throw err;
  }
}

export async function logout(accessToken: string, refreshToken: string) {
  try {
    if (accessToken) {
      await $http.post('logout', {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
    } 
    
    if (refreshToken) {
      await $http.post('logout/refresh', {}, {
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      })
    }
  } catch (err) {
    throw err;
  }
}

export async function refresh(refreshToken: string): Promise<AxiosResponse> {
  try {
    return await $http.post('refresh', {}, {
      headers: {
        'Authorization': `Bearer ${refreshToken}`
      }
    })
  } catch (err) {
    throw err;
  }
}

export default {
  ping,
  login,
  signup,
  logout,
  refresh
} 