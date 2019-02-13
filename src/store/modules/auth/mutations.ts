import { MutationTree } from 'vuex';
import { AuthState, ILoginParams } from './types';
import Cookie from 'js-cookie';

export const mutations: MutationTree<AuthState> = {
    updateAccessToken(state: AuthState, newToken: string) {
        Cookie.set('accessToken', newToken);
        state.accessToken = newToken;
    },
    removeToken(state: AuthState) {
        Cookie.remove('accessToken');
        state.accessToken = undefined;
    },
}