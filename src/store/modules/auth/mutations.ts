import { MutationTree } from 'vuex';
import { AuthState } from './types';
import Cookie from 'js-cookie';

export const mutations: MutationTree<AuthState> = {
    updateAccessToken(state: AuthState, newAccessToken: string) {
        Cookie.set('accessToken', newAccessToken);
        state.accessToken = newAccessToken;
    },
    removeAccessToken(state: AuthState) {
        Cookie.remove('accessToken');
        state.accessToken = undefined;
    },
    
    updateRefreshToken(state: AuthState, newRefreshToken: string) {
        Cookie.set('refreshToken', newRefreshToken);
        state.refreshToken = newRefreshToken;
    },
    removeRefreshToken(state: AuthState) {
        Cookie.remove('refreshToken');
        state.refreshToken = undefined;
    }
}