<template>
  <div id="app">
    <m-nav-bar :links="links"></m-nav-bar>
    <router-view @notify="notify" />
    <m-fixed-container id="toasts" class="m-margin-m" :position="{ right: 0, top: 0 }">
      <transition-group name="fade">
        <m-toast
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
          @destroy="removeNotification"
        ></m-toast>
      </transition-group>
    </m-fixed-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MNavBar, { INavLink } from '@/components/ui/NavBar.vue';
import MToast from '@/components/ui/Toast.vue';
import MFixedContainer from '@/components/ui/containers/FixedContainer.vue';

import { Action, Getter } from 'vuex-class';

import uuid from 'uuid';

export interface INotification {
  level: 'info' | 'warning' | 'error',
  message: string,
  id: string,
  duration: number
}

@Component({
  components: {
    MNavBar,
    MToast,
    MFixedContainer,
  },
})
export default class App extends Vue {
  @Getter('loggedIn', { namespace: 'auth' }) loggedIn!: boolean;

  @Action('refreshAccessToken', { namespace: 'auth' }) refreshAccessToken!: any;

  @Action('logout', { namespace: 'auth' }) logout!: any;

  private notifications: Array<INotification> = [];

  get links(): Array<INavLink> {
    return [
      {
        name: 'Home',
        url: '/',
      }, {
        name: 'Learn',
        url: '/learn',
        children: [{
          name: 'Rythm',
          url: '/learn/rythm',
        }, {
          name: 'Technic',
          url: '/learn/technic',
        }, {
          name: 'Harmony',
          url: '/learn/harmony',
        }],
      }, {
        name: 'Login',
        url: '/login',
        show: !this.loggedIn,
      }, {
        name: 'Account',
        url: '/account',
        show: this.loggedIn,
        children: [{
          name: 'Logout',
          action: () => {
            this.logout();
            this.$router.push({
              name: 'home',
            });
          },
        }],
      },
    ];
  }

  notify(notification: INotification) {
    this.notifications.push({
      id: uuid(),
      level: notification.level,
      message: notification.message,
      duration: 10000,
    });
  }

  removeNotification(id: string) {
    this.notifications = this.notifications.filter(e => e.id !== id);
  }

  mounted() {
    // refresh access token each 15mins
    setInterval(() => {
      this.refreshAccessToken();
    }, 15 * 60 * 1000);
  }
}
</script>

<style lang="scss" scoped>
#toasts {
  z-index: 100;
}
</style>
