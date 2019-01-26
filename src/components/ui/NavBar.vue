<template>
    <nav class="m-nav m-text-white m-position-absolute">
        <div class="m-nav-logo">
            <router-link to="/"></router-link>
        </div>
        <div class="m-nav-links">
            <router-link
                class="m-nav-link m-hover-underline"
                :to="link.url"
                v-for="(link, l) in filteredLinks"
                :key="l"
            >
                {{ $t(link.name) }}
            </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface INavLink {
    name: string,
    url: string,
    showLink?: boolean,
    children?: Array<INavLink>
}

@Component({})
export default class MNavBar extends Vue {
    @Prop({ default: (() => []) }) private links!: Array<INavLink>;

    get filteredLinks() {
      return this.links.filter(link => link.showLink !== false);
    }
}
</script>
