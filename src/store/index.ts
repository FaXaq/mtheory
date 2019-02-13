import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import modules from '@/store/modules';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    auth: {
      accessToken: undefined,
      refreshToken: undefined
    }
  },
  modules
}

export default new Vuex.Store<RootState>(store);