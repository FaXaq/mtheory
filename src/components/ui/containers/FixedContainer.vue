<template>
    <div
        class="m-fixed"
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
import MStyle from '@/directives/Style';

@Component({
  directives: {
    MStyle,
  },
})
export default class MFixedComponent extends Vue {
    @Prop({ default: (() => ({ top: 0, left: 0 })) })
    private position!: { [key: string]: number };
}
</script>

<style lang="scss" scoped>

</style>
