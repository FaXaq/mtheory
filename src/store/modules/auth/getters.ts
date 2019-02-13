import { GetterTree } from 'vuex';
import { AuthState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<AuthState, RootState> = {
    accessToken(state): string {
        return state.accessToken || '';
    },

    refreshToken(state): string {
        return state.refreshToken || '';
    }
};