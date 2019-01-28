<template>
    <div
        class="m-position-absolute"
        v-m-style="{ left: position.left + 'px', top: position.top + 'px' }"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// directives
import MStyle from '@/directives/Style';

export interface IAbsolutePosition {
    left: number,
    top: number
}

@Component({
  directives: {
    MStyle,
  },
})
export default class MAbsoluteContainer extends Vue {
    @Prop({
      default: () => ({ left: 0, top: 0 }),
    }) position!: IAbsolutePosition;
}
</script>

<style lang="scss" scoped>

</style>
