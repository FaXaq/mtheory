<template>
    <div id="rythm">
        <header class="m-page-header m-bg-black m-text-white m-relative">
            <div class="m-page-header-content">
                <h1>{{ $t('learn.rythm.header.title') }}</h1>
                <p>{{ $t('learn.rythm.header.content') }}</p>
            </div>
            <m-absolute-container class="m-fill" :position="{ top: 0, left: 0}">
                <m-svg-container id="header-bg" class="m-fill">
                    <m-circle :params="pulse" />
                </m-svg-container>
            </m-absolute-container>
        </header>
        <main class="m-main">
            <div class="m-flex">
                <div class="m-card m-margin-m">
                    <h2>test</h2>
                    <p>placeat molestiae vero saepe?</p>
                    <button class="m-btn m-bg-black m-text-white m-margin-v-m">Wat</button>
                </div>
                <div class="m-card m-margin-m">
                    <h2>test2</h2>
                    <p>excepturi nobis ratione magnam, placeat molestiae vero saepe?</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MCircle, { IMCircleParams } from '@/components/ui/svg/Circle.vue';
import MSvgContainer from '@/components/ui/svg/SvgContainer.vue';
import MAbsoluteContainer from '@/components/ui/containers/AbsoluteContainer.vue';
import { setInterval, setTimeout } from 'timers';

/** misc */
import Color from 'color';

import animate, { AnimationTimeline } from '@/mixins/Bezier';

@Component({
  components: {
    MSvgContainer,
    MCircle,
    MAbsoluteContainer,
  },
})
export default class LearnRythm extends Vue {
    private pulse: IMCircleParams = {};

    private bpm = 60;

    private note = 0.25;

    public pulseCircle() {
      setTimeout(() => {
        this.pulse.fill = Color.rgb(this.pulse.fill as string).alpha(1).toString();
        setTimeout(() => {
          this.pulse.fill = Color.rgb(this.pulse.fill as string).alpha(0).toString();
        }, 80);
        this.pulseCircle();
      }, (36000 / this.bpm));
    }

    created() {
      this.pulse = {
        cy: '50%',
        cx: '80%',
        r: 0,
        fill: Color.rgb([255, 255, 255, 0]).toString(),
        stroke: Color.rgb([255, 255, 255, 0.6]).toString(),
        strokeWidth: 2,
      };

      const timeline = new AnimationTimeline();

      timeline.add({
        from: 0,
        to: 40,
        each: (v) => {
          this.pulse.r = v;
          this.pulse.stroke = Color(this.pulse.stroke).alpha(v / 80).toString();
        },
        end: () => {
          this.pulseCircle();
        },
        duration: 300,
        easing: 'ease-in',
      }).start();
    }
}
</script>

<style lang="scss" scoped>

</style>
