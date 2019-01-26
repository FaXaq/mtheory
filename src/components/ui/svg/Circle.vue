<template>
    <circle
        :id="id"
        :cx="cx"
        :cy="cy"
        :r="r"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        :fill="fill"
    />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface IMCircleParams {
    stroke?: string,
    strokeWidth?: number,
    fill?: string,
    id?: string,
    cx?: number,
    cy?: number,
    r?: number,
}

@Component({})
export default class MCircle extends Vue {
    @Prop({
      default: (() => ({ }))(),
    })
    private params!: IMCircleParams;

    get id() {
      return this.params.id;
    }

    get cx() {
      if (typeof this.params.cx === 'number') {
        return this.params.cx;
      }

      return 10;
    }

    get cy() {
      if (typeof this.params.cy === 'number') {
        return this.params.cy;
      }

      return 10;
    }

    get r() {
      if (typeof this.params.r === 'number') {
        return this.params.r;
      }

      return 5;
    }

    get stroke() {
      if (typeof this.params.stroke === 'string') {
        return this.params.stroke;
      }

      return 'black';
    }

    get strokeWidth() {
      if (typeof this.params.strokeWidth === 'number') {
        return this.params.strokeWidth;
      }

      return 2;
    }

    get fill() {
      if (typeof this.params.fill === 'string') {
        return this.params.fill;
      }

      return 'black';
    }
}
</script>

<style lang="scss" scoped>

</style>
