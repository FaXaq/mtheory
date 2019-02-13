<template>
    <div class="m-container">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface IPosition {
    left?: number,
    top?: number,
    right?: number,
    bottom?: number
}

@Component({})
export default class MContainer extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
