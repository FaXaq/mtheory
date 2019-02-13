<template>
  <div class="home m-bg-white">
    <header class="m-page-header m-relative m-text-white">
        <div class="m-page-header-content">
            <h1 class="m-fade-in">{{ $t('home.header.title') }}</h1>
            <p class="m-fade-in-long">{{ $t('home.header.text') }}</p>
        </div>
        <m-absolute-container class="m-fill" :position="{ top: 0, left: 0}">
          <m-svg-container id="header-bg" class="m-fill">
              <m-circle v-for="(circle, c) in circles" :key="c.id" :params="circle" ></m-circle>
          </m-svg-container>
        </m-absolute-container>
    </header>
    <main class="m-main">
      <section class="m-section">
        <h1 class="">{{ $t('lorem') }}</h1>
        <p>{{ $t('lorem') }}</p>
        <button class="m-btn m-text-black">YESS</button>
      </section>
    </main>
    <footer class="m-page-footer">
      <router-link
        v-for="(link, l) in footerLinks"
        :key="l"
        :to="link.url"
      >
        {{ $t(link.name) }}
      </router-link>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clearInterval, setInterval } from 'timers';

/** components */
import MCircle, { IMCircleParams } from '@/components/ui/svg/Circle.vue';
import MSvgContainer from '@/components/ui/svg/SvgContainer.vue';
import MAbsoluteContainer from '@/components/ui/containers/AbsoluteContainer.vue';

/** mixins */
import animate from '@/mixins/Bezier';
import { randomInt, randomFloat } from '@/mixins/Rand';

/** misc */
import Color from 'color';
import { INavLink } from '@/components/ui/NavBar.vue';

@Component({
  components: {
    MSvgContainer,
    MCircle,
    MAbsoluteContainer,
  },
})
export default class Home extends Vue {
  private circles: Array<IMCircleParams> = [];

  private footerLinks: Array<INavLink> = [{
    name: 'Thanks to',
    url: '/thanks',
  }]

  public initializeCircles() {
    for (let i = 0; i < Math.floor(this.$el.clientWidth / 100); i += 1) {
      this.circles.push(this.createNewCircle(i));
    }
  }

  private createNewCircle(circleNumber: number): { [key: string]: any } {
    const color = Color([255, 255, 255, 0]);


    const cy = randomInt(0, this.$el.clientHeight);


    const cx = randomInt(0, this.$el.clientWidth);


    const r = randomInt(40, 200);


    const finalR = randomInt(20, 140);

    return {
      id: `circle-home-${circleNumber}`,
      stroke: color.alpha(randomFloat(0.2, 0.4)).string(),
      strokeWidth: 2,
      fill: color.string(),
      cx,
      cy,
      r,
    };
  }

  mounted() {
    this.initializeCircles();
  }
}
</script>

<style lang="scss" scoped>
#header-bg {
    background-image: linear-gradient(315deg, #00b0f6 0%, #3400ad 100%);
}
</style>
