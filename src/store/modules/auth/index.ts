import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AuthState } from './types';
import { RootState } from '@/store/types';

import Cookie from 'js-cookie';

export const state: AuthState = {
    accessToken: Cookie.get('accessToken') || undefined,
    refreshToken: Cookie.get('refreshToken') || undefined
};

const namespaced: boolean = true;

export const auth: Module<AuthState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};