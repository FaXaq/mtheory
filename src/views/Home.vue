<template>
  <div class="home">
    <m-page-header :content="headerContent" class="m-position-relative">
        <m-svg-container id="header-bg" class="m-position-absolute m-fill">
            <m-circle v-for="(circle, c) in circles" :key="c.id" :params="circle" ></m-circle>
        </m-svg-container>
    </m-page-header>
    <p>{{ $t('lorem') }}</p>
    <button class="m-btn m-text-black">YESS</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { clearInterval, setInterval } from 'timers';

/** components */
import MPageHeader, { IHeaderContent } from '@/components/ui/PageHeader.vue';
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
    MCircle,
    MSvgContainer,
  },
})
export default class Home extends Vue {
  private headerContent: IHeaderContent = {};

  private circles: Array<IMCircleParams> = [];

  public initializeTranslations() {
    this.headerContent = {
      title: this.$i18n.t('home.header.title') as string,
      text: this.$i18n.t('home.header.text') as string,
    };
  }

  public initializeCircles() {
    let c = 0;
    const interval = setInterval(() => {
      this.circles.push(this.createNewCircle(c));
      c += 1;

      if (c === 20) clearInterval(interval);
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
    this.initializeTranslations();
    this.initializeCircles();
  }
}
</script>

<style lang="scss" scoped>
#header-bg {
    background-image: linear-gradient(to top, #3db5ca 0%, #0f5e92 100%);
}
</style>
