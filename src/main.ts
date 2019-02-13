import Vue from 'vue';
import './assets/scss/main.scss';
import App from './App.vue';
import router from './router';
import store from '@/store';

import './registerServiceWorker';

// internationalization
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
