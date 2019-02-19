<template>
    <nav class="m-nav m-text-white m-absolute">
        <div class="m-nav-logo">
            <router-link to="/"></router-link>
        </div>
        <div class="m-nav-links">
            <router-link
                class="m-nav-link"
                :to="link.url"
                v-for="(link, l) in filteredLinks"
                :key="l"
                @mouseover.native="onHoverLink($event, link)"
                @click.native="hoverLink = false"
                @mouseleave.native="onLeaveLink()"
            >
                {{ $t(link.name) }}
            </router-link>
        </div>
        <m-absolute-container
                id="submenu"
                :position="cardPosition"
                v-if="showCard"
                @mouseover.native="onHoverCard(lastTarget)"
                @mouseleave.native="onLeaveCard()"
                class="m-fade-in">
            <div class="m-card m-bg-white m-text-black" v-if="lastTarget.children">
                <ul>
                    <li v-for="(cl, c) in lastTarget.children" :key="c">
                        <router-link
                            :to="cl.url"
                            @click.native="cardClick(cl)"
                            class='m-padding-s m-block m-text-transparent'
                            v-if="cl.url"
                        >
                            {{ $t(cl.name) }}
                        </router-link>
                        <a
                            href="#"
                            @click.prevent="cardClick(cl)"
                            class="m-padding-s"
                            v-if="cl.action"
                        >
                            {{ $t(cl.name) }}
                        </a>
                    </li>
                </ul>
            </div>
        </m-absolute-container>
    </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

// components
import MAbsoluteContainer from '@/components/ui/containers/AbsoluteContainer.vue';

export interface INavLink {
    name?: string,
    url?: string,
    show?: boolean,
    children?: Array<INavLink>,
    action?: () => any
}

interface ICardPosition {
    left: number,
    top: number
}

@Component({
  components: {
    MAbsoluteContainer,
  },
})
export default class MNavBar extends Vue {
    @Prop({ default: (() => []) }) private links!: Array<INavLink>;

    private hoverLink: boolean = false;

    private hoverCard: boolean = false;

    private lastTarget: INavLink | undefined;

    private cardPosition: ICardPosition = {
      left: 0,
      top: 0,
    };

    public onHoverLink(e: MouseEvent, link: INavLink) {
      if (link.children) {
        this.hoverLink = true;
        this.showSublinks(e, link);
      }
    }

    public onLeaveLink(e: MouseEvent, link: INavLink) {
      this.hoverLink = false;
    }

    public onHoverCard() {
      this.hoverCard = true;
    }

    public onLeaveCard() {
      this.hoverCard = false;
    }

    public cardClick(link: INavLink) {
      this.hoverCard = false;
      if (link.action) link.action();
    }

    public showSublinks(e: MouseEvent, link: INavLink) {
      const lElement: HTMLLinkElement = e.target as HTMLLinkElement;

      if (link.children) {
        this.lastTarget = link;
        this.cardPosition = {
          left: lElement.offsetLeft,
          top: lElement.offsetTop + lElement.offsetHeight,
        };
      }
    }

    get filteredLinks() {
      return this.links.filter(link => link.show !== false);
    }

    get showCard() {
      return this.hoverLink || this.hoverCard;
    }
}
</script>

<style lang="scss" scoped>
</style>
