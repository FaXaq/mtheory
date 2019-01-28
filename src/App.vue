<template>
  <div id="app">
    <m-nav-bar :links="links"></m-nav-bar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MNavBar, { INavLink } from '@/components/ui/NavBar.vue';

@Component({
  components: {
    MNavBar,
  },
})
export default class App extends Vue {
  private links: Array<INavLink> = [{
    name: 'Home',
    url: '/',
  }, {
    name: 'About',
    url: '/about',
    children: [{
      name: 'test',
      url: '/about/test',
    }],
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
  }];
}
</script>

<style lang="scss">
</style>
