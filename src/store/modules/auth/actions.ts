import { ILoginParams, AuthState, ISignupParams } from './types'
import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import API from '@/services/Api';

export const actions: ActionTree<AuthState, RootState> = {
    async login({ commit }, params: ILoginParams) {
    try {
            return await API.login(params);
        } catch (err) {
            throw err;
        }
    },
    async signup({ commit }, params: ISignupParams) {
        try {
            return await API.signup(params);
        } catch (err) {
            throw err;
        }
    }
}