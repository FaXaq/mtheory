import { ILoginParams, AuthState, ISignupParams } from './types'
import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import API from '@/services/Api';

export const actions: ActionTree<AuthState, RootState> = {
    async login({ commit }, params: ILoginParams) {
    try {
            let res = await API.login(params);
            if (res.status == 200) {
                commit('updateAccessToken', res.data.accessToken)
                commit('updateRefreshToken', res.data.refreshToken)
            }
            return true;
        } catch (err) {
            throw err;
        }
    },
    async signup({ commit }, params: ISignupParams) {
        try {
            let res = await API.signup(params);
            commit('updateAccessToken', res.data.accessToken);
            commit('updateRefreshToken', res.data.refreshToken);
        } catch (err) {
            throw err;
        }
    },
    async logout({ commit, getters }) {
        try {
            if (getters.accessToken && getters.refreshToken) {
                await API.logout(getters.accessToken, getters.refreshToken);
                commit('removeAccessToken');
                commit('removeRefreshToken');
                return true;
            }

            return false;
        } catch (err) {
            throw err;
        }
    },
    async refreshAccessToken({ commit, getters }) {
        try {
            let res = await API.refresh(getters.refreshToken);
            commit('updateAccessToken', res.data.accessToken);
        } catch (err) {
            throw err;
        }
    }
}