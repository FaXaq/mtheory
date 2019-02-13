import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn/Layout.vue'),
      children: [{
        path: 'rythm',
        name: 'rythm',
        component: () => import('./views/Learn/Rythm/Home.vue'),
      }, {
        path: '',
        name: 'home',
        component: () => import('./views/Learn/Home.vue'),
      }],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('./views/Thanks.vue'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/Errors/404.vue'),
    },
  ],
});
