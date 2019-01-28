<template>
  <div class="home">
    <m-page-header class="m-position-relative m-text-white">
        <m-page-header-content>
            <h1 class="m-fade-in">{{ $t('home.header.title') }}</h1>
            <p class="m-fade-in-long">{{ $t('home.header.text') }}</p>
        </m-page-header-content>
        <m-svg-container id="header-bg" class="m-position-absolute m-fill">
            <m-circle v-for="(circle, c) in circles" :key="c.id" :params="circle" ></m-circle>
        </m-svg-container>
    </m-page-header>
    <m-main>
      <m-section>
        <h1 class="m-text-main">{{ $t('lorem') }}</h1>
        <p>{{ $t('lorem') }}</p>
        <button class="m-btn m-text-black">YESS</button>
      </m-section>
    </m-main>
    <m-page-footer>
      <p>footer yolo</p>
    </m-page-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clearInterval, setInterval } from 'timers';

/** components */
import MPageHeader from '@/components/ui/page/PageHeader.vue';
import MPageHeaderContent from '@/components/ui/page/PageHeaderContent.vue';
import MMain from '@/components/ui/page/Main.vue';
import MSection from '@/components/ui/page/Section.vue';
import MPageFooter from '@/components/ui/page/PageFooter.vue';
import MCircle, { IMCircleParams } from '@/components/ui/svg/Circle.vue';
import MSvgContainer from '@/components/ui/svg/SvgContainer.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

/** mixins */
import animate from '@/mixins/Bezier';
import { randomInt, randomFloat } from '@/mixins/Rand';

/** misc */
import Color from 'color';

@Component({
  components: {
    HelloWorld,
    MPageHeader,
    MPageHeaderContent,
    MMain,
    MSection,
    MPageFooter,
    MSvgContainer,
    MCircle,
  },
})
export default class Home extends Vue {
  private circles: Array<IMCircleParams> = [];

  public initializeCircles() {
    let c = 0;
    const interval = setInterval(() => {
      this.circles.push(this.createNewCircle(c));
      c += 1;

      if (c === Math.floor(this.$el.clientWidth / 100)) clearInterval(interval);
    }, 3000);
  }

  private createNewCircle(circleNumber: number): { [key: string]: any } {
    let color = Color([255, 255, 255]);


    const alpha = randomFloat(0.3, 0.8);


    const cy = randomInt(0, this.$el.clientHeight);


    const cx = randomInt(0, this.$el.clientWidth);


    const r = 0;


    const finalR = randomInt(20, 140);

    color = color.alpha(alpha);

    const newCircle = {
      id: `circle-home-${circleNumber}`,
      stroke: color.string(),
      strokeWidth: 2,
      fill: color.string(),
      cx,
      cy,
      r,
    };

    // animate
    animate({
      duration: 300,
      from: r,
      to: finalR,
      each: (v) => {
        newCircle.r = v;
      },
      easing: 'ease-in',
    });

    animate({
      duration: 300,
      from: 0,
      to: randomFloat(0.2, 0.5),
      each: (v) => {
        newCircle.fill = color.alpha(v).rgb().string();
        newCircle.stroke = color.alpha(v).rgb().string();
      },
      easing: 'linear',
    });

    animate({
      duration: 300,
      from: 1,
      to: 0,
      each: (v) => {
        newCircle.fill = color.alpha(v).rgb().string();
      },
      easing: 'linear',
      in: 300,
    });

    return newCircle;
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
