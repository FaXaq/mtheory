import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from 'js-cookie';
import API, { ILoginParams, ISignupParams } from './services/Api';

Vue.use(Vuex);

interface IState {
  accessToken: string | undefined,
  refreshToken: string | undefined
}

export default new Vuex.Store({
  state: {
    accessToken: Cookie.get('accessToken') || undefined,
    refreshToken: Cookie.get('refreshToken') || undefined,
  },
  mutations: {
    updateAccessToken(state: IState, newToken: string) {
      Cookie.set('accessToken', newToken);
      state.accessToken = newToken;
    },
    removeToken(state: IState) {
      Cookie.remove('accessToken');
      state.accessToken = undefined;
    },
  },
  actions: {
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
  },
});
