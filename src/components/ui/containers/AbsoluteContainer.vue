<template>
    <div
        class="m-absolute"
        v-m-style="{
            left: typeof position.left == 'number' ? position.left + 'px' : 'initial',
            top: typeof position.top == 'number' ? position.top + 'px' : 'initial',
            bottom: typeof position.bottom == 'number' ? position.bottom + 'px' : 'initial',
            right: typeof position.right == 'number' ? position.right + 'px' : 'initial'
        }"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IPosition } from '@/components/ui/containers/Container.vue';

// directives
import MStyle from '@/directives/Style';

@Component({
  directives: {
    MStyle,
  },
})
export default class MAbsoluteContainer extends Vue {
    @Prop({
      default: () => ({ left: 0, top: 0 }),
    }) position!: IPosition;
}
</script>

<style lang="scss" scoped>

</style>
